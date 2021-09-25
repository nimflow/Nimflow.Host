using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Diagnostics.CodeAnalysis;
using System.Drawing;
using System.Drawing.Imaging;
using System.IO;
using System.Linq;
using System.Threading;
using Amazon.Runtime.Internal.Auth;
using BitMiracle.LibTiff.Classic;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Nimflow.Hub.WebApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    [ExcludeFromCodeCoverage]
    public class IntegrationTestsController : ControllerBase
    {
        private const string TiffBase64 =
            "SUkqAL4CAACAP+BACCQWDQeEQmFQuGQ2HQ+IRGJROKQ6BP+KxmNRuOR2PR+CxeQSOSSWTSeESKUSuWS2XQmVS+ZTOaRyYzWcTmdSmBzufT+aTegUOiSShUWkUmK0elU2nQumUh8qtXPqqAYqlID1mn0iozt9sBhPU9H9/ONyQUAgcDhBqs21geu0CvzWwsJ6Gs4v95PKEAcnEwFpVH3OiXWX1NXPZAIW+X6D4AmApHIi44ah4iVvdHJJ7o9JwsEF0sgpDIKEYrPpOz2mkAIOhwEnE21spTLNSV8KNTvY9H7MSO4gpDoLbS3cx+73m933gyXh8Xjyfkxvl3rHyXJZTLWyfvdKpl7ohGQjo8auUaeyt4DIdP51uuEaPS6fnxPweLyea2BFuGokrqoou55i6Mb5tI0zUPujT8vG8qDgWRxEumj0BIm9r3vihAJHGbcGJAd4SBYf58nytT+v+kELoe3bet/BD6wXECOwc/aDgSPA6ASNYzo7FiHQy+D5IIyTBsLGiSnsQJCnwThQRQA7iPQ26MyAhp3A6EqEP8ajLySo0THgFYZxLE6CLjLqNSuhksy2g8Ow/MDNvDB8OQ9Nb1pBN07zlOaWT5OE8StPSP0Cg04z+ltDoLRNCIwklGIJR1FJRSQAUoik2IXEUSRMgscx3HtKpNS9MonTaFSXJsnyjNVSI4u6yLMtE+zzSCRzNTtbVgirruayCDSMwlb0tLVeV6htZLK1qFu2ysvqXQqR0vCUKPTZIANU0Fmoa+kFRXacQxHM0oynCrg2XWjXIrb77PVXCSxtCCDLiBI/j2+iiXVbqPXdGaUVSh95oc2DZNpdCOW21lapPZ7urkoNxJPgle3+pOBU1EzfD+fJVFaueLvvjKP4qleH2jZOSWzlWJ5Zl6IZXmFK5lmc/5rm0wZxnMaZ3nkGZ9n7noCADwD+AAQAAQAAAAAAAAAAAQQAAQAAAD4AAAABAQQAAQAAAC8AAAACAQMAAwAAAHgDAAADAQMAAQAAAAUAAAAGAQMAAQAAAAIAAAARAQQAAQAAAAgAAAAVAQMAAQAAAAMAAAAWAQQAAQAAAC8AAAAXAQQAAQAAALYCAAAaAQUAAQAAAH4DAAAbAQUAAQAAAIYDAAAcAQMAAQAAAAEAAAAoAQMAAQAAAAIAAAA9AQMAAQAAAAIAAAAAAAAACAAIAAgAAHcBAOgDAAAAdwEA6AMAAA==";

        [HttpGet("[action]")]
        [AllowAnonymous]
        public string Images(CancellationToken ct)
        {
            var image1 = (Bitmap)new ImageConverter().ConvertFrom(Convert.FromBase64String(TiffBase64));
            if (image1 == null)
                throw new ApplicationException("Null image");
            if (image1.Size.IsEmpty)
                throw new ApplicationException("Empty image");
            var image2 = (Bitmap)new ImageConverter().ConvertFrom(Convert.FromBase64String(TiffBase64));
            MergeTiffUsingLibTiff(new[] { image1, image2 });
            return "ok";
        }

        private static void MergeTiffUsingLibTiff(IReadOnlyCollection<Bitmap> images)
        {
            if (images == null)
                throw new ArgumentNullException(nameof(images));
            var fileName = $"i-{Guid.NewGuid()}.tiff";
            using var output = Tiff.Open(fileName, "w");
            //var page = 0;
            foreach (var image in images)
            {
                foreach (var dimensionId in image.FrameDimensionsList)
                {
                    //create the frame dimension 
                    var dimension = new FrameDimension(dimensionId);
                    //Gets the total number of frames in the .tiff file 
                    var noOfPages = image.GetFrameCount(dimension);

                    for (var index = 0; index < noOfPages; index++)
                    {
                        var currentFrame = new FrameDimension(dimensionId);
                        image.SelectActiveFrame(currentFrame, index);
                        using var tempImg = new MemoryStream();
                        image.Save(tempImg, ImageFormat.Tiff);
                        var bitmap = (Bitmap)Image.FromStream(tempImg);
                        output.SetField(TiffTag.IMAGEWIDTH, bitmap.Width);
                        output.SetField(TiffTag.IMAGELENGTH, bitmap.Height);
                        output.SetField(TiffTag.BITSPERSAMPLE, 8);
                        //output.SetField(TiffTag.ORIENTATION, Orientation.TOPLEFT);
                        output.SetField(TiffTag.SAMPLESPERPIXEL, 3);
                        output.SetField(TiffTag.ROWSPERSTRIP, bitmap.Height);
                        //output.SetField(TiffTag.COMPRESSION, Compression.JPEG);
                        //output.SetField(TiffTag.PHOTOMETRIC, Photometric.RGB);
                        //output.SetField(TiffTag.FILLORDER, FillOrder.MSB2LSB);
                        output.SetField(TiffTag.PLANARCONFIG, PlanarConfig.CONTIG);
                        output.SetField(TiffTag.SUBFILETYPE, FileType.PAGE);
                        //output.SetField(TiffTag.PAGENUMBER, page, pages);

                        var bytes = GetImageRasterBytes(bitmap, PixelFormat.Format24bppRgb);
                        var stride = bytes.Length / bitmap.Height;
                        ConvertRgbSamples(bytes, bitmap.Width, bitmap.Height);

                        for (int i = 0, offset = 0; i < bitmap.Height; i++)
                        {
                            output.WriteScanline(bytes, offset, i, 0);
                            offset += stride;
                        }
                    }
                    output.WriteDirectory();
                }
            }
            output.Close();
        }

        private static byte[] GetImageRasterBytes(Bitmap bmp, PixelFormat format)
        {
            var rect = new Rectangle(0, 0, bmp.Width, bmp.Height);
            byte[] bits;

            try
            {
                // Lock the managed memory
                var bmpdata = bmp.LockBits(rect, ImageLockMode.ReadWrite, format);

                // Declare an array to hold the bytes of the bitmap.
                bits = new byte[bmpdata.Stride * bmpdata.Height];

                // Copy the values into the array.
                System.Runtime.InteropServices.Marshal.Copy(bmpdata.Scan0, bits, 0, bits.Length);

                // Release managed memory
                bmp.UnlockBits(bmpdata);
            }
            catch
            {
                return null;
            }

            return bits;
        }

        /// <summary>
        /// Converts BGR samples into RGB samples
        /// </summary>
        private static void ConvertRgbSamples(IList<byte> data, int width, int height)
        {
            var stride = data.Count / height;
            const int samplesPerPixel = 3;

            for (var y = 0; y < height; y++)
            {
                var offset = stride * y;
                var strideEnd = offset + width * samplesPerPixel;

                for (var i = offset; i < strideEnd; i += samplesPerPixel)
                {
                    (data[i + 2], data[i]) = (data[i], data[i + 2]);
                }
            }
        }

        /// <summary>
        ///     Merges multiple TIFF files (including multipage TIFFs) into a single multipage TIFF file.
        /// </summary>
        private static MemoryStream MergeTiffUsingBitmaps(IEnumerable<Image> images)
        {
            var stream = new MemoryStream();

            //get the codec for tiff files
            var tiffCodec = ImageCodecInfo.GetImageEncoders().FirstOrDefault(s => s.MimeType == "image/tiff");
            if (tiffCodec == null)
                throw new ApplicationException("Codec not found");

            var encoder = Encoder.SaveFlag;
            var ep = new EncoderParameters(1);

            Bitmap pages = null;
            foreach (var image in images)
            {
                foreach (var dimensionId in image.FrameDimensionsList)
                {
                    //create the frame dimension 
                    var dimension = new FrameDimension(dimensionId);
                    //Gets the total number of frames in the .tiff file 
                    var noOfPages = image.GetFrameCount(dimension);

                    for (var index = 0; index < noOfPages; index++)
                    {
                        var currentFrame = new FrameDimension(dimensionId);
                        image.SelectActiveFrame(currentFrame, index);
                        using var tempImg = new MemoryStream();
                        image.Save(tempImg, ImageFormat.Tiff);
                        {
                            if (pages == null)
                            {
                                //save the first frame
                                pages = (Bitmap)Image.FromStream(tempImg);
                                ep.Param[0] = new EncoderParameter(encoder, (long)EncoderValue.MultiFrame);
                                pages.Save(stream, tiffCodec, ep);
                            }
                            else
                            {
                                //save the intermediate frames
                                ep.Param[0] = new EncoderParameter(encoder, (long)EncoderValue.FrameDimensionPage);
                                pages.SaveAdd((Bitmap)Image.FromStream(tempImg), ep);
                            }
                        }
                    }
                }
            }

            if (pages != null)
            {
                //flush and close.
                ep.Param[0] = new EncoderParameter(encoder, (long)EncoderValue.Flush);
                pages.SaveAdd(ep);
            }

            stream.Position = 0;

            return stream;
        }
    }
}
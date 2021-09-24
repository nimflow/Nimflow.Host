#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:5.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

RUN apt-get update && apt-get install -y libgdiplus

FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build
WORKDIR /src
COPY ["Nimflow.Hub.WebApi/Nimflow.Hub.WebApi.csproj", "Nimflow.Hub.WebApi/"]
RUN dotnet restore "Nimflow.Hub.WebApi/Nimflow.Hub.WebApi.csproj"
COPY . .
WORKDIR "/src/Nimflow.Hub.WebApi"
RUN dotnet build "Nimflow.Hub.WebApi.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Nimflow.Hub.WebApi.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Nimflow.Hub.WebApi.dll"]
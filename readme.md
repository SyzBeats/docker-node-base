# Docker

## Information

### docker cli

> The docker cli is used when managing individual containers on a docker engine. It is the client command line to access the docker daemon api.

### docker-compose cli

> The docker-compose cli can be used to manage a multi-container application. It also moves many of the options you would enter on the docker run cli into the docker-compose.yml file for easier reuse. It works as a front end "script" on top of the same docker api used by docker, so you can do everything docker-compose does with docker commands and a lot of shell scripting.

# commands

## run interactively with file changes

```
docker run -it -p 8080:5000 -v $(pwd):/app node-tutorial
```

## Build image from current directory

```
docker build -t node-tutorial .
```

## list containers

```
docker ps
```

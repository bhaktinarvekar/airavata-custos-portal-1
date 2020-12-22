# Apache Airavata Custos Portal

Portal interface implemented in Django Framework to use and administer Custos Services.


#### Run instructions

1. Move to the directory that contains Dockerfile 

2. Build a docker image
```
docker build -t custos-admin .
```
3. Create a docker container
```
docker run -p 8000:8000 --name=custos custos-admin
```

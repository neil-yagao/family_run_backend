#! /bin/bash

IMAGE_NAME="family_run_backend:$1"
echo $1
if [ -e $1 ] ;then 
	echo "unable to identify version"
	exit -1
fi

docker build --build-arg "VERSION=$1" -t $IMAGE_NAME .
docker tag $IMAGE_NAME neilhu68/$IMAGE_NAME
docker push neilhu68/$IMAGE_NAME

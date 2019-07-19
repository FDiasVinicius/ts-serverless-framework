#!/bin/sh

ENV=$1
TAG=$2
CURRENT_TAG="";
YELLOW='\033[1;33m'
RED='\033[0;31m'
GREEN='\033[0;32m'
NO_COLOR='\033[0m'

if [ -z $ENV ]; then
    echo -e "${RED}DANGER${NO_COLOR}: environment parameter is not set"
    exit 1
fi

printf "${YELLOW}WARNING${NO_COLOR}: Deploy will be applied in ${ENV} environment. Did you want to procced? [Y/N]"
read -p "" choice

if [ $choice != "Y" ] && [ $choice != "y" ]; then
    exit
fi

echo "deploing..."

if [ -z $TAG ]; then
    echo "Getting current TAG..."
    TAG=$(git describe --exact-match --tags $(git log -n1 --pretty='%h'))
fi

if [ -z $TAG ]; then
    echo -e "${YELLOW}WARNING${NO_COLOR}: TAG does not exists, fallbacking to branch..."
    TAG=$(git branch | grep \* | cut -d ' ' -f2)
fi

echo -e "Checkouting to ${TAG} ..."
git checkout $TAG
if [ $? != 0 ]; then
        exit $?
fi

echo "serverless deploying to lambda"
docker-compose exec app sls deploy --stage $ENV

if [ $? != 0 ]; then
    exit $?
fi

echo -e "${GREEN}serverless deploy succeed!${NO_COLOR}"

echo -e "${GREEN}Deploy finished!${NO_COLOR}"
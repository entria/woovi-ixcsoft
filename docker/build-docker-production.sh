#!/usr/bin/env bash
set -x
COMMIT_SHA=$(git rev-parse HEAD)
BUILD_TIMESTAMP=$(date -u +"%Y-%m-%dT%H:%M:%SZ")

rm -rf build
pnpm build
docker build --platform=linux/amd64 -t registry.dev1.woovi.corp:8010/woovi/service-woovi-ixcsoft \
  -f Dockerfile . \
  --build-arg=COMMIT_SHA=$COMMIT_SHA \
  --build-arg BUILD_TIMESTAMP=$BUILD_TIMESTAMP

docker image tag registry.dev1.woovi.corp:8010/woovi/service-woovi-ixcsoft \
  registry.dev1.woovi.corp:8010/woovi/service-woovi-ixcsoft:production

docker push registry.dev1.woovi.corp:8010/woovi/service-woovi-ixcsoft:production

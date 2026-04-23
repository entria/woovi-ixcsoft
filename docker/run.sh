#!/usr/bin/env bash
set -e

IMAGE_NAME="registry.dev1.woovi.corp:8010/woovi/service-woovi-ixcsoft"

docker run --rm -it \
  --env-file .env \
  --label co.elastic.logs/enabled=true \
  --label co.elastic.logs/json.keys_under_root=true \
  --label co.elastic.logs/json.overwrite_keys=true \
  --label co.elastic.logs/json.add_error_key=true \
  -p 3000:3000 \
  $IMAGE_NAME

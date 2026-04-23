#!/usr/bin/env bash
set -e

cd docker/woovi-ixcsoft
pnpm install --lockfile-only
cd ../..

echo "Updated docker/woovi-ixcsoft pnpm-lock.yaml"

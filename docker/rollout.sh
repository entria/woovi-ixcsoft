#!/usr/bin/env bash
set -x #echo on

# After `pnpm docker:staging` (staging pulls :staging with imagePullPolicy: Always)
kubectl rollout restart deployment -n woovi-ixcsoft

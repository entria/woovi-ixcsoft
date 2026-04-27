FROM registry.dev1.woovi.corp:8010/woovi/node:24-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

ARG COMMIT_SHA
ENV COMMIT_SHA=$COMMIT_SHA

ARG BUILD_TIMESTAMP
ENV BUILD_TIMESTAMP=$BUILD_TIMESTAMP

EXPOSE ${PORT}

COPY ./.next/standalone/ /usr/src/app/
# Next.js 16 standalone tracing misses instrumentation.js + its server chunks.
# Copy the full .next/server/ so register() runs on boot (DB, workers, cron).
COPY ./.next/server/ /usr/src/app/.next/server/
COPY ./.next/static/ /usr/src/app/.next/static/
COPY ./public/ /usr/src/app/public/

ENV NODE_OPTIONS="--enable-source-maps --trace-warnings"

CMD ["node", "server.js"]

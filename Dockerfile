FROM registry.dev1.woovi.corp:8010/woovi/node:24-alpine

RUN npm i -g corepack@latest && corepack enable pnpm && corepack install -g pnpm@latest-10

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json pnpm-lock.yaml ./

ENV NODE_ENV=production
ENV PORT=3000

ARG COMMIT_SHA
ENV COMMIT_SHA=$COMMIT_SHA

ARG BUILD_TIMESTAMP
ENV BUILD_TIMESTAMP=$BUILD_TIMESTAMP

EXPOSE ${PORT}

RUN pnpm install --prod --frozen-lockfile

COPY ./build /usr/src/app/

ENV NODE_OPTIONS="--enable-source-maps --trace-warnings"

CMD ["node", "service-ixcsoft.js"]

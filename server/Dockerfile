FROM node:16-alpine
# Installing libvips-dev for sharp Compatibility
RUN apk update && apk add  build-base gcc autoconf automake zlib-dev libpng-dev nasm bash vips-dev
ARG NODE_ENV=development
ENV NODE_ENV=development
WORKDIR /opt/
COPY ./package.json ./yarn.lock ./
ENV PATH /opt/node_modules/.bin:$PATH
RUN yarn install
WORKDIR /opt/app
COPY ./ .
RUN yarn build
RUN npm rebuild --verbose
EXPOSE 1337
CMD ["yarn", "develop"]
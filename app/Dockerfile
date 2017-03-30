FROM node:6-alpine

RUN apk add --update nginx openssl
RUN wget http://yarnpkg.org/latest.tar.gz && \
    tar -xzf latest.tar.gz

ENV PATH $PATH:/dist/bin

COPY . /home/app
WORKDIR /home/app

RUN yarn install && yarn build

COPY nginx.conf /etc/nginx/nginx.conf

CMD ./run.sh

FROM node:6-alpine

RUN apk add --update nginx openssl curl
RUN wget http://yarnpkg.org/latest.tar.gz && \
    tar -xzf latest.tar.gz

ENV PATH $PATH:/dist/bin

COPY . /home/app
WORKDIR /home/app

RUN yarn install && yarn build

COPY nginx.conf /etc/nginx/nginx.conf

RUN curl -LO https://storage.googleapis.com/kubernetes-release/release/$(curl -s https://storage.googleapis.com/kubernetes-release/release/stable.txt)/bin/linux/amd64/kubectl && chmod +x kubectl && mv kubectl /usr/local/bin

CMD ./run.sh

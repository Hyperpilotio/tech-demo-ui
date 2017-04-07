FROM node:6-alpine

RUN apk add --update nginx openssl curl
RUN wget http://yarnpkg.org/latest.tar.gz && \
    tar -xzf latest.tar.gz
RUN curl -LO https://storage.googleapis.com/kubernetes-release/release/$(curl -s https://storage.googleapis.com/kubernetes-release/release/stable.txt)/bin/linux/amd64/kubectl && chmod +x kubectl && mv kubectl /usr/local/bin

ENV PATH $PATH:/dist/bin

COPY . /home/app
WORKDIR /home/app
COPY nginx.conf /etc/nginx/nginx.conf

RUN yarn install && yarn build

CMD ./run.sh

FROM node:6

RUN wget https://yarnpkg.org/latest.tar.gz && \
    tar -xf latest.tar.gz && \
    mv dist /opt/yarn

ENV PATH $PATH:/opt/yarn/bin

ADD . /home/app
WORKDIR /home/app

RUN yarn install && yarn build

CMD yarn start

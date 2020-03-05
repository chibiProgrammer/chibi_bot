#nodeを追加する
FROM node:latest

#作業スペースを作る
WORKDIR /workspace

#workspaceに追加をする
COPY package.json ./
COPY package-lock.json ./

RUN npm install

COPY . .

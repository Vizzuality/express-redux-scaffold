# React demo project

A boilerplate to make static projects using Koa, Redux, React and Mocha.

## Install

Requirements:

* NodeJs 5.2+ [How to install](https://nodejs.org/download/)
* Heroku toolbet [How to install](https://toolbelt.heroku.com)

To install run this command:

```bash
npm install
```

## Usage

Run server locally usgin npm:

```bash
npm start
```

Run server locally using Heroku environment:

```bash
heroku local web
```

## Deploy

Configure existing heroku app:

```bash
heroku git:remote -a project
```

Run this command to publish master branch to Heroku:

```bash
git push heroku master
```

# my-brunch-dyn-skeleton

This is my skeleton for dynamic, brunch based, websites.

## Install

```auto
nvm use stable
npm install
npm run start
```

## Installing on AWS S3

The *production* environement makes sure autolaod capability is removed. It increases the size of the js download,
and keeps polling was unsucessfully. It also removes generated maps.

To prepare for production, run :

```auto
npm run build
```
You can then export the content of the *public* folder to AWS S3.

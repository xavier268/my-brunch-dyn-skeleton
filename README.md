# my-brunch-dyn-skeleton

This is my skeleton for dynamic, brunch based, websites.

## Install

```auto
nvm use stable
npm install
npm start
```

## Installing on AWS S3

Make sure to remove autolaod capability. It increases the size of the js download,
and keeps polling was unsucessfully.

You can use the provided script **recompileForProduction.sh** to do so.
**Do not rely** on the "npm build" script, that will **NOT** work !

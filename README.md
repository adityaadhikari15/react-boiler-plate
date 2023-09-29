# Steps to initialize a react project

## Initial setup

**-** Create index.html and app.js

**-** `npm init` (Creates package.json, it will ask about your application configuration.)

**-** `npm install -D parcel` (Parcel is used to build optimized application for development purpose. -D will add parcel in dev dependencies as we do not want to push parcel in production. As user will make build on his/her local machine)

**-** `npm install react`

**-** `npm install react-dom`

**-** `npm install primereact` UI library for react. [Read more about primereact](https://primereact.org/)

**-** Create .gitignore

## How to run application

### Without script

**-** Run your application `npm parcel index.html`

**-** Build your application `npm parcel build index.html`

### With script

```
// Add this on package.json

"scripts": {
    "start": "parcel index.html",
    "build": "parcel build index.html",
    "test": "jest"
  }
```

**-** Run your application using `npm start`

**-** Build you application using `npm build`

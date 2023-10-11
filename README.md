# React boiler plate for large scalable projects.

If you have more basic concepts which can help our fellow react developers or a great idea for this boiler plate please feel free to create a pull request. I am open for every contribution. I will learn from you and I hope this boiler plate will also help you in developing large scalable projects.

### What is included in this boiler plate?

✅ React basic and nested routing using `react-router-dom`

✅ `Authentication guard` and `User based guard` as router guards

✅ `Layout structure` for different users

✅ `Custom Hooks` for local storage

✅ `Lazy Loading` for dynamic importing of components to reduce our main bundle size.

✅ Live API call using `Axios`

✅ `useContext()` for data sharing throughout the application

✅ `Axios Interceptor` as `custom hook` for header and base URL **(Avoid using passing of headers in every service file)**

✅ `React-redux` & `React-tookit` for **state management**

✅ `Prime React` and `Bootstrap` as our UI library

✅ `Login page`, `Users list` and `Products list` with live API call.

### How to run?

**-** Run your application using `npm start`

**-** Build you application using `npm build`

### Testing configurations

**-** Install `@testing-library/react`

**-** Install `jest` for testing

**-** Install `babel` dependencies. [Read how to install](https://jestjs.io/docs/getting-started)

**-** Configure `babel.config`. [Read how to install](https://jestjs.io/docs/getting-started#using-babel)

### Configure your parcel for testing purpose

**(Important) Parcel has its own default babel transpiler. Parcel babel configuration will conflict with testing `babel.config`. [Read more](https://parceljs.org/languages/javascript/#babel).**

#### How to solve the conflict

**-** Follow steps from [this link](https://parceljs.org/languages/javascript/#usage-with-other-tools) of parcel.

**-** Configure you `.parcelrc` to disable parcel default `babel` transpiler. [Read more](https://parceljs.org/languages/javascript/#usage-with-other-tools)

#### Test your parcel and jest configuration for conflicts

**-** Run `npm run test`

#### Setup jest testing file

**-** Run `npx jest init`

**Follow the below options**

**✔** Would you like to use Typescript for the configuration file? … `no`

**✔** Choose the test environment that will be used for testing › `jsdom (browser-like)`

**✔** Do you want Jest to add coverage reports? … `yes`

**✔** Which provider should be used to instrument code for coverage? › `babel`

**✔** Automatically clear mock calls, instances, contexts and results before every test? … `yes`

**-** After selecting options asked by jest it will create a `jest.config.js`

**(Important)** If your are using `jest package` about version `28`, then run `npm install --save-dev jest-environment-jsdom`. [Read more](https://testing-library.com/docs/react-testing-library/setup#jest-28)

### Dependencies Used in this project

```
"axios": "^1.5.1", // API calls
"bootstrap": "^5.2.3",
"primereact": "^10.0.2",  // UI Library with components
"react": "^18.2.0",
"react-dom": "^18.2.0",
"react-router-dom": "^6.16.0",
"react-redux": "^8.1.3",
"@reduxjs/toolkit": "^1.9.7",
"parcel": "^2.9.3",
```

### Resources

➡️ [React](https://react.dev/)

➡️ [Parcel](https://parceljs.org/)

➡️ [Prime React](https://primereact.org/)

➡️ [Axios](https://axios-http.com/docs/intro)

➡️ [Bootstrap](https://getbootstrap.com/docs/5.3/getting-started/introduction/)

➡️ [React Router](https://reactrouter.com/en/main)

➡️ [React-Redux](https://react-redux.js.org/)

➡️ [Dummy API Calls with authentication and live data](https://dummyjson.com/docs)

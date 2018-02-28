# react-algolia-places

A simple but powerful React.js wrapper around fantastic Algolia's place !

## How to use

Install the package by using **npm**

```bash
    npm install -S react-algolia-places
```

Or use **yarn**

```bash
    yarn add react-algolia-places
```

Then import the package

```javascript
    import React, {Component} from 'react'
    import ReactDOM from 'react-dom'

    import Place from 'react-algolia-places'

    ReactDOM.render(<Place />, document.getElementById('app'))

```

## Properties


 Properties | Type |Required | Default value | Effect | Example
 ---|---| ---| ---|---|---
 `onChange` | function | **YES** | `false` | Fired when suggestion selected in the dropdown or hint was validated. | `true`
 `disable` | Boolean | No | `false` | enable/ disable the input | `true`
 `language` | String | No | `navigator.language` | 2 letters country code (ISO 3166-1 alpha-2) | `fr`
 `countries` | Array of strings | No | *no values* | Change the countries to search in. Array of two letters country codes | `['fr', 'en', 'de', 'be']`
 `type` | String | No | *no values* | Restrict the search results to a specific type.  | `['city', busStop]`
 `useDeviceLocation` | Boolean | No | `false` | Ask and use the device location. | `true`
 `appId` | String | No  | *no values* | If using the authenticated API, the Application ID to use. | --
 `apiKey` | String | No | *no values* | If using the authenticated API, the API key to use. | --

ℹ️ List of accepted `types` :
- city
- country
- address
- busStop
- trainStation
- townhall
- airport


## Runnning locally

Run the following script `yarn demo` or `npm run demo` and open a browser at http://localhost:3000

## Runnning the test suite
Our test is based on Airbnb's Enzyme, JEST and Jasime test suite, to run them use the following script `yarn test`

## To do

Support other [Algolia's place options](https://community.algolia.com/places/documentation.html#options) and [Events](https://community.algolia.com/places/documentation.html#events)
Write Tests

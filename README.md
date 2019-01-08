# hyper-table

[![npm](https://img.shields.io/npm/dm/hyper-table.svg)](https://www.npmjs.com/package/hyper-table)

[![build](https://travis-ci.org/neetjn/hyper-table.svg?branch=master)](https://travis-ci.org/neetjn/hyper-table/)
[![npm version](https://badge.fury.io/js/hyper-table.svg)](https://badge.fury.io/js/hyper-table)

[![NPM](https://nodei.co/npm/hyper-table.png)](https://nodei.co/npm/hyper-table/)

### About

**hyper-table** is a ReactTable port for the HyperHTML framework. Underneath...


### Support

*This project was created with and for hyper-html 2.14.0, support for previous versions is not available.*

### Example

```js
const columns = [
  {
    Header: 'Name',
    accessor: 'name'
  },
  {
    Header: 'Age',
    accessor: 'age'
  }
]

const data = [
  {
    name: 'John Doe',
    age: 23,
  },
  {
    name: 'Jane Doe',
    age: 26,
  }
]

hyperHTML.bind(document.querySelector('#table'))`
<h1>User Table</h1>
${new Table({
  columns,
  data
})}
```

### Usage

To install via Bower, simply do the following:

```sh
bower install hyper-table
```

To install via NPM:

```sh
npm install hyper-table
```

For a quick start using jsdelivr:

```html
<script src="https://cdn.jsdelivr.net/npm/hyper-table/dist/hyper-table.min.js"></script>
```

### Contributors

* John Nolette (john@neetgroup.net)

Contributing guidelines are as follows,

* Any new features must include either a unit test, e2e test, or both.
    * Branches for bugs and features should be structured like so, issue-x-username.
* Before putting in a pull request, be sure to verify you've built all your changes.
* Travis will build your changes before testing and publishing, but bower pulls from this repository directly.
* Include your name and email in the contributors list.

Notes,

Be sure to run prettier using:
```sh
npm run pretty
```
Prior to committing any code changes.

---
Copyright (c) 2019 John Nolette Licensed under the MIT license.

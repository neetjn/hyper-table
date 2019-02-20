# hyper-table

[![npm](https://img.shields.io/npm/dm/@neetjn/hyper-table.svg)](https://www.npmjs.com/package/@neetjn/hyper-table)

[![build](https://travis-ci.org/neetjn/hyper-table.svg?branch=master)](https://travis-ci.org/neetjn/hyper-table/)
[![npm version](https://badge.fury.io/js/@neetjn/hyper-table.svg)](https://badge.fury.io/js/@neetjn/hyper-table)
[![codecov](https://codecov.io/gh/neetjn/hyper-table/branch/master/graph/badge.svg)](https://codecov.io/gh/neetjn/hyper-table)

[![NPM](https://nodei.co/npm/@neetjn/hyper-table.png)](https://nodei.co/npm/@neetjn/hyper-table/)

### About

**hyper-table** is a [ReactTable](https://github.com/react-tools/react-table) port for the HyperHTML framework. This project is relatively simple, and simply generates tables given a structured list of columns and a vector of data.


### Support

*This project was created with and for hyper-html 2.14.0, support for previous versions is not available.*

### Example

This project provides a generator to define a component instance:

```js
const Table = hyperTable(hyperHTML)
```

The **hyper-table** component consumes and expects two props:

* **columns**: Structured list of columns for table, provides header information and other functional details.
* **data**: Vector of data to be loaded in by order of defined columns.

```js
// columns will be rendered in order
const columns = [
  {
    // label for table header
    Header: 'Name',
    // alias for data vector object
    accessor: 'name'
  },
  {
    Header: 'Age',
    accessor: 'age'
  }
]

// data will be rendered by order of columns
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

// <!-- <div id="table"> -->
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

Be sure to run prettier using:
```sh
npm run pretty
```
Prior to committing any code changes.

---
Copyright (c) 2019 John Nolette Licensed under the MIT license.

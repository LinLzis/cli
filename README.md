# Coding CLI

[![npm](https://img.shields.io/npm/v/@slsplus/coding)](http://www.npmtrends.com/@slsplus/coding)
[![NPM downloads](http://img.shields.io/npm/dm/@slsplus/coding.svg?style=flat-square)](http://www.npmtrends.com/@slsplus/coding)
[![Build Status](https://github.com/serverless-plus/coding/workflows/Release/badge.svg?branch=master)](https://github.com/serverless-plus/coding/actions?query=workflow:Release+branch:master)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

CLI tool for https://coding.net

## Features

- [x] [Typescript](https://github.com/microsoft/TypeScript)
- [x] [Github Actions](https://github.com/features/actions)
- [x] [Eslint](https://github.com/eslint/eslint)
- [x] [Prettier](https://github.com/prettier/prettier)
- [x] [Jest](https://github.com/facebook/jest)
- [x] [semantic-release](https://github.com/semantic-release/semantic-release)

## Usage

```bash
$ npm i @slsplus/coding
$ coding -h
```

## Environment

For auto `release` action, you should setup `GH_TOKEN` and `NPM_TOKEN` secrets.

## Development

All `git commit` mesage must follow below syntax:

```bash
type(scope?): subject  #scope is optional
```

support type：

- **feat**: add new feature
- **fix**: fix bug or patch feature
- **ci**: CI
- **chore**: modify config, nothing to do with production code
- **docs**: create or modifiy documents
- **refactor**: refactor project
- **revert**: revert
- **test**: test

Most of time, we just use `feat` and `fix`.

## License

MIT

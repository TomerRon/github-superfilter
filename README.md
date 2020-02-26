# GitHub Superfilter

[![Build Status](https://travis-ci.org/TomerRon/github-superfilter.svg?branch=master)](https://travis-ci.org/TomerRon/github-superfilter)

🚀 GitHub Superfilter is a web extension that adds a lovely filter to GitHub pull requests.

<p align="center">
  <img src="https://i.imgur.com/xU97mu1.gif">
</p>

## Table of contents

- [Why use GitHub Superfilter?](#why-use-github-superfilter)
- [Installation (local development)](#installation-local-development)
- [Installation (browser)](#installation-browser)
  - [Building/Downloading the extension](#buildingdownloading-the-extension)
  - [Installing the extension](#installing-the-extension)
- [Development flow](#development-flow)
- [Build flow](#build-flow)
- [License](#license)

## Why use GitHub Superfilter?

GitHub's default filter sucks! It only allows to filter by file extension, and it doesn't properly handle files with multiple extensions (like `.test.js`)

On the other hand, GitHub Superfilter is awesome!

🎉 It gives you more control over how you filter your pull requests. You can search for files in a specific folder (`/components/`), or with a specific extension (`.test.js`). You can also filter out files (`!/src/` or `!test`)

🎉 It's lightweight (< 4KB), only runs on github.com, and does not make your browser slower

🎉 It helps you become a better developer by making your life just a little bit easier

## Installation (local development)

Clone this repository, and install the dependencies:

```
git clone https://github.com/TomerRon/github-superfilter
cd github-superfilter
yarn
```

## Installation (browser)

GitHub Superfilter is currently not available in the Firefox/Chrome extension stores, so you need to manually install the add-on. If there's demand for an actual release, we will publish it in the Firefox/Chrome extension stores.

### Building/Downloading the extension

#### Method 1: The Bad Way

⚠️ **Don't do this!** You should never run unknown code in your browser.

- Grab the latest [release](https://github.com/TomerRon/github-superfilter/releases).

- Proceed to [Installing the extension](#installing-the-extension)

#### Method 2: The Good Way

- If you haven't already, [install github-superfilter locally](#installation-local-development)

- Take 5 minutes to glance at the code. Don't run code in your browser without verifying it first!

- Proceed to [Installing the extension](#installing-the-extension)

### Installing the extension

#### Firefox - temporary installation (manual)

- Go to `about:debugging`
- Press `Load Temporary Add-on`
- Select the `dist/manifest.json` file. If you don't have one, run `yarn build`

#### Firefox - temporary installation (command-line)

Follow the instructions in [Development flow](#development-flow).

This is nice because the extension will automatically reload when any changes are made.

#### Firefox - permanent installation

- Go to `about:addons`
- Press the cogwheel in the top-right corner
- Press `Install Add-on From File...`
- Select the `dist/manifest.json` file. If you don't have one, run `yarn build`

#### Google Chrome

@TODO

## Development flow

Watch the files:

```
yarn watch
```

Start a temporary Firefox session with the add-on installed.
The session uses a new profile that is destroyed after Firefox is closed.

```
yarn start:sandbox
```

Start a temporary Firefox session with the add-on installed.
Use the standard (default) Firefox profile, which shares session/cookies with other windows.

```
yarn start
```

Run the unit tests:

```
yarn test
```

## Build flow

Create a build:

```
yarn build
```

Or, create a build and zip it (useful for GitHub releases):

```
yarn build-release
```

## License

This project is licensed under the ISC License - see the [LICENSE.md](LICENSE.md) file for details.

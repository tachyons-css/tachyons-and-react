# Getting Started with Tachyons and React

Tachyons integrates seamlessly with component libraries, and React is no exception.
This tutorial will outline getting started using Tachyons in a React app and assumes a node installation.

> ***
> In order to keep things succinct and focused around a basic Tachyons + React build this example will only use `create-react-app` defaults and not modify webpack directly.
> It will illustrate using the `tachyons-cli` and `create-react-app` in tandem for a pretty straightforward config.
> More in depth tutorials will follow that illustrate modifying webpack config directly for a more seamless build.
***

So, let's get started :sunglasses:.

## Installation

Firstly, check to make sure that node is installed and npm is up to date.

```
node -v      # should output v6.0 or above
npm install --global npm # this will install the latest version of npm globally
```

Now, install `create-react-app` to get a React app bootstrapped quickly.

```
npm install --global create-react-app
```

## Creating a project

Once `create-react-app` is installed we can scaffold out a project.

```
create-react-app tachyons-and-react
cd tachyons-and-react
```

To make sure everything worked as expected, it's recommended to start up the app and make sure it works as expected.
This can be achieved by `npm start`.
It should also automatically open up your browser to display the newly scaffolded app.

```
npm start
```

##### A clean slate

If everything works correctly we can remove the default css since we won't be using it.

```
rm src/App.css index.css
```

And remove the following line from `src/App.js`:

```jsx
import './App.css';
```

[DIFF](https://github.com/johnotander/tachyons-and-react/commit/d5f6762683556b1ce3aa706341596ea55cfbd724)

##### Integrating tachyons

After we achieve a clean css slate we can install `tachyons` and the `tachyons-cli` as a dependency.

```
npm install --save tachyons tachyons-cli
```

Then define a place for the css to live.

```
mkdir src/css
echo '@import "tachyons";' > src/css/app.css
```

###### An aside

> In an effort to not use `create-react-app`'s `eject` command we've opted to use the `tachyons-cli` to build or css and create the `src/index.css` imported by the config. Currently this is the most straightforward way to use `postcss-import` [[1]](https://github.com/facebookincubator/create-react-app/issues/78).

##### Create a css build script

Using the cli and npm scripts we can add `css` script.

```json
{
  "name": "tachyons-and-react",
  "version": "0.1.0",
  "private": true,
  "devDependencies": {
    "react-scripts": "0.4.3"
  },
  "dependencies": {
    "react": "^15.3.2",
    "react-dom": "^15.3.2",
		"tachyons": "^4.5.2",
    "tachyons-cli": "^1.0.8"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject",
    "css": "tachyons src/css/app.css > src/index.css --minify"
  }
}
```

This will allow us to `npm run css` to build the css.
However, we don't want to run that every time we run `npm start` or `npm run build` so we can take advantage of `pre` scripts that npm exposes:

```json
{
  "name": "tachyons-and-react",
  "version": "0.1.0",
  "private": true,
  "devDependencies": {
    "react-scripts": "0.4.3"
  },
  "dependencies": {
    "react": "^15.3.2",
    "react-dom": "^15.3.2",
		"tachyons": "^4.5.2",
    "tachyons-cli": "^1.0.8"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject",
    "css": "tachyons src/css/app.css > src/index.css --minify",
    "prestart": "npm run css",
    "prebuild": "npm run css"
  }
}
```

Rad! Now everytime the project is run or built, our css is rebuilt.
Also, since we've imported `tachyons` in `src/css/app.css` it will be imported from `node_modules`.
This is especially useful down the road because updating `tachyons` becomes seamless: `npm update tachyons && npm run css`.

[DIFF](https://github.com/johnotander/tachyons-and-react/commit/22deea9bc5cf9fcb8fed7bd68629c3d67e9b17f7)

###### Rebuild css on changes

With our existing implementation we're still missing one key piece.
Making css changes aren't automatically shown in the app if it's already started.
In order to achieve this we will need to `eject` from `create-react-app` so we can modify the webpack config.
This will come in a later tutorial.
In the meantime, please see our [`tachyons-webpack`](https://github.com/tachyons-css/tachyons-webpack) to see it in action.

## Add a header component

Now that we've got we have the project building and importing `tachyons` we can start building out components.
Let's start at the top of the page and build the [circle avatar subtitle](http://tachyons.io/components/headers/circle-avatar-title-subtitle/) component.

###### Get an avatar

The first thing we want to do is download the avatar image (or add your own).

```
curl http://tachyons.io/img/logo.jpg > src/logo.jpg
```

##### Create and header component

Since we don't have a place for components to live yet, create a components directory in `src`.

```
mkdir src/components
```

Then create a (functional) component by adding the following to `src/components/header.js`:

```jsx
import React from 'react'
import logo from '../logo.jpg'

export default () => (
  <header className='tc pv4 pv5-ns'>
    <img src={logo} className='br-100 pa1 ba b--black-10 h3 w3' alt='avatar' />
    <h1 className='f5 f4-ns fw6 mid-gray'>Jasper Whitehouse</h1>
    <h2 className='f6 gray fw2 ttu tracked'>Los Angeles</h2>
  </header>
)
```

##### Render the header component

Then import and render the `Header` component by changing `src/App.js` to:

```jsx
import React, { Component } from 'react'
import Header from './components/header'

class App extends Component {
  render() {
    return <Header />
  }
}

export default App
```

[DIFF](https://github.com/johnotander/tachyons-and-react/commit/2d7b2f85ea3564d1b5c4b4827678b9ad00d4de0c)

##### Did it work?

Now run `npm start` and make sure everything is rendering correctly.
We should be seeing the same component as the Tachyons docs.

## Conclusion

That's it for a basic Tachyons and React project.

***

> Tachyons + React = <3

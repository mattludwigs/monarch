# Monarch

Monarch is a command line tool for developing scalable, maintainable Elm apps productively.

## System Requirements

1. Node 4+
2. Elm 0.17

**until version 1 assume unstable** 

## Starting a new Single Page Application

```
$ monarch new awesome-app
$ cd awesome-app && npm install && elm-package install -y
$ npm run dev
```

The single page application uses [hop](https://github.com/sporto/hop) as the routing layer

## Making a new component

While in your project directory run:

```
$ monarch component hello
```

This will create a new component view at `src/components/<name>/View.elm`

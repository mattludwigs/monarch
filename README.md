# Monarch

Monarch is a command line tool for developing scalable, maintainable Elm apps productively.

## Starting a new Single Page Application

```
$ monarch new awesome-app
$ cd awesome-app && nmp install && elm-package install
$ npm run dev
```

The single page application uses [hop](https://github.com/sporto/hop) as the routing layer

## Making a new component

While in your project directory run:

```
$ monarch component hello
```

This will create a new component view at `src/components/<name>/View.elm`

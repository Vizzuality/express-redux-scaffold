# Vizzuality projects generator

TODO: make a description

### Rails and Redux generator

It tries to ingrate Ruby on Rails with modern JavaScript tools and libraries including [Babel](https://babeljs.io/), [React](https://facebook.github.io/react/) and [Redux](https://github.com/reactjs/redux).

### Why React

This integrates Facebook's React front-end framework with Rails. React v0.14.x and greater is supported, with server rendering using [react-rails gem](https://github.com/reactjs/react-rails).

### Why Redux

Redux is a predictable state container for JavaScript apps. [More info about Redux here](https://github.com/reactjs/redux).

It is integrated using Browserify and browserify-rails gem. It lets you mix and match //= require directives and require() calls for including plain javascript files as well as modules. However, it is important to remember that once you are into code that is being browserified you can no longer use sprockets-style require (so no //= require). In many cases, it makes sense to put all your sprockets-required code in a separate file or at the very least at the top of your main JavaScript file. Then use require() to pull in the CommonJS code. [More info about browserify-rails gem here](https://github.com/browserify-rails/browserify-rails).;


## Installation

Requirements:

* Node JS v6+ [How to install](https://nodejs.org/download/)

First, install [Yeoman](http://yeoman.io):

```bash
npm install -g yo
```

Then, install this generator locally running:

```bash
npm link
```


## Usage

To create a new project using this generator first create a folder for your project, then using terminal go to your new project path. And run this command:

```bash
yo vizzuality-projects
```

Follow the interative instructions to create it.


## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b feature/my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin feature/my-new-feature`
5. Submit a pull request :D


## LICENSE

[MIT](LICENSE)

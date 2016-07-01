# <%= name %>

<%= description %>

# How to install

Requirements:

* Ruby 2.3.1 [How to install](https://gorails.com/setup/osx/10.10-yosemite)
* Node Js 6.2+ [How to install](https://nodejs.org/en/download/)

We recommend managing your Ruby installation through
[rbenv](https://github.com/sstephenson/rbenv). It's just an easy way to
run multiple Ruby versions for different applications:

```bash
$ rbenv install 2.3.1
$ rbenv local 2.3.1
```

Install gem dependencies using [Bundler](http://bundler.io/)

```bash
$ bundle install
```

Install project dependencies:

```bash
bundle install && npm install
```

Set up database:

```bash
$ rake db:create
$ rake db:migrate
$ rake db:seed
```

# How to use

After install it, we can run server runing:

```bash
bundle exec rails server
```

## Rendering & mounting

`react-rails` includes a view helper (`react_component`) and an unobtrusive JavaScript driver (`react_ujs`) which work together to put React components on the page. [More info](https://github.com/reactjs/react-rails#rendering--mounting).

```erb
<<%= "%" %>= react_component('HelloMessage', name: 'John') %>
```

## Deploy

Info about how to deploy in Heroku [here](https://devcenter.heroku.com/articles/getting-started-with-rails5).

Use this command to use a existing project in Heroku:

```bash
heroku git:remote -a name-of-application
```

We need two official buildpacks:

```bash
heroku buildpacks:set heroku/ruby
heroku buildpacks:add --index 1 heroku/nodejs
``


## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b feature/my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin feature/my-new-feature`
5. Submit a pull request :D

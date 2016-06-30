# <%= name %>

<%= description %>

# How to install

Requirements:

* Ruby 2.3.1 [How to install](https://gorails.com/setup/osx/10.10-yosemite)
* Node Js 6.2+ [How to install](https://nodejs.org/en/download/)

Install global dependencies:

```bash
gem install bundler
```

Install project dependencies:

```bash
bundle install && npm install
```

# How to use

After install it, we can run server runing:

```bash
bundle exec rails server
```

# Rendering & mounting

`react-rails` includes a view helper (`react_component`) and an unobtrusive JavaScript driver (`react_ujs`) which work together to put React components on the page. [More info](https://github.com/reactjs/react-rails#rendering--mounting).

```erb
<<%= "%" %>= react_component('HelloMessage', name: 'John') %>
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b feature/my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin feature/my-new-feature`
5. Submit a pull request :D

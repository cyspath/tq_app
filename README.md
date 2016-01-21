### Heroku
http://tongqu.herokuapp.com/

#### production.rb (environment)
`config.assets.compile = true`

To troubleshoot heroku asset precompile issues locally type `RAILS_ENV=production bundle exec rake assets:precompile --trace`

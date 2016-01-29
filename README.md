### Heroku
http://tongqu.herokuapp.com/

#### production.rb (environment)
`config.assets.compile = true`

To troubleshoot heroku asset precompile issues locally type `RAILS_ENV=production bundle exec rake assets:precompile --trace`


#### #count vs #length vs #size
There's also the differences between `#count`, `#length`, and `#size` on ActiveRecord::Relation. `#count` will always perform a count query, `#length` will load up the records, and call `#length` on the resulting array, and `#size` will do the smart thing based on whether or not we've loaded. TLDR: use `#size`, unless you're calling it immediately before you need to load the real records, in which case use `#length`. Never use `#count`, since `#size` will skip the query if it can.

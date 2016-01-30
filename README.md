### Heroku
http://tongqu.herokuapp.com/

#### production.rb (environment)
`config.assets.compile = true`

To troubleshoot heroku asset precompile issues locally type `RAILS_ENV=production bundle exec rake assets:precompile --trace`


#### #count vs #length vs #size
There's also the differences between `#count`, `#length`, and `#size` on ActiveRecord::Relation. `#count` will always perform a count query, `#length` will load up the records, and call `#length` on the resulting array, and `#size` will do the smart thing based on whether or not we've loaded. TLDR: use `#size`, unless you're calling it immediately before you need to load the real records, in which case use `#length`. Never use `#count`, since `#size` will skip the query if it can.


#### cloudinary & figaro
'figaro', '~> 0.7'
run bundle install
run figaro install, this will create config/application.yml, which will allow us to easily set ENV variables
get a cloudinary API key, cloud name, and upload preset
in application.yml you will need the following:
# config/application.yml
CLOUD_NAME: "cloud name goes here"
CLOUD_API_KEY: "api key goes here"
CLOUD_API_SECRET: "api secret goes here"
UPLOAD_PRESET: "upload preset goes here"

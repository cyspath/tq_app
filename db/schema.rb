# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160130201851) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "event_members", force: :cascade do |t|
    t.integer  "user_id"
    t.integer  "event_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "events", force: :cascade do |t|
    t.string   "name",             null: false
    t.date     "date"
    t.string   "location_name"
    t.string   "location_address"
    t.text     "description"
    t.integer  "owner_id",         null: false
    t.integer  "group_id",         null: false
    t.datetime "created_at",       null: false
    t.datetime "updated_at",       null: false
    t.integer  "start_time"
    t.integer  "end_time"
    t.integer  "datetime_num"
  end

  add_index "events", ["group_id"], name: "index_events_on_group_id", using: :btree
  add_index "events", ["owner_id"], name: "index_events_on_owner_id", using: :btree

  create_table "group_members", force: :cascade do |t|
    t.integer  "user_id"
    t.integer  "group_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "group_members", ["group_id"], name: "index_group_members_on_group_id", using: :btree
  add_index "group_members", ["user_id"], name: "index_group_members_on_user_id", using: :btree

  create_table "groups", force: :cascade do |t|
    t.string   "name",        null: false
    t.text     "description", null: false
    t.string   "avatar"
    t.integer  "location_id", null: false
    t.integer  "owner_id",    null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "groups", ["location_id"], name: "index_groups_on_location_id", using: :btree
  add_index "groups", ["owner_id"], name: "index_groups_on_owner_id", using: :btree

  create_table "images", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",               default: "", null: false
    t.string   "email",                  default: "", null: false
    t.string   "phone",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet     "current_sign_in_ip"
    t.inet     "last_sign_in_ip"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["phone"], name: "index_users_on_phone", using: :btree
  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree

end

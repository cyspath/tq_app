json.(@user, :id, :username, :email, :created_at)
json.set! :join_date, @user.created_at.strftime("%b %d, %Y")

class Users::RegistrationsController < Devise::RegistrationsController
  # respond_to :json

  before_filter :configure_sign_up_params, only: [:create]
  before_filter :configure_account_update_params, only: [:update]

  # GET /resource/sign_up
  def new
    super
  end

  # POST /resource
  def create
    super
  end

  # GET /resource/edit
  def edit
    super
  end

  # PUT /resource
  def update
    super
  end

  # DELETE /resource
  def destroy
    super
  end

  # GET /resource/cancel
  # Forces the session data which is usually expired after sign
  # in to be expired now. This is useful if the user wants to
  # cancel oauth signing in/up in the middle of the process,
  # removing all OAuth session data.
  def cancel
    super
  end

  protected

  # If you have extra params to permit, append them to the sanitizer.
  def configure_sign_up_params
    modify_params
    devise_parameter_sanitizer.for(:sign_up).push(:username, :location_id, :location, :identicon)
  end

  def modify_params
    params[:user][:location_id] = params[:user][:location_id].to_i
    params[:user][:location] = Location.find_by_location_id(params[:user][:location_id])
    params[:user][:identicon] = Image.generate_identicon
  end
  #
  # If you have extra params to permit, append them to the sanitizer.
  # def configure_account_update_params
  #   devise_parameter_sanitizer.for(:account_update) << :attribute
  # end
  #
  # The path used after sign up.
  # def after_sign_up_path_for(resource)
  #   super(resource)
  # end
  #
  # The path used after sign up for inactive accounts.
  # def after_inactive_sign_up_path_for(resource)
  #   super(resource)
  # end
end

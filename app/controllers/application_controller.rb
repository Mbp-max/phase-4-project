class ApplicationController < ActionController::API
  include ActionController::Cookies


  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

  # before_action :authorize_user

  def current_user
    User.find_by(id: session[:current_user])
  end

  def authorize_user
    return render json: { error: "Not Authorized" }, status: :unauthorized unless current_user
  end

  private

  def render_not_found_response(invalid)
    render json: { errors: invalid }, status: :not_found
end

  def render_unprocessable_entity_response(exception)
    render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
  end

end

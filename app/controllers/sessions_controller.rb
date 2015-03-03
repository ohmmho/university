class SessionsController < ApplicationController
  def new
    @user = User.new
    render "register"
  end

  def create
    @user = User.new(user_params)
    if @user.save
      session[:current_user_id] = @user.id
      redirect_to "/"
    else
      render :register
    end

    rescue ActiveRecord::RecordNotUnique
      @user.errors.add(:email, "Este email ya existe")

      render :new
  end

  def login
    user = User.where(email: params[:email]).first

    # Session engaged
    if user && user.authenticate(params[:password])

      session[:current_user_id] = user.id
    else
      flash[:error] = "Email o contraseña incorrectas"
    end

    redirect_to "/"
  end

  def logout
    session[:current_user_id] = nil

    redirect_to "/"
  end

  private

  def user_params
    params.require(:user).permit(:email, :password, :password_confirmation)
  end
end

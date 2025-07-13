export interface LoginType {
  email: string;
  password: string;
}
export interface SignUpType {
  fullName: string;
  email: string;
  password: string;
  address: string;
  country: string;
  state: string;
  phone: string;
}

export interface ChangePasswordType {
  oldPassword: string;
  newPassword: string;
}
export interface ForgotPasswordType {
  email: string;
}

export interface ResetPasswordType {
  token: string;
  newPassword: string;
}
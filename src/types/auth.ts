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
  old_password: string;
  new_password: string;
  confirm_new_password: string;
}

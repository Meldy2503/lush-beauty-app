export const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

const urls = {
  loginUrl: `${baseUrl}/auth/login`,
  signUpUrl: `${baseUrl}/auth/signup`,
  changePasswordUrl: `${baseUrl}/auth/change-password`,
};
export default urls;

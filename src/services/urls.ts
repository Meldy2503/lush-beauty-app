export const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

const urls = {
  loginUrl: `${baseUrl}/auth/login`,
  signUpUrl: `${baseUrl}/auth/signup`,
  getUserProfileUrl: `${baseUrl}/users/profile`,
  getUserAddressesUrl: `${baseUrl}/addresses`,
  addNewAddressUrl: `${baseUrl}/addresses`,
  deleteAddressUrl: (addressId: string) => `${baseUrl}/addresses/${addressId}`,
  getServicesUrl: `${baseUrl}/services`,
};
export default urls;

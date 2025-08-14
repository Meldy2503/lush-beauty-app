export const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

const urls = {
  loginUrl: `${baseUrl}/auth/login`,
  signUpUrl: `${baseUrl}/auth/signup`,
  changePasswordUrl: `${baseUrl}/users/change-password`,
  forgotPasswordUrl: `${baseUrl}/auth/forgot-password`,
  resetPasswordUrl: `${baseUrl}/auth/reset-password`,
  getUserProfileUrl: `${baseUrl}/users/profile`,
  updateUserProfileUrl: `${baseUrl}/users/profile`,
  getUserAddressesUrl: `${baseUrl}/addresses`,
  addNewAddressUrl: `${baseUrl}/addresses`,
  updateAddressUrl: (addressId: string) => `${baseUrl}/addresses/${addressId}`,
  deleteAddressUrl: (addressId: string) => `${baseUrl}/addresses/${addressId}`,
  getServicesUrl: `${baseUrl}/services`,
  getBranchesUrl: `${baseUrl}/branches`,
  getSpecilalistsUrl: `${baseUrl}/specialists`,
  bookPersonalAppointment: `${baseUrl}/appointments/book-personal`,
  bookGroupAppointment: `${baseUrl}/appointments/book-group`,
  getAllProducts: `${baseUrl}/products`,
  getProductById: (productId: string) => `${baseUrl}/products/${productId}`,
  addToCart: `${baseUrl}/cart/items/add`,
  getCartItems: ({
    guestId,
    userId,
  }: {
    guestId?: string;
    userId?: string;
  }) => {
    if (guestId) return `${baseUrl}/cart/items?guestId=${guestId}`;
    if (userId) return `${baseUrl}/cart/items?userId=${userId}`;
    return `${baseUrl}/cart/items`; // fallback url
  },

  getProductCategories: `${baseUrl}/products/categories`,
  deleteCartItemUrl: (productId: string) =>
    `${baseUrl}/cart/items/${productId}/remove`,
  clearAllCartItemsUrl: `${baseUrl}/cart/items/clear`,
  checkoutCartItemsUrl: `${baseUrl}/cart/items/checkout`,
  mergeCartItemsUrl: `${baseUrl}/cart/items/merge`,
  updateItemQuantityUrl: (productId: string) =>
    `${baseUrl}/cart/items/${productId}/quantity`,
  getUserAppointmentUrl: `${baseUrl}/appointments`,
  getUserOrdersUrl: `${baseUrl}/orders`,
  getUserOrderById: (orderId: string) => `${baseUrl}/orders/${orderId}`,
  getUserAppointmentById: (appointmentId: string) =>
    `${baseUrl}/appointments/${appointmentId}`,
  makeOrderPaymentUrl: `${baseUrl}/make-payment/order`,
  makeAppointmentPaymentUrl: `${baseUrl}/make-payment/appointment`,
  cancelOrderUrl: (orderId: string) => `${baseUrl}/orders/${orderId}/cancel`,
  cancelAppointmentUrl: (appointmentId: string) =>
    `${baseUrl}/appointments/${appointmentId}/cancel`,
};
export default urls;

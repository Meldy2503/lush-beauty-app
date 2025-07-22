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
  checkoutCartItemsUrl: `${baseUrl}/cart/items/checkout`,
  mergeCartItemsUrl: `${baseUrl}/cart/items/merge`,
};
export default urls;

// {
//   "success": true,
//   "message": "Request successful",
//   "data": {
//       "message": "Specialists fetched successfully",
//       "data": [
//           {
//               "id": "5318149d-6777-4338-a27b-ef8c5b01d107",
//               "name": "Patricia Routledge",
//               "email": "patricia@getnada.com",
//               "phone": "+447075532553",
//               "age": 30,
//               "branchId": "16a8c215-1e45-437e-a053-c9d0923de8f4",
//               "address": "East Ham",
//               "city": "London",
//               "state": "London",
//               "country": "UK",
//               "description": "book me for any beauty service",
//               "imageUrl": null,
//               "rating": 0,
//               "totalRatings": 0,
//               "clientCount": 0,
//               "status": true,
//               "createdAt": "2025-07-18T15:58:26.299Z",
//               "updatedAt": "2025-07-18T15:58:26.299Z",
//               "createdBy": null,
//               "updatedBy": null,
//               "specialties": [
//                   {
//                       "id": "3b721c1c-2c1b-4323-863f-6a50710c59e8",
//                       "category": {
//                           "id": "854bffe7-225e-40d9-9efd-c51e573fe5ac",
//                           "name": "Cut & Styling",
//                           "type": "BASIC",
//                           "price": 50,
//                           "estimatedTime": 120,
//                           "service": {
//                               "id": "3df50fed-d05f-4d87-b367-b7d71504c676",
//                               "name": "Hair styling",
//                               "description": "Transform your look with our professional hair styling services.",
//                               "branchId": "16a8c215-1e45-437e-a053-c9d0923de8f4"
//                           }
//                       }
//                   }
//               ],
//               "totalCompletedAppointments": 0
//           },
//           {
//               "id": "25cc38f0-cc7b-4d12-b145-230451bf5511",
//               "name": "Catherine Smith",
//               "email": "catherine@getnada.com",
//               "phone": "+447075532663",
//               "age": 28,
//               "branchId": "16a8c215-1e45-437e-a053-c9d0923de8f4",
//               "address": "Croydon",
//               "city": "London",
//               "state": "London",
//               "country": "UK",
//               "description": "book me for any beauty service",
//               "imageUrl": null,
//               "rating": 0,
//               "totalRatings": 0,
//               "clientCount": 0,
//               "status": true,
//               "createdAt": "2025-07-18T15:56:37.014Z",
//               "updatedAt": "2025-07-18T15:56:37.014Z",
//               "createdBy": null,
//               "updatedBy": null,
//               "specialties": [
//                   {
//                       "id": "13d78192-4aa9-42ca-a0e0-06c97c2924d2",
//                       "category": {
//                           "id": "854bffe7-225e-40d9-9efd-c51e573fe5ac",
//                           "name": "Cut & Styling",
//                           "type": "BASIC",
//                           "price": 50,
//                           "estimatedTime": 120,
//                           "service": {
//                               "id": "3df50fed-d05f-4d87-b367-b7d71504c676",
//                               "name": "Hair styling",
//                               "description": "Transform your look with our professional hair styling services.",
//                               "branchId": "16a8c215-1e45-437e-a053-c9d0923de8f4"
//                           }
//                       }
//                   }
//               ],
//               "totalCompletedAppointments": 0
//           },
//           {
//               "id": "47a4a448-a141-4423-b86a-12eee13f9b18",
//               "name": "Mitchel Smith",
//               "email": "mitchel@getnada.com",
//               "phone": "+447075532651",
//               "age": 26,
//               "branchId": "16a8c215-1e45-437e-a053-c9d0923de8f4",
//               "address": "South London",
//               "city": "London",
//               "state": "London",
//               "country": "UK",
//               "description": "book me for any beauty service",
//               "imageUrl": null,
//               "rating": 0,
//               "totalRatings": 0,
//               "clientCount": 0,
//               "status": true,
//               "createdAt": "2025-07-18T15:54:48.399Z",
//               "updatedAt": "2025-07-18T15:54:48.399Z",
//               "createdBy": null,
//               "updatedBy": null,
//               "specialties": [
//                   {
//                       "id": "122dc507-598b-4d8d-a400-09cd4a031318",
//                       "category": {
//                           "id": "854bffe7-225e-40d9-9efd-c51e573fe5ac",
//                           "name": "Cut & Styling",
//                           "type": "BASIC",
//                           "price": 50,
//                           "estimatedTime": 120,
//                           "service": {
//                               "id": "3df50fed-d05f-4d87-b367-b7d71504c676",
//                               "name": "Hair styling",
//                               "description": "Transform your look with our professional hair styling services.",
//                               "branchId": "16a8c215-1e45-437e-a053-c9d0923de8f4"
//                           }
//                       }
//                   }
//               ],
//               "totalCompletedAppointments": 0
//           },
//           {
//               "id": "a261fe1f-1914-424e-a64c-cfa398c818b0",
//               "name": "Abby Smiden",
//               "email": "abbey@getnada.com",
//               "phone": "+447075533117",
//               "age": 35,
//               "branchId": "16a8c215-1e45-437e-a053-c9d0923de8f4",
//               "address": "East London",
//               "city": "London",
//               "state": "London",
//               "country": "UK",
//               "description": "book me for any beauty service",
//               "imageUrl": null,
//               "rating": 0,
//               "totalRatings": 0,
//               "clientCount": 0,
//               "status": true,
//               "createdAt": "2025-07-18T15:53:42.998Z",
//               "updatedAt": "2025-07-18T15:53:42.998Z",
//               "createdBy": null,
//               "updatedBy": null,
//               "specialties": [
//                   {
//                       "id": "72aeb910-01cc-4bfd-a687-428fba1ffd14",
//                       "category": {
//                           "id": "854bffe7-225e-40d9-9efd-c51e573fe5ac",
//                           "name": "Cut & Styling",
//                           "type": "BASIC",
//                           "price": 50,
//                           "estimatedTime": 120,
//                           "service": {
//                               "id": "3df50fed-d05f-4d87-b367-b7d71504c676",
//                               "name": "Hair styling",
//                               "description": "Transform your look with our professional hair styling services.",
//                               "branchId": "16a8c215-1e45-437e-a053-c9d0923de8f4"
//                           }
//                       }
//                   }
//               ],
//               "totalCompletedAppointments": 0
//           },
//           {
//               "id": "5b918aa1-8721-4720-a893-e4f48f06102e",
//               "name": "Angel Charlys",
//               "email": "charlys@getnada.com",
//               "phone": "+447075533987",
//               "age": 31,
//               "branchId": "16a8c215-1e45-437e-a053-c9d0923de8f4",
//               "address": "Redhill",
//               "city": "Redhill",
//               "state": "Surrey",
//               "country": "UK",
//               "description": "book me for any beauty service",
//               "imageUrl": null,
//               "rating": 0,
//               "totalRatings": 0,
//               "clientCount": 0,
//               "status": true,
//               "createdAt": "2025-07-18T15:52:44.630Z",
//               "updatedAt": "2025-07-18T15:52:44.630Z",
//               "createdBy": null,
//               "updatedBy": null,
//               "specialties": [
//                   {
//                       "id": "81db02dc-d1f6-4b3e-aa4e-d63a9aaa72f7",
//                       "category": {
//                           "id": "854bffe7-225e-40d9-9efd-c51e573fe5ac",
//                           "name": "Cut & Styling",
//                           "type": "BASIC",
//                           "price": 50,
//                           "estimatedTime": 120,
//                           "service": {
//                               "id": "3df50fed-d05f-4d87-b367-b7d71504c676",
//                               "name": "Hair styling",
//                               "description": "Transform your look with our professional hair styling services.",
//                               "branchId": "16a8c215-1e45-437e-a053-c9d0923de8f4"
//                           }
//                       }
//                   }
//               ],
//               "totalCompletedAppointments": 0
//           },
//           {
//               "id": "3d909717-571b-4a05-a151-deb1d518ca51",
//               "name": "Gloria Abraham",
//               "email": "gloria@getnada.com",
//               "phone": "+447075533921",
//               "age": 29,
//               "branchId": "16a8c215-1e45-437e-a053-c9d0923de8f4",
//               "address": "Redhill",
//               "city": "Redhill",
//               "state": "Surrey",
//               "country": "UK",
//               "description": "book me for any beauty service",
//               "imageUrl": null,
//               "rating": 0,
//               "totalRatings": 0,
//               "clientCount": 0,
//               "status": true,
//               "createdAt": "2025-07-18T15:51:55.135Z",
//               "updatedAt": "2025-07-18T15:51:55.135Z",
//               "createdBy": null,
//               "updatedBy": null,
//               "specialties": [
//                   {
//                       "id": "3adbfbd4-62f3-4846-b18d-d25e5265b056",
//                       "category": {
//                           "id": "854bffe7-225e-40d9-9efd-c51e573fe5ac",
//                           "name": "Cut & Styling",
//                           "type": "BASIC",
//                           "price": 50,
//                           "estimatedTime": 120,
//                           "service": {
//                               "id": "3df50fed-d05f-4d87-b367-b7d71504c676",
//                               "name": "Hair styling",
//                               "description": "Transform your look with our professional hair styling services.",
//                               "branchId": "16a8c215-1e45-437e-a053-c9d0923de8f4"
//                           }
//                       }
//                   }
//               ],
//               "totalCompletedAppointments": 0
//           },
//           {
//               "id": "d4e65642-ae77-46bb-85f5-70a7bd0b72a5",
//               "name": "Ruth Patricia",
//               "email": "ruth@getnada.com",
//               "phone": "+447075533421",
//               "age": 25,
//               "branchId": "16a8c215-1e45-437e-a053-c9d0923de8f4",
//               "address": "Redhill",
//               "city": "Redhill",
//               "state": "Surrey",
//               "country": "UK",
//               "description": "book me for any beauty service",
//               "imageUrl": null,
//               "rating": 0,
//               "totalRatings": 0,
//               "clientCount": 0,
//               "status": true,
//               "createdAt": "2025-07-18T15:50:41.580Z",
//               "updatedAt": "2025-07-18T15:50:41.580Z",
//               "createdBy": null,
//               "updatedBy": null,
//               "specialties": [
//                   {
//                       "id": "34c4b8be-c0d1-4281-9889-106ffc66e0ee",
//                       "category": {
//                           "id": "854bffe7-225e-40d9-9efd-c51e573fe5ac",
//                           "name": "Cut & Styling",
//                           "type": "BASIC",
//                           "price": 50,
//                           "estimatedTime": 120,
//                           "service": {
//                               "id": "3df50fed-d05f-4d87-b367-b7d71504c676",
//                               "name": "Hair styling",
//                               "description": "Transform your look with our professional hair styling services.",
//                               "branchId": "16a8c215-1e45-437e-a053-c9d0923de8f4"
//                           }
//                       }
//                   }
//               ],
//               "totalCompletedAppointments": 0
//           },
//           {
//               "id": "8772b04b-da5a-4a2f-b90c-cc742050e9f6",
//               "name": "Grace Smith",
//               "email": "grace@getnada.com",
//               "phone": "+447075532221",
//               "age": 27,
//               "branchId": "16a8c215-1e45-437e-a053-c9d0923de8f4",
//               "address": "South London",
//               "city": "London",
//               "state": "London",
//               "country": "UK",
//               "description": "book me for any beauty service",
//               "imageUrl": null,
//               "rating": 0,
//               "totalRatings": 0,
//               "clientCount": 0,
//               "status": true,
//               "createdAt": "2025-07-18T15:49:29.566Z",
//               "updatedAt": "2025-07-18T15:49:29.566Z",
//               "createdBy": null,
//               "updatedBy": null,
//               "specialties": [
//                   {
//                       "id": "f2fc3362-39a6-4f22-9975-1b85c5bdad79",
//                       "category": {
//                           "id": "854bffe7-225e-40d9-9efd-c51e573fe5ac",
//                           "name": "Cut & Styling",
//                           "type": "BASIC",
//                           "price": 50,
//                           "estimatedTime": 120,
//                           "service": {
//                               "id": "3df50fed-d05f-4d87-b367-b7d71504c676",
//                               "name": "Hair styling",
//                               "description": "Transform your look with our professional hair styling services.",
//                               "branchId": "16a8c215-1e45-437e-a053-c9d0923de8f4"
//                           }
//                       }
//                   }
//               ],
//               "totalCompletedAppointments": 0
//           },
//           {
//               "id": "5840517a-e478-4b76-875f-2154191370c3",
//               "name": "Deborah Mark",
//               "email": "deborah@getnada.com",
//               "phone": "+447075532441",
//               "age": 30,
//               "branchId": "16a8c215-1e45-437e-a053-c9d0923de8f4",
//               "address": "East London",
//               "city": "London",
//               "state": "London",
//               "country": "UK",
//               "description": "book me for any beauty service",
//               "imageUrl": "https://res.cloudinary.com/violacares/image/upload/v1752863610/specialists/kuz8mk2qmnbbxvlttac5.webp",
//               "rating": 0,
//               "totalRatings": 0,
//               "clientCount": 0,
//               "status": true,
//               "createdAt": "2025-07-18T14:31:04.540Z",
//               "updatedAt": "2025-07-18T18:33:31.826Z",
//               "createdBy": null,
//               "updatedBy": null,
//               "specialties": [
//                   {
//                       "id": "6b8941f4-4b13-478f-8b88-2d353603b0db",
//                       "category": {
//                           "id": "854bffe7-225e-40d9-9efd-c51e573fe5ac",
//                           "name": "Cut & Styling",
//                           "type": "BASIC",
//                           "price": 50,
//                           "estimatedTime": 120,
//                           "service": {
//                               "id": "3df50fed-d05f-4d87-b367-b7d71504c676",
//                               "name": "Hair styling",
//                               "description": "Transform your look with our professional hair styling services.",
//                               "branchId": "16a8c215-1e45-437e-a053-c9d0923de8f4"
//                           }
//                       }
//                   }
//               ],
//               "totalCompletedAppointments": 0
//           }
//       ],
//       "meta": {
//           "total": 9,
//           "page": 1,
//           "pageSize": 10,
//           "totalPages": 1
//       }
//   }
// }

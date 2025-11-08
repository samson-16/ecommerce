export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL;

export const ROUTES = {
  HOME: "/",
  FAVORITES: "/favorites",
  ADD_PRODUCT: "/add",
  EDIT_PRODUCT: (id: string | number) => `/edit/${id}`,
  PRODUCT_DETAILS: (id: string | number) => `/product/${id}`,
  LOGIN: "/login",
} as const;

export const PAGINATION = {
  PRODUCTS_PER_PAGE: 10,
  RELATED_PRODUCTS_COUNT: 3,
} as const;

export const API_ENDPOINTS = {
  PRODUCTS: "/products",
  PRODUCT_BY_ID: (id: string | number) => `/products/${id}`,
  SEARCH_PRODUCTS: (query: string) => `/products/search?q=${query}`,
  CATEGORIES: "/products/categories",
  PRODUCTS_BY_CATEGORY: (category: string) => `/products/category/${category}`,
  ADD_PRODUCT: "/products/add",
  UPDATE_PRODUCT: (id: string | number) => `/products/${id}`,
  DELETE_PRODUCT: (id: string | number) => `/products/${id}`,
} as const;

export const TOAST_MESSAGES = {
  FAVORITE_ADDED: "Added to favorites",
  FAVORITE_REMOVED: "Removed from favorites",
  PRODUCT_DELETED: (title: string) => `${title} deleted successfully`,
  PRODUCT_CREATED: (title: string) =>
    `Product "${title}" created successfully!`,
  DELETE_FAILED: "Failed to delete product",
  LOGIN_SUCCESS: (username: string) => `Welcome back, ${username}!`,
  LOGIN_FAILED: "Please enter username and password",
} as const;

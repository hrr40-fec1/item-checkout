import axios from 'axios';

const helper = {
  getProductId: () => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('productId') || 1;
  },

  getProductInfo: (productId) => axios.get(`/api/product/${productId}`),

  getLocationInfo: (storeId) => axios.get(`api/location/${storeId}`),

  getInventoryInfo: (productId, color, size, storeId) => axios.get(`/api/quantity/${productId}&${color}&${size}&${storeId}`),

  calcAverageRating: (array) => {
    const total = array.reduce((sum, item) => sum + item.rating, 0);
    return Math.round((total / array.length) * 100) / 100;
  },

  getShippingDate: () => {
    const shippingDate = new Date();
    shippingDate.setDate(shippingDate.getDate() + 2);

    const day = new Intl.DateTimeFormat('en-US', { weekday: 'short' }).format(shippingDate);
    const month = new Intl.DateTimeFormat('en-US', { month: 'short' }).format(shippingDate);
    const date = shippingDate.getDate();

    return `${day}, ${month} ${date}`;
  },
};

export default helper;

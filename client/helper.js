import axios from 'axios';

const helper = {
  getProductInfo: (productId) => axios.get(`/api/product/${productId}`),

  getLocationInfo: (storeId) => axios.get(`api/location/${storeId}`),

  getInventoryInfo: (productId, color, size, storeId) => axios.get(`/api/quantity/${productId}&${color}&${size}&${storeId}`),

  calcAverageRating: (array) => {
    const total = array.reduce((sum, item) => sum + item.rating, 0);
    return Math.round((total / array.length) * 100) / 100;
  },
};

export default helper;

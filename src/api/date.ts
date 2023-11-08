import axios from '/src/services/axios';

const api = {
  getDates: (query: object) => {
    return axios.get('/dates', query);
  },
};

export default api;

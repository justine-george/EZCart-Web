import axios from 'axios';

const API_BASE_URL = 'https://fakestoreapi.com/products';

class ProductService {
    getAllProducts() {
        return axios.get(API_BASE_URL);
    }

    getProductsByCategory(category) {
        return axios.get(`${API_BASE_URL}/category/${category}`);
    }

    getProductById(productId) {
        return axios.get(`${API_BASE_URL}/${productId}`);
    }
}

export default new ProductService();
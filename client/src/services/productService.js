import api from "../services/api";


function getAll() {
  return api.get('/api/products');
}


const productService = {
  getAll,
}
function getById(id) {
  return api.get('/api/products/'+id);
}

export default productService;
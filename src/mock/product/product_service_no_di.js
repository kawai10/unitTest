const productClient = require("./product_client");
class ProductService {
  constructor() {
    this.productClient = new productClient();
  }

  fetchAvailableItems() {
    return this.productClient
      .fetchItems()
      .then((items) => items.filter((item) => item.available));
  }
}

module.exports = ProductService;

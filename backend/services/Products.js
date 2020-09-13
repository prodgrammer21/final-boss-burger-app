const DBConnection = require("../db/Connection");

const useProductsService = () => {
  const createProduct = async () => {
    try {
      const query =
        "INSERT INTO products(name, price) VALUES ('Product 1', 100)";
      const results = await DBConnection(query);

      return results;
    } catch (err) {
      console.log("Error createProduct: ", err);
      return false;
    }
  };
  const retrieveProduct = async () => {
    try {
      const query = "SELECT * FROM products";
      const results = await DBConnection(query);

      return results;
    } catch (err) {
      console.log("Error retrieveProduct: ", err);
      return false;
    }
  };
  const updateProduct = async () => {
    return;
  };
  const deleteProduct = async () => {
    return;
  };

  return {
    create: createProduct,
    retrieve: retrieveProduct,
    update: updateProduct,
    delete: deleteProduct,
  };
};

module.exports = useProductsService;

const DBConnection = require("../db/Connection");

const useProductsService = () => {
  const createProduct = async (createObj) => {
    const { name, price } = createObj;

    try {
      const query = `INSERT INTO products VALUES (null, '${name}', ${price})`;
      await DBConnection(query);

      return true;
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
      return [];
    }
  };
  const updateProduct = async (updateObj) => {
    const { id, name, price } = updateObj;

    try {
      const query = `UPDATE products SET name='${name}', price=${price} WHERE id = ${id}`;
      await DBConnection(query);

      return true;
    } catch (err) {
      console.log("Error updateProduct: ", err);
      return false;
    }
  };
  const deleteProduct = async (id) => {
    try {
      const query = `DELETE FROM products WHERE id = ${id}`;
      await DBConnection(query);

      return true;
    } catch (err) {
      console.log("Error updateProduct: ", err);
      return false;
    }
  };

  return {
    create: createProduct,
    retrieve: retrieveProduct,
    update: updateProduct,
    delete: deleteProduct,
  };
};

module.exports = useProductsService;

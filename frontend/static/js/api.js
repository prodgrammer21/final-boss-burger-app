window.addEventListener("DOMContentLoaded", async () => {
  const createProduct = document.querySelector("#createProduct");
  const updateProduct = document.querySelector("#updateProduct");
  const deleteProduct = document.querySelector("#deleteProduct");

  const { data: productsList } = await axios({
    method: "GET",
    url: "/products",
  });

  console.log("productsList: ", productsList);

  createProduct.addEventListener("click", async () => {
    const cName = document.querySelector("#cName");
    const cPrice = document.querySelector("#cPrice");

    const { data: createResults } = await axios({
      method: "POST",
      url: "/products",
      data: {
        name: cName.value,
        price: cPrice.value,
      },
    });

    if (createResults.data) {
      cName.value = "";
      cPrice.value = "";
      window.alert(createResults.message);
    }
  });

  updateProduct.addEventListener("click", async () => {
    const uId = document.querySelector("#uId");
    const uName = document.querySelector("#uName");
    const uPrice = document.querySelector("#uPrice");

    const { data: updateResults } = await axios({
      method: "PUT",
      url: "/products",
      data: {
        id: uId.value,
        name: uName.value,
        price: uPrice.value,
      },
    });

    if (updateResults.data) {
      uId.value = "";
      uName.value = "";
      uPrice.value = "";
      window.alert(updateResults.message);
    }
  });

  deleteProduct.addEventListener("click", async () => {
    const dId = document.querySelector("#dId");

    const { data: deleteResults } = await axios({
      method: "DELETE",
      url: "/products",
      data: {
        id: dId.value,
      },
    });

    if (deleteResults.data) {
      dId.value = "";
      window.alert(deleteResults.message);
    }
  });
});

const addToCart = (id) => {
  let shoppingCart = localStorage.getItem("products");

  if (shoppingCart === null) {
    shoppingCart = id;
  } else {
    shoppingCart = shoppingCart + "," + id;
  }
  localStorage.setItem("products", shoppingCart);
};

export default addToCart;

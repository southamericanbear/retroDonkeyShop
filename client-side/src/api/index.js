import axios from "axios";

let url = "https://retro-games-shop.herokuapp.com/products";

export const fetchData = async () => {
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getBrands = async () => {
  try {
    const { data } = await axios.get(
      "https://retro-games-shop.herokuapp.com/brands"
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getProductById = async (id) => {
  try {
    const { data } = await axios.get(`${url}/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

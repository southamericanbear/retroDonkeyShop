import DonkeyRoutes from "./routes/DonkeyRoutes";
import "./styles/main.css";
import { AuthContext } from "./auth/AuthContext";
import { useEffect, useState } from "react";
import { fetchData, getBrands } from "./api/index";

function DonkeyShop() {
  const [products, setProducts] = useState([]);
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      setProducts(await fetchData());
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    const fetchBrands = async () => {
      setBrands(await getBrands());
    };
    fetchBrands();
  }, []);

  return (
    <div className="donkey">
      <AuthContext.Provider value={{ products, brands }}>
        <DonkeyRoutes />
      </AuthContext.Provider>
    </div>
  );
}

export default DonkeyShop;

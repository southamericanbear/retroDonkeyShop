import React, { useContext, useState } from "react";
import { AuthContext } from "../auth/AuthContext";
import { MenuCheckbox } from "../components/ui/MenuCheckbox";
import { ProductCard } from "../components/ui/ProductCard";
import "../styles/products.css";

export const Products = () => {
  const { products, brands } = useContext(AuthContext);
  const [checked, setChecked] = useState([]);

  const handleToggle = (value) => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  let filteredArray = [];

  checked.forEach((element) => {
    element.forEach((e) => {
      filteredArray.push(e);
      return e;
    });
  });

  return (
    <main className="products-container">
      <aside>
        <menu>
          {brands.length > 0 ? (
            <MenuCheckbox handleToggle={handleToggle} />
          ) : (
            "Loading menu..."
          )}
        </menu>
      </aside>
      <section className="products-elements">
        {filteredArray.length > 0
          ? filteredArray.map((product, id) => (
              <ProductCard key={id} {...product} />
            ))
          : products.map((product, id) => (
              <ProductCard key={id} {...product} />
            ))}
      </section>
    </main>
  );
};

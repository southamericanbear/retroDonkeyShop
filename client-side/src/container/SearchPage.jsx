import React, { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../auth/AuthContext";
import { ProductCard } from "../components/ui/ProductCard";

export const SearchPage = () => {
  const { products } = useContext(AuthContext);
  const [result, setResult] = useState("");

  return (
    <div>
      <input type="text" onChange={(e) => setResult(e.target.value)} />
      {products
        .filter((item) => {
          if (result === "") {
            return item;
          } else if (item.Title.toLowerCase().includes(result.toLowerCase())) {
            return item;
          } else if (
            item.Condition.toLowerCase().includes(result.toLowerCase())
          ) {
            return item;
          } else if (
            item.brands[0].Brand.toLowerCase().includes(
              result.toLocaleLowerCase()
            )
          ) {
            return item;
          }
        })
        .map((item, i) => (
          <ProductCard key={i} {...item} />
        ))}
    </div>
  );
};

import React from "react";
import ProductItem from "./ProductItem";

export default function ProductList({ productarrey }) {
  return (
    <div className="productList">
      {productarrey.map((item) => {
        return <ProductItem key={item.id} result={item} />;
      })}
    </div>
  );
}

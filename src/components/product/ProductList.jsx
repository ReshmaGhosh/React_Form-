import React from "react";
import ProductItem from "./ProductItem";

export default function ProductList({ result }) {
  return (
    <div className="productList">
      {result.map((item) => {
        return <ProductItem key={item.id} item={item} />;
      })}
    </div>
  );
}

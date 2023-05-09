import React from "react";

export default function ProductItem({ item }) {
  console.log(item, "item");
  return (
    <div className="productItem">
      <div>{item.title}</div>
      <div>{item.price}</div>
      <img src={item.image} alt={item.title} width="70px" />
    </div>
  );
}

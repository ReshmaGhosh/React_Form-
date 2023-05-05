import React from "react";

export default function ProductItem({ result }) {
  console.log(result, "result");
  return (
    <div className="productItem">
      <div>{result.title}</div>
      <div>{result.price}</div>
      <img src={result.image} alt={result.title} width="70px" />
    </div>
  );
}

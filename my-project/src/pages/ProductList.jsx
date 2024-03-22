import React from "react";
import { Link } from "react-router-dom";
const ProductList = () => {
  return (
    <>
      <div>hello</div>
      <Link to="/productList/mivka">Mivka</Link>
      <Link to="/productList/toaletna">Toaletna</Link>
    </>
  );
};

export default ProductList;

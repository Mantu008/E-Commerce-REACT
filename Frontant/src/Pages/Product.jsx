import { useParams } from "react-router-dom";
import BreadCrum from "../Component/BreadCrum/BreadCrum";
import "./style/Product.css";
import { useSelector } from "react-redux";
import ProductDisplay from "../Component/ProductDisplay/ProductDisplay";

const Product = () => {
  const { products } = useSelector((store) => store.product);
  const { ProductId } = useParams();

  const product = products.find((data) => data.id === Number(ProductId));

  return (
    <div>
      <BreadCrum item={product} />
      <ProductDisplay item={product} />
    </div>
  );
};

export default Product;

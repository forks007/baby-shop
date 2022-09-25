import "./BestProducts.css";
import { productData } from "../Data/productData";

const BestProducts = () => {
  return (
    <>
      <h1>our best products</h1>
      <div className="cards">
        {productData.map((product) => (
          <>
            <div className="card">
              <div className="image">
                <img src={product.image} alt="BigCo Inc. logo" />
              </div>

              <div className="icons">
                <i class="fas fa-duotone fa-cart-shopping"></i>
                <i class="fa-solid fa-heart-circle-plus"></i>
                <i class="fa-solid fa-magnifying-glass-plus"></i>
              </div>

              <div className="description">
                <h2>{product.name}</h2>
                <span className="price">{product.price}$</span>
                <span className="previous">{product.previousPrice}$</span>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};
export default BestProducts;

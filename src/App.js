import "./App.css";
import { products } from "./ProductList";
import Product from "./Product";

function App() {
  return (
    <div className="app">
      <div className="app-header">
        <h2 className="logo">WOW WEARS</h2>
        <h3>Admin Panel</h3>
      </div>
      <div className="app-products">
        {products.map((product) => (
          <Product
            title={product.title}
            img={product.img}
            price={product.price}
            desc={product.desc}
            offer={product.offer}
            orderInfo={product.orderInfo}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

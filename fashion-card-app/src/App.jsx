
import { useState } from "react";
import Card from "./components/Card.jsx";
import "./App.css";
import women from "./assets/women.jpg";
import shoes from "./assets/shoes.jpg";
import men from "./assets/men.jpg";
import handbag from "./assets/handbag.jpg";

function App() {
  const [cartCount, setCartCount] = useState(0);

  const products = [
    {
      id: 1,
      name: "Elegant Dress",
      category: "Women's Fashion",
      price: "₹1,499",
         image: women
    },
    {
      id: 2,
      name: "Classic T-Shirt",
      category: "Men's Fashion",
      price: "₹799",
          image: men
    },
    {
      id: 3,
      name: "Stylish Sneakers",
      category: "Footwear",
      price: "₹2,199",
       image: shoes
    },
    {
      id: 4,
      name: "Luxury Handbag",
      category: "Accessories",
      price: "₹1,899",
          image: handbag
    }
  ];

  function addToCart() {
    setCartCount(cartCount + 1);
  }

  return (
    <div className="app">

      <header className="header">
        <h1>StyleHub</h1>

        <nav>
          <a href="#home">Home</a>
          <a href="#collection">Collection</a>
          <a href="#footer">Contact</a>
        </nav>

        <div className="cart">
          🛍️ Cart ({cartCount})
        </div>
      </header>

      <section id="home" className="hero">
        <p className="subtitle">WELCOME TO STYLEHUB</p>
        <h2>Discover Your Style</h2>
        <p>Explore fashion that matches your personality.</p>
      </section>

      <section id="collection">
        <h2 className="collection-title">
          Our Fashion Collection
        </h2>

        <div className="product-container">
          {products.map((product) => (
            <Card
              key={product.id}
              image={product.image}
              name={product.name}
              category={product.category}
              price={product.price}
              onAdd={addToCart}
            />
          ))}
        </div>
      </section>

      <footer id="footer">
        <h3>StyleHub</h3>
        <p>Style is a way to express yourself.</p>
        <p>© 2026 StyleHub. All Rights Reserved.</p>
      </footer>

    </div>
  );
}

export default App;

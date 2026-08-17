import { Link } from "react-router-dom";

const products = [
  {
    name: "OnePlus",
    slug: "oneplus",
    brand: "OnePlus",
    price: "₹39,999",
    availability: "In Stock",
    category: "Smartphone",
    description:
      "A powerful smartphone with a fast processor and excellent display.",
  },
  {
    name: "Samsung",
    slug: "samsung",
    brand: "Samsung",
    price: "₹49,999",
    availability: "In Stock",
    category: "Smartphone",
    description:
      "A premium Samsung smartphone with an excellent camera and AMOLED display.",
  },
  {
    name: "iPhone",
    slug: "iphone",
    brand: "Apple",
    price: "₹69,999",
    availability: "In Stock",
    category: "Smartphone",
    description:
      "A premium Apple smartphone offering excellent performance and camera quality.",
  },
  {
    name: "Motorola",
    slug: "motorola",
    brand: "Motorola",
    price: "₹29,999",
    availability: "In Stock",
    category: "Smartphone",
    description:
      "A stylish Motorola smartphone with clean software and reliable performance.",
  },
  {
    name: "Redmi",
    slug: "redmi",
    brand: "Xiaomi",
    price: "₹19,999",
    availability: "In Stock",
    category: "Smartphone",
    description:
      "An affordable smartphone offering good performance and battery life.",
  },
];

function Products() {
  return (
    <div className="page">
      <h1>Products</h1>

      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.slug}>
            <h2>{product.name}</h2>

            <p>
              <strong>Brand:</strong> {product.brand}
            </p>

            <p>
              <strong>Price:</strong> {product.price}
            </p>

            <p>
              <strong>Category:</strong> {product.category}
            </p>

            <Link
              className="details-button"
              to={`/products/${product.slug}`}
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;

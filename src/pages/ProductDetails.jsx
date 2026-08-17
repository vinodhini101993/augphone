import { Link, useParams } from "react-router-dom";

const products = {
  oneplus: {
    name: "OnePlus",
    brand: "OnePlus",
    price: "₹39,999",
    availability: "In Stock",
    category: "Smartphone",
    description:
      "A powerful OnePlus smartphone with a fast processor, smooth display, and long-lasting battery.",
  },

  samsung: {
    name: "Samsung",
    brand: "Samsung",
    price: "₹49,999",
    availability: "In Stock",
    category: "Smartphone",
    description:
      "A premium Samsung smartphone featuring an AMOLED display, powerful processor, and excellent camera.",
  },

  iphone: {
    name: "iPhone",
    brand: "Apple",
    price: "₹69,999",
    availability: "In Stock",
    category: "Smartphone",
    description:
      "A premium Apple smartphone with powerful performance, excellent cameras, and a high-quality display.",
  },

  motorola: {
    name: "Motorola",
    brand: "Motorola",
    price: "₹29,999",
    availability: "In Stock",
    category: "Smartphone",
    description:
      "A stylish Motorola smartphone offering clean software, reliable performance, and great battery life.",
  },

  redmi: {
    name: "Redmi",
    brand: "Xiaomi",
    price: "₹19,999",
    availability: "In Stock",
    category: "Smartphone",
    description:
      "An affordable Redmi smartphone with good performance, a large display, and long battery life.",
  },
};

function ProductDetails() {
  const { productName } = useParams();

  const product = products[productName];

  if (!product) {
    return (
      <div className="page">
        <h1>Product Not Found</h1>
        <p>The requested product does not exist.</p>
        <Link to="/products">Back to Products</Link>
      </div>
    );
  }

  return (
    <div className="page">
      <h1>{product.name} Details</h1>

      <div className="details-card">
        <h2>{product.name}</h2>

        <p>
          <strong>Product Name:</strong> {product.name}
        </p>

        <p>
          <strong>Brand:</strong> {product.brand}
        </p>

        <p>
          <strong>Price:</strong> {product.price}
        </p>

        <p>
          <strong>Availability:</strong> {product.availability}
        </p>

        <p>
          <strong>Category:</strong> {product.category}
        </p>

        <p>
          <strong>Description:</strong> {product.description}
        </p>

        <Link className="details-button" to="/products">
          Back to Products
        </Link>
      </div>
    </div>
  );
}

export default ProductDetails;
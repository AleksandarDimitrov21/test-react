import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

const AddProducts = () => {
  const [product, setProduct] = useState({
    name: "",
    brand: "",
    model: "",
    category: "",
    quantity: 0,
    description: "",
    technicalDocumentation: "",
    minPrice: 0,
    originalPrice: 0,
    discount: 0,
  });
  const addProduct = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/products",
        product,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 201) {
        console.log("Product added successfully!");
        // Reset the form
        setProduct({
          name: "",
          brand: "",
          model: "",
          category: "",
          quantity: 0,
          description: "",
          technicalDocumentation: "",
          minPrice: 0,
          originalPrice: 0,
          discount: 0,
        });
      }
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  return (
    <div className="bg-gradient-to-r from-indigo-300 to-violet-200">
      <Link to="/" className="absolute top-0 right-0 m-4">
        <button className="text-md text-black bg-white hover:bg-violet-300 border-none font-bold rounded-full p-3">
          Home
        </button>
      </Link>
      <div className="flex items-center justify-center h-screen">
        <Form onSubmit={addProduct}>
          <div className="mb-3 flex flex-col">
            <Form.Label className="font-semibold text-white mb-1">
              Name
            </Form.Label>
            <Form.Control
              className="bg-white"
              type="text"
              name="name"
              value={product.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3 flex flex-col">
            <Form.Label className="font-semibold text-white mb-1">
              Brand
            </Form.Label>
            <Form.Control
              className="bg-white"
              type="text"
              name="brand"
              value={product.brand}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3 flex flex-col">
            <Form.Label className="font-semibold text-white mb-1">
              Model
            </Form.Label>
            <Form.Control
              className="bg-white"
              type="text"
              name="model"
              value={product.model}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3 flex flex-col">
            <Form.Label className="font-semibold text-white mb-1">
              Category
            </Form.Label>
            <Form.Control
              className="bg-white"
              type="text"
              name="category"
              value={product.category}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3 flex flex-col">
            <Form.Label className="font-semibold text-white mb-1">
              Quantity
            </Form.Label>
            <Form.Control
              className="bg-white"
              type="number"
              name="quantity"
              value={product.quantity}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3 flex flex-col">
            <Form.Label className="font-semibold text-white mb-1">
              Description
            </Form.Label>
            <Form.Control
              className="bg-white"
              as="textarea"
              name="description"
              value={product.description}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3 flex flex-col">
            <Form.Label className="font-semibold text-white mb-1">
              Technical Documentation
            </Form.Label>
            <Form.Control
              className="bg-white"
              as="textarea"
              name="technicalDocumentation"
              value={product.technicalDocumentation}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3 flex flex-col">
            <Form.Label className="font-semibold text-white mb-1">
              Min Price
            </Form.Label>
            <Form.Control
              className="bg-white"
              type="number"
              step="0.01"
              name="minPrice"
              value={product.minPrice}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3 flex flex-col">
            <Form.Label className="font-semibold text-white mb-1">
              Original Price
            </Form.Label>
            <Form.Control
              className="bg-white"
              type="number"
              step="0.01"
              name="originalPrice"
              value={product.originalPrice}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3 flex flex-col">
            <Form.Label className="font-semibold text-white mb-1">
              Discount
            </Form.Label>
            <Form.Control
              className="bg-white"
              type="number"
              name="discount"
              value={product.discount}
              onChange={handleChange}
              required
            />
          </div>

          <Button
            className="bg-violet-400 border-none rounded-3xl py-3 w-96 text-xl my-5 font-semibold text-white hover:bg-violet-500"
            variant="primary"
            type="submit"
          >
            Add Product
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default AddProducts;

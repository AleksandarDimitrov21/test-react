// products.js
const fetchProducts = async () => {
  try {
    const response = await fetch("http://localhost:8080/products");
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

const createMockProducts = async () => {
  const productsData = await fetchProducts();

  // Create mock products from API data
  const mockProducts = productsData.map((product) => ({
    id: product.id,
    photo: product.photo,
    name: product.name,
    brand: product.brand,
    model: product.model,
    category: product.category,
    quantity: 1,
    description: product.description,
    minPrice: product.minPrice,
    originalPrice: product.originalPrice,
    discount: product.discount,
    currentPrice: product.currentPrice,
    deleted: product.deleted,
  }));

  return mockProducts;
};

export default createMockProducts;

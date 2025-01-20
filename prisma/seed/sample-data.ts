import { hashSync } from "bcrypt-ts-edge";

const sampleData = {
  users: [
    {
      name: "Sunil",
      email: "sunil@gmail.com",
      password: hashSync("123456", 10),
      role: "admin",
    },
    {
      name: "John",
      email: "john@gmail.com",
      password: hashSync("123456", 10),
      role: "user",
    },
  ],
  products: [
    {
      name: "Poco X6 Pro 5G",
      slug: "poco-x6-pro-5g",
      category: "Electronics",
      images: [
        "https://images.unsplash.com/photo-1615215271468-0440d2607f32?q=80&w=2770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1683507557800-c2b05bd1d20d?q=80&w=2831&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
      brand: "TechBrand",
      description: "Latest model with high-end specs.",
      stock: 100,
      price: 799.99,
      rating: 4.5,
      numReviews: 120,
      isFeatured: true,
      banner: "smartphone-banner.jpg",
    },
    {
      name: "Macbook Air M1",
      slug: "macbook-air-m1",
      category: "Electronics",
      images: [
        "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
      brand: "LaptopBrand",
      description: "Powerful laptop for work and gaming.",
      stock: 50,
      price: 1299.99,
      rating: 4.8,
      numReviews: 200,
      isFeatured: false,
      banner: "laptop-banner.jpg",
    },
    {
      name: "Pro Beats Headphones",
      slug: "pro-beats-headphones",
      category: "Accessories",
      images: [
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dg",
        "https://plus.unsplash.com/premium_photo-1679513691641-9aedddc94f96?q=80&w=2913&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
      brand: "SoundBrand",
      description: "Noise-cancelling over-ear headphones.",
      stock: 150,
      price: 299.99,
      rating: 4.2,
      numReviews: 80,
      isFeatured: false,
      banner: "headphones-banner.jpg",
    },
  ],
};

export default sampleData;

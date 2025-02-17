import React, { useState, useRef } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

interface Product {
  name: string;
  price: string;
  description: string;
  imagePath: string;
  category: string;
}

const Products: React.FC = () => {
const [activeCategory, setActiveCategory] = useState("miles-creeps");
  const [currentPage, setCurrentPage] = useState(1);
  const productsRef = useRef<HTMLElement>(null);

  const productsPerPage = 3;

  const products: Product[] = [
    // Miles Creeps
    {
      name: "Classic Red Velvet",
      price: "$42",
      description: "Rich and velvety smooth cake with cream cheese frosting",
      imagePath: "/src/assets/image/products/miles-creeps-red-velvet.jpg",
      category: "miles-creeps"
    },
    {
      name: "Chocolate Dream",
      price: "$45",
      description: "Decadent chocolate layers with ganache filling",
      imagePath: "/src/assets/image/products/miles-creeps-chocolate.jpg",
      category: "miles-creeps"
    },
    {
      name: "Strawberry Delight",
      price: "$38",
      description: "Light and fluffy cake with fresh strawberry filling",
      imagePath: "/src/assets/image/products/miles-creeps-strawberry.jpg",
      category: "miles-creeps"
    },
    {
      name: "Matcha Green Tea",
      price: "$40",
      description: "Japanese-inspired matcha cake with white chocolate",
      imagePath: "/src/assets/image/products/miles-creeps-matcha.jpg",
      category: "miles-creeps"
    },
    {
      name: "Tiramisu Crepe",
      price: "$43",
      description: "Coffee-flavored crepe cake with mascarpone cream",
      imagePath: "/src/assets/image/products/miles-creeps-tiramisu.jpg",
      category: "miles-creeps"
    },
    // Cheesekuit
    {
      name: "Cheese Cheesekuit",
      price: "$35",
      description: "Classic baked cheesecake with graham cracker crust",
      imagePath: "/src/assets/image/products/cheesekuit-cheese.jpg",
      category: "cheesekuit"
    },
    {
      name: "Chocolate Cheesekuit",
      price: "$38",
      description: "Creamy cheesecake loaded with Oreo cookies",
      imagePath: "/src/assets/image/products/cheesekuit-chocolate.jpg",
      category: "cheesekuit"
    },
    {
      name: "Strawberry Cheesekuit",
      price: "$40",
      description: "Rich cheesecake topped with fresh blueberry compote",
      imagePath: "/src/assets/image/products/cheesekuit-strawberry.jpg",
      category: "cheesekuit"
    },

    // Milk Bun
    {
      name: "Milk Bun Milkshake",
      price: "$35",
      description: "Classic milkshake with graham cracker crust",
      imagePath: "/src/assets/image/products/milk-bun-susu.jpg",
      category: "milk-bun"
    },
    {
      name: "Milk Bun Chocolate",
      price: "$35",
      description: "Classic milkshake with graham cracker crust",
      imagePath: "/src/assets/image/products/milk-bun-chocolate.jpg",
      category: "milk-bun"
    },
    {
      name: "Milk Bun Matcha",
      price: "$35",
      description: "Classic milkshake with graham cracker crust",
      imagePath: "/src/assets/image/products/milk-bun-matcha.jpg",
      category: "milk-bun"
    },

    // Birthday Cake
    {
      name: "Birthday Cake Custome 1",
      price: "$35",
      description: "Classic milkshake with graham cracker crust",
      imagePath: "/src/assets/image/products/birthday-cake-1.png",
      category: "birthday-cake"
    },
    {
      name: "Birthday Cake Custome 2",
      price: "$35",
      description: "Classic milkshake with graham cracker crust",
      imagePath: "/src/assets/image/products/birthday-cake-2.png",
      category: "birthday-cake"
    },
    {
      name: "Birthday Cake Custome 3",
      price: "$35",
      description: "Classic milkshake with graham cracker crust",
      imagePath: "/src/assets/image/products/birthday-cake-3.png",
      category: "birthday-cake"
    },
    {
      name: "Birthday Cake Custome 4",
      price: "$35",
      description: "Classic milkshake with graham cracker crust",
      imagePath: "/src/assets/image/products/birthday-cake-4.png",
      category: "birthday-cake"
    },
    {
      name: "Birthday Cake Custome 5",
      price: "$35",
      description: "Classic milkshake with graham cracker crust",
      imagePath: "/src/assets/image/products/birthday-cake-5.png",
      category: "birthday-cake"
    },
    {
      name: "Birthday Cake Custome 6",
      price: "$35",
      description: "Classic milkshake with graham cracker crust",
      imagePath: "/src/assets/image/products/birthday-cake-6.png",
      category: "birthday-cake"
    },
    {
      name: "Birthday Cake Custome 7",
      price: "$35",
      description: "Classic milkshake with graham cracker crust",
      imagePath: "/src/assets/image/products/birthday-cake-7.png",
      category: "birthday-cake"
    },
    {
      name: "Birthday Cake Custome 8",
      price: "$35",
      description: "Classic milkshake with graham cracker crust",
      imagePath: "/src/assets/image/products/birthday-cake-8.png",  
      category: "birthday-cake"
    }
  ];

  const categories = [
    { id: "miles-creeps", name: "Miles Creeps" },
    { id: "cheesekuit", name: "Cheesekuit" },
    { id: "milk-bun", name: "Milk Bun" },
    { id: "mochi", name: "Mochi" },
    { id: "pudding", name: "Pudding" },
    { id: "birthday-cake", name: "Birthday Cake" }
  ];

  const filteredProducts = products.filter(
    product => product.category === activeCategory
  );

  // Pagination calculations
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  // Generate page numbers
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    productsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

    // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Card animation variants
  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 50
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  // Image hover animation variants
  const imageVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3
      }
    }
  };
  

  return (
    <section id="products" ref={productsRef} className="py-16">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-2 mb-8"
        >
          <Sparkles className="text-pink-600" />
          <h2 className="text-3xl font-bold text-center">Our Creations</h2>
          <Sparkles className="text-pink-600" />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Badge
                variant="outline"
                className={`cursor-pointer text-sm px-4 py-2 transition-all ${
                  activeCategory === category.id
                    ? "bg-pink-600 text-white hover:bg-pink-700"
                    : "border-pink-600 text-pink-600 hover:bg-pink-50"
                }`}
                onClick={() => {
                  setActiveCategory(category.id);
                  setCurrentPage(1);
                }}
              >
                {category.name}
              </Badge>
            </motion.div>
          ))}
        </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid md:grid-cols-3 gap-8 mb-8"
          >
          {currentProducts.map((product) => (
            <motion.div
              key={product.name}
              variants={cardVariants}
            >
              <Card className="group overflow-hidden transition-all duration-300 hover:shadow-xl">
                <div className="relative h-96 overflow-hidden flex items-center justify-center px-8">
                  <motion.img
                    src={product.imagePath}
                    alt={product.name}
                    variants={imageVariants}
                    whileHover="hover"
                    className={`${
                      product.imagePath.endsWith('.png')
                        ? 'h-[90%] w-auto object-contain'
                        : 'w-full h-full object-cover'
                    }`}
                  />
                </div>

                <CardContent className="p-6">
                  <motion.h3 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl font-semibold mb-4"
                  >
                    {product.name}
                  </motion.h3>
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-gray-600 leading-relaxed mb-4"
                  >
                    {product.description}
                  </motion.p>
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-wrap gap-2"
                  >
                    <Badge variant="secondary" className="bg-pink-100 text-pink-600">
                      Premium Quality
                    </Badge>
                    <Badge variant="secondary" className="bg-pink-100 text-pink-600">
                      Made Fresh Daily
                    </Badge>
                    <Badge variant="secondary" className="bg-pink-100 text-pink-600">
                      Special Recipe
                    </Badge>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {totalPages > 1 && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center gap-2"
          >
            {pageNumbers.map((number) => (
              <Badge
                key={number}
                variant="outline"
                className={`cursor-pointer px-4 py-2 transition-all ${
                  currentPage === number
                    ? "bg-pink-600 text-white hover:bg-pink-700"
                    : "border-pink-600 text-pink-600 hover:bg-pink-50"
                }`}
                onClick={() => handlePageChange(number)}
              >
                {number}
              </Badge>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Products;
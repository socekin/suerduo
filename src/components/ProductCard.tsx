import React from 'react';

interface ProductCardProps {
  name: string;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-center bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">{name}</h3>
      </div>
    </div>
  );
};

export default ProductCard;

import { ShoppingCart, Heart, Star } from 'lucide-react';
const PetShopping = () => {
      const products = [
    {
      id: 1,
      name: "Premium Dog Food",
      category: "Food & Treats",
      price: 49.99,
      rating: 4.8,
      reviews: 234,
      image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=400&h=300&fit=crop",
      stock: "In Stock",
      brand: "PawNutrition",
      weight: "15 lbs"
    },
    {
      id: 2,
      name: "Interactive Cat Toy Set",
      category: "Toys",
      price: 24.99,
      rating: 4.6,
      reviews: 189,
      image: "https://images.unsplash.com/photo-1545249390-6bdfa286032f?w=400&h=300&fit=crop",
      stock: "In Stock",
      brand: "FelinePlay",
      pieces: "5 pieces"
    },
    {
      id: 3,
      name: "Orthopedic Pet Bed",
      category: "Bedding",
      price: 79.99,
      rating: 4.9,
      reviews: 412,
      image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=400&h=300&fit=crop",
      stock: "In Stock",
      brand: "ComfyPaws",
      size: "Large"
    },
    {
      id: 4,
      name: "Automatic Pet Feeder",
      category: "Accessories",
      price: 89.99,
      rating: 4.7,
      reviews: 298,
      image: "https://images.unsplash.com/photo-1591768575957-44d57edc4245?w=400&h=300&fit=crop",
      stock: "Low Stock",
      brand: "SmartPet",
      capacity: "6L"
    },
    {
      id: 5,
      name: "Pet Grooming Kit",
      category: "Grooming",
      price: 34.99,
      rating: 4.5,
      reviews: 167,
      image: "https://images.unsplash.com/photo-1585664811087-47f65abbad64?w=400&h=300&fit=crop",
      stock: "In Stock",
      brand: "GroomPro",
      items: "7 tools"
    },
    {
      id: 6,
      name: "Durable Dog Leash",
      category: "Walking Gear",
      price: 19.99,
      rating: 4.8,
      reviews: 521,
      image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400&h=300&fit=crop",
      stock: "In Stock",
      brand: "WalkSafe",
      length: "6 ft"
    }
  ];

      return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-2 text-center">
          Pet Shop Collection
        </h1>
        <p className="text-gray-600 text-center mb-8">
          Everything your furry friend needs
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md hover:bg-red-50 transition-colors">
                  <Heart className="w-5 h-5 text-gray-600" />
                </button>
                <span className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold ${
                  product.stock === "Low Stock" 
                    ? "bg-orange-500 text-white" 
                    : "bg-green-500 text-white"
                }`}>
                  {product.stock}
                </span>
              </div>
              
              <div className="p-5">
                <div className="text-xs text-purple-600 font-semibold mb-1">
                  {product.category}
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {product.name}
                </h3>
                
                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating) 
                            ? "text-yellow-400 fill-yellow-400" 
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 ml-2">
                    {product.rating} ({product.reviews})
                  </span>
                </div>
                
                <div className="flex justify-between items-center mb-3 text-sm text-gray-600">
                  <span className="font-medium">{product.brand}</span>
                  <span>{product.weight || product.pieces || product.size || product.capacity || product.items || product.length}</span>
                </div>
                
                <div className="flex items-center justify-between pt-3 border-t">
                  <span className="text-2xl font-bold text-purple-600">
                    ${product.price}
                  </span>
                  <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
                    <ShoppingCart className="w-4 h-4" />
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PetShopping;




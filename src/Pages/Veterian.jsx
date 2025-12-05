
import { motion } from 'framer-motion';
import { Link } from 'react-router';
const Veterian = () => {

  const vets = [
    {
      name: "Dr. Sarah Mitchell",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500&h=400&fit=crop",
      specialist: "Small Animal Surgery",
      rating: 4.9,
      reviews: 127,
      price: "$80",
      experience: "12 years",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      name: "Dr. Michael Chen",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=500&h=400&fit=crop",
      specialist: "Emergency & Critical Care",
      rating: 4.8,
      reviews: 104,
      price: "$95",
      experience: "10 years",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      name: "Dr. Emily Rodriguez",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=500&h=400&fit=crop",
      specialist: "Exotic Animal Care",
      rating: 5.0,
      reviews: 89,
      price: "$85",
      experience: "8 years",
      gradient: "from-teal-500 to-teal-600"
    },
    {
      name: "Dr. James Wilson",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=500&h=400&fit=crop",
      specialist: "Dental & Oral Surgery",
      rating: 4.9,
      reviews: 156,
      price: "$75",
      experience: "15 years",
      gradient: "from-orange-500 to-orange-600"
    }
  ];
   const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 1.3, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

 return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-4 sm:p-6 lg:p-8 my-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-4"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            🩺 Meet Our Expert Vets
          </motion.h1>
          <motion.p 
            className="text-gray-600 text-base sm:text-lg lg:text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Compassionate care from certified veterinary professionals
          </motion.p>
        </motion.div>

        {/* Vets Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {vets.map((vet, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
              variants={cardVariants}
              whileHover={{ 
                y: -10, 
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                transition: { duration: 0.3 }
              }}
            >
              {/* Image Section */}
              <div className="relative h-64 overflow-hidden">
                <motion.img
                  src={vet.image}
                  alt={vet.name}
                  className="w-full h-full object-cover"
                  variants={imageVariants}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
                <div className={`absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t ${vet.gradient} opacity-60`}></div>
                
                {/* Rating Badge */}
                <motion.div 
                  className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 shadow-lg flex items-center gap-1"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
                >
                  <span className="text-yellow-500 text-lg">⭐</span>
                  <span className="font-bold text-gray-800">{vet.rating}</span>
                </motion.div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <motion.h3 
                  className="text-xl sm:text-2xl font-bold text-gray-800 mb-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.6 }}
                >
                  {vet.name}
                </motion.h3>
                
                <motion.div 
                  className="flex items-center gap-2 mb-3"
                  initial={{ width: 0 }}
                  animate={{ width: "3rem" }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.7 }}
                >
                  <span className={`h-1 w-12 bg-gradient-to-r ${vet.gradient} rounded-full`}></span>
                </motion.div>

                <motion.p 
                  className="text-indigo-600 font-semibold mb-3 text-sm sm:text-base"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.8 }}
                >
                  {vet.specialist}
                </motion.p>

                <motion.div 
                  className="space-y-2 mb-4 text-sm text-gray-600"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.9 }}
                >
                  <div className="flex items-center gap-2">
                    <span>👤</span>
                    <span>{vet.experience} experience</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>💬</span>
                    <span>{vet.reviews} reviews</span>
                  </div>
                </motion.div>

                {/* Price and Book Button */}
                <motion.div 
                  className="flex items-center justify-between pt-4 border-t border-gray-200"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 1 }}
                >
                  <div>
                    <p className="text-xs text-gray-500">Consultation</p>
                    <p className="text-2xl font-bold text-gray-800">{vet.price}</p>
                  </div>
                  <motion.button 
                    className={`bg-gradient-to-r ${vet.gradient} text-white px-6 py-2 rounded-full font-semibold text-sm sm:text-base`}
                    whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)" }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    Book Now
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <p className="text-gray-600 mb-4">Can't find the right specialist?</p>
          <motion.button 
            className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold"
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 20px 40px rgba(99, 102, 241, 0.4)" 
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <Link to={`/`}>View All Veterinarians</Link>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Veterian;





import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const testimonials = [
  {
    name: 'María González',
    role: 'Paciente desde 2023',
    comment: 'Excelente servicio, muy profesionales. Mi sonrisa nunca había lucido mejor. ¡100% recomendado!',
    rating: 5,
    image: 'https://i.pravatar.cc/150?img=1'
  },
  {
    name: 'Carlos Ramírez',
    role: 'Paciente desde 2022',
    comment: 'El mejor dentista de la ciudad. Atención personalizada y resultados increíbles.',
    rating: 5,
    image: 'https://i.pravatar.cc/150?img=3'
  },
  {
    name: 'Ana Martínez',
    role: 'Paciente desde 2024',
    comment: 'Me encantó el trato y la tecnología que utilizan. Sin dolor y con excelentes resultados.',
    rating: 5,
    image: 'https://i.pravatar.cc/150?img=5'
  }
];

const TestimonialCard = ({ testimonial, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="bg-white rounded-xl p-5 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-100"
    >
      {/* Quote Icon */}
      <FaQuoteLeft className="text-blue-600 text-2xl sm:text-3xl mb-3 sm:mb-4 opacity-50" />
      
      {/* Comment */}
      <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-5 leading-relaxed italic">
        "{testimonial.comment}"
      </p>
      
      {/* Rating Stars */}
      <div className="flex gap-1 mb-3 sm:mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <FaStar key={i} className="text-yellow-400 text-base sm:text-lg" />
        ))}
      </div>
      
      {/* Author Info */}
      <div className="flex items-center gap-3 sm:gap-4 pt-3 sm:pt-4 border-t border-gray-100">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover border-2 border-blue-200"
        />
        <div>
          <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
          <p className="text-sm text-gray-500">{testimonial.role}</p>
        </div>
      </div>
    </motion.div>
  );
};

const TestimonialsSection = () => {
  return (
    <section className="py-12 sm:py-14 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
            Lo que dicen nuestros pacientes
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-2">
            Miles de sonrisas transformadas y pacientes satisfechos
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 sm:mt-10 md:mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-blue-100 px-4 sm:px-6 py-3 rounded-full">
            <FaStar className="text-yellow-400 text-xl sm:text-2xl" />
            <span className="font-bold text-gray-800 text-base sm:text-lg">4.9/5.0</span>
            <span className="text-gray-600 text-sm sm:text-base">• +500 reseñas verificadas</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

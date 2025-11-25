import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaTeeth, FaTooth, FaHospital } from 'react-icons/fa';
import { MdOutlineCleaningServices } from 'react-icons/md';
import { GiToothbrush } from 'react-icons/gi';
import { BiSolidFirstAid } from 'react-icons/bi';

const services = [
  {
    icon: MdOutlineCleaningServices,
    title: 'Limpieza Dental',
    description: 'Limpieza profunda y pulido dental para mantener tu sonrisa radiante y saludable.',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: FaTeeth,
    title: 'Ortodoncia',
    description: 'Brackets y alineadores invisibles para corregir la posición de tus dientes.',
    color: 'from-blue-600 to-blue-700'
  },
  {
    icon: BiSolidFirstAid,
    title: 'Urgencias Dentales',
    description: 'Atención inmediata para emergencias. Estamos aquí cuando más nos necesitas.',
    color: 'from-blue-700 to-blue-800'
  }
];

const ServiceCard = ({ service, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const Icon = service.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="group"
    >
      <div className="bg-white/80 backdrop-blur-md p-5 sm:p-6 md:p-7 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 h-full border border-blue-100 hover:border-blue-300">
        {/* Icon with gradient background */}
        <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-linear-to-br ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="text-xl sm:text-2xl md:text-3xl text-white" />
        </div>
        
        {/* Content */}
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-2 sm:mb-3">
          {service.title}
        </h3>
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
          {service.description}
        </p>

        {/* Hover effect line */}
        <div className="mt-4 h-1 w-0 bg-linear-to-r from-blue-500 to-blue-600 group-hover:w-full transition-all duration-500 rounded-full"></div>
      </div>
    </motion.div>
  );
};

const ServicesGrid = () => {
  return (
    <section className="py-12 sm:py-14 md:py-16 bg-linear-to-br from-blue-50 to-white">
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
            Nuestros Servicios
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-2">
            Ofrecemos una amplia gama de tratamientos dentales con la mejor tecnología
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;

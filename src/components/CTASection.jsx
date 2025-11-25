import { motion } from 'framer-motion';
import { FaWhatsapp, FaPhone, FaMapMarkerAlt, FaClock, FaInstagram } from 'react-icons/fa';
import { businessConfig } from '../config/businessConfig';

const CTASection = () => {
  const { contact, cta } = businessConfig;

  return (
    <section className="py-10 sm:py-12 md:py-14 bg-linear-to-br from-amber-600 via-amber-700 to-amber-800 relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-amber-400/20 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-amber-300/20 rounded-full blur-3xl"
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Main CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-5">
              {cta.title}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-amber-100 mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
              {cta.subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-10 px-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open(`https://wa.me/${contact.phone}?text=Hola, quiero hacer un pedido a domicilio`, '_blank')}
                className="w-full sm:w-auto bg-white text-amber-600 font-bold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-xl shadow-2xl hover:shadow-white/50 transition-all duration-300 flex items-center justify-center gap-3"
              >
                <FaWhatsapp className="text-xl sm:text-2xl text-green-500" />
                {cta.primaryButton}
              </motion.button>

              <motion.a
                href={`tel:${contact.phoneDisplay}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-amber-500 hover:bg-amber-400 text-white font-bold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center gap-3"
              >
                <FaPhone className="text-lg sm:text-xl" />
                {cta.secondaryButton}
              </motion.a>
            </div>
          </motion.div>

          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto"
          >
            {/* Location */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-5 border border-white/20">
              <FaMapMarkerAlt className="text-2xl sm:text-3xl text-white mb-2 mx-auto" />
              <h3 className="text-white font-bold text-sm sm:text-base mb-1.5">Ubicación</h3>
              <p className="text-amber-100 text-xs sm:text-sm">
                {contact.addressShort}
              </p>
            </div>

            {/* Phone */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-5 border border-white/20">
              <FaPhone className="text-2xl sm:text-3xl text-white mb-2 mx-auto" />
              <h3 className="text-white font-bold text-sm sm:text-base mb-1.5">Teléfono</h3>
              <p className="text-amber-100 text-xs sm:text-sm">
                {contact.phoneDisplay}<br />
                {cta.schedule}
              </p>
            </div>

            {/* Horario */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-5 border border-white/20">
              <FaClock className="text-2xl sm:text-3xl text-white mb-2 mx-auto" />
              <h3 className="text-white font-bold text-sm sm:text-base mb-1.5">Horario</h3>
              <p className="text-amber-100 text-xs sm:text-sm">
                {cta.schedule}<br />
                {cta.scheduleDetail}
              </p>
            </div>
          </motion.div>

          {/* Social Media */}
          {contact.social.instagram && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-6 sm:mt-8 flex gap-3 sm:gap-4 justify-center"
            >
              <motion.a
                href={contact.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: -5 }}
                className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-colors"
              >
                <FaInstagram className="text-xl sm:text-2xl text-white" />
              </motion.a>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CTASection;

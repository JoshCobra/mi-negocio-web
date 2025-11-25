import { motion } from 'framer-motion';
import { FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram } from 'react-icons/fa';

const CTASection = () => {
  const phoneNumber = '52XXXXXXXXXX'; // Reemplaza con tu número

  return (
    <section className="py-10 sm:py-12 md:py-14 bg-linear-to-br from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"
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
        className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl"
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
              ¿Listo para tu mejor sonrisa?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
              Agenda tu cita ahora y recibe una evaluación completamente gratis
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-10 px-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open(`https://wa.me/${phoneNumber}?text=Hola, quiero agendar una cita`, '_blank')}
                className="w-full sm:w-auto bg-white text-blue-600 font-bold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-xl shadow-2xl hover:shadow-white/50 transition-all duration-300 flex items-center justify-center gap-3"
              >
                <FaWhatsapp className="text-xl sm:text-2xl text-green-500" />
                Agendar por WhatsApp
              </motion.button>

              <motion.a
                href="tel:+52XXXXXXXXXX"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-blue-500 hover:bg-blue-400 text-white font-bold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center gap-3"
              >
                <FaPhone className="text-lg sm:text-xl" />
                Llamar Ahora
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
              <p className="text-blue-100 text-xs sm:text-sm">
                Av. Principal #123<br />
                Col. Centro, Ciudad
              </p>
            </div>

            {/* Phone */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-5 border border-white/20">
              <FaPhone className="text-2xl sm:text-3xl text-white mb-2 mx-auto" />
              <h3 className="text-white font-bold text-sm sm:text-base mb-1.5">Teléfono</h3>
              <p className="text-blue-100 text-xs sm:text-sm">
                +52 XXX XXX XXXX<br />
                Lun - Sáb: 9am - 7pm
              </p>
            </div>

            {/* Email */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-5 border border-white/20">
              <FaEnvelope className="text-2xl sm:text-3xl text-white mb-2 mx-auto" />
              <h3 className="text-white font-bold text-sm sm:text-base mb-1.5">Email</h3>
              <p className="text-blue-100 text-xs sm:text-sm">
                contacto@tuempresa.com<br />
                Respuesta en 24hrs
              </p>
            </div>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 sm:mt-8 flex gap-3 sm:gap-4 justify-center"
          >
            <motion.a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-colors"
            >
              <FaFacebook className="text-xl sm:text-2xl text-white" />
            </motion.a>
            <motion.a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: -5 }}
              className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-colors"
            >
              <FaInstagram className="text-xl sm:text-2xl text-white" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

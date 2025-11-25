import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative min-h-[60vh] sm:min-h-[65vh] md:min-h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1629909615184-74f495363b67?w=1920&h=1080&fit=crop"
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-br from-blue-900/90 via-blue-800/85 to-blue-700/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-5 md:mb-6 leading-tight">
            Recupera tu sonrisa hoy
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-6 sm:mb-7 md:mb-8 max-w-2xl mx-auto px-2">
            Atención dental profesional con tecnología de vanguardia. 
            Tu salud bucal es nuestra prioridad.
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-base sm:text-lg px-8 sm:px-10 py-3.5 sm:py-4 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl"
            onClick={() => window.open('https://wa.me/52XXXXXXXXXX?text=Hola, quiero agendar una cita', '_blank')}
          >
            Agenda tu Cita Ahora
          </motion.button>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 right-10 w-20 h-20 bg-blue-400/20 rounded-full blur-xl"
          animate={{
            y: [0, 20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-32 h-32 bg-blue-300/20 rounded-full blur-xl"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </section>
  );
};

export default HeroSection;

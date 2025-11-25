import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoChatbubbleEllipsesSharp, IoClose } from 'react-icons/io5';
import { FaWhatsapp, FaCalendarAlt, FaMapMarkerAlt, FaDollarSign } from 'react-icons/fa';

const SmartChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        setShowWelcome(true);
      }, 300);
      return () => clearTimeout(timer);
    } else {
      setShowWelcome(false);
    }
  }, [isOpen]);

  const handleOptionClick = (option) => {
    const phoneNumber = '52XXXXXXXXXX'; // Reemplaza con el número real
    let message = '';

    switch (option) {
      case 'cita':
        message = 'Hola, quiero agendar una cita';
        window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
        break;
      case 'ubicacion':
        message = 'Hola, quisiera conocer su ubicación';
        window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
        break;
      case 'precios':
        message = 'Hola, me gustaría información sobre precios';
        window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
        break;
      default:
        break;
    }

    setTimeout(() => setIsOpen(false), 500);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="absolute bottom-20 right-0 w-80 sm:w-96 bg-white rounded-xl shadow-2xl overflow-hidden mb-4"
          >
            {/* Header */}
            <div className="bg-linear-to-r from-blue-600 to-blue-700 p-4 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                    <FaWhatsapp className="text-2xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Asistente Virtual</h3>
                    <p className="text-xs text-blue-100">En línea</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="hover:bg-white/20 p-2 rounded-full transition-colors"
                >
                  <IoClose className="text-2xl" />
                </button>
              </div>
            </div>

            {/* Chat Body */}
            <div className="p-6 bg-linear-to-br from-blue-50 to-white min-h-[300px] flex flex-col">
              {/* Welcome Message */}
              <AnimatePresence>
                {showWelcome && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mb-6"
                  >
                    <div className="bg-white rounded-xl rounded-tl-none p-4 shadow-md max-w-[85%]">
                      <p className="text-gray-800">
                        Hola 👋, soy el asistente virtual. ¿En qué puedo ayudarte hoy?
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Options */}
              <div className="space-y-3 mt-auto">
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleOptionClick('cita')}
                  className="w-full bg-white hover:bg-blue-50 border-2 border-blue-200 hover:border-blue-400 rounded-xl p-4 flex items-center space-x-3 transition-all shadow-sm hover:shadow-md group"
                >
                  <div className="w-10 h-10 bg-linear-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <FaCalendarAlt className="text-white text-lg" />
                  </div>
                  <span className="font-semibold text-gray-800">📅 Agendar Cita</span>
                </motion.button>

                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleOptionClick('ubicacion')}
                  className="w-full bg-white hover:bg-blue-50 border-2 border-blue-200 hover:border-blue-400 rounded-xl p-4 flex items-center space-x-3 transition-all shadow-sm hover:shadow-md group"
                >
                  <div className="w-10 h-10 bg-linear-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <FaMapMarkerAlt className="text-white text-lg" />
                  </div>
                  <span className="font-semibold text-gray-800">📍 Ver Ubicación</span>
                </motion.button>

                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleOptionClick('precios')}
                  className="w-full bg-white hover:bg-blue-50 border-2 border-blue-200 hover:border-blue-400 rounded-xl p-4 flex items-center space-x-3 transition-all shadow-sm hover:shadow-md group"
                >
                  <div className="w-10 h-10 bg-linear-to-br from-blue-700 to-blue-800 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <FaDollarSign className="text-white text-lg" />
                  </div>
                  <span className="font-semibold text-gray-800">💰 Precios</span>
                </motion.button>
              </div>
            </div>

            {/* Footer */}
            <div className="bg-gray-50 px-4 py-3 text-center border-t border-gray-200">
              <p className="text-xs text-gray-500 flex items-center justify-center">
                <FaWhatsapp className="mr-1 text-green-500" />
                Conectado vía WhatsApp
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <div className="relative">
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-linear-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-full p-4 shadow-2xl flex items-center justify-center relative overflow-hidden group"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={{
            y: isOpen ? 0 : [0, -10, 0],
          }}
          transition={{
            y: {
              duration: 2,
              repeat: isOpen ? 0 : Infinity,
              ease: "easeInOut"
            }
          }}
        >
        {/* Pulse effect */}
        {!isOpen && (
          <motion.div
            className="absolute inset-0 bg-blue-400 rounded-full"
            animate={{
              scale: [1, 1.5, 1.5],
              opacity: [0.5, 0, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut"
            }}
          />
        )}

        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <IoClose className="text-3xl" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <IoChatbubbleEllipsesSharp className="text-3xl" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

        {/* Notification Badge */}
        {!isOpen && (
          <motion.div
            className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center shadow-lg z-10"
            initial={{ scale: 0 }}
            animate={{ 
              scale: 1,
              y: [0, -10, 0]
            }}
            transition={{ 
              scale: { delay: 0.5, type: "spring" },
              y: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          >
            1
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default SmartChatWidget;

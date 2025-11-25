import HeroSection from './components/HeroSection'
import ServicesGrid from './components/ServicesGrid'
import TestimonialsSection from './components/TestimonialsSection'
import CTASection from './components/CTASection'
import SmartChatWidget from './components/SmartChatWidget'

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Services Grid */}
      <ServicesGrid />
      
      {/* Testimonials Section (BONUS) */}
      <TestimonialsSection />
      
      {/* CTA Section (BONUS) */}
      <CTASection />
      
      {/* Smart Chat Widget - Floating (LA JOYA) */}
      <SmartChatWidget />
    </div>
  )
}

export default App

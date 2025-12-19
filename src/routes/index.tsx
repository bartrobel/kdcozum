import { createFileRoute } from '@tanstack/react-router'
import {
  Zap,
  Server,
  Route as RouteIcon,
  Shield,
  Waves,
  Sparkles,
} from 'lucide-react'

export const Route = createFileRoute('/')({ component: App })

function App() {
  

  return (
    <div className="min-h-screen bg-green-600">
      <section className="relative py-20 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-green-700/40"></div>
        <div className="relative max-w-5xl mx-auto">
          <div className="flex items-center justify-center gap-6 mb-6">
            <h1 className="text-5xl md:text-6xl font-black text-white tracking-tight">
              KD Çözüm
            </h1>
          </div>
          <p className="text-2xl md:text-3xl text-gray-300 mb-4 font-light">
            Kentsel Dönüşümde Çözüm Adresiniz
          </p>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-8">
            İş süreçlerinizi sadeleştiren, hızlı ve güvenilir dijital çözümler
            geliştiriyoruz. İhtiyacınıza özel modern web ve mobil uygulamalar.
          </p>
          {/* <div className="flex flex-col items-center gap-4">
            <a
              href="#contact"
              className="px-8 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg transition-colors shadow-lg shadow-emerald-500/50"
            >
              Teklif Al
            </a>
          </div> */}
        </div>
      </section>

      
    </div>
  )
}

import { useEffect, useRef } from 'react';
import { ArrowRight, TrendingUp, Zap, Target, Award } from 'lucide-react';

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 20;
      const y = (clientY / innerHeight - 0.5) * 20;
      
      heroRef.current.style.setProperty('--mouse-x', `${x}px`);
      heroRef.current.style.setProperty('--mouse-y', `${y}px`);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToContact = () => {
    const element = document.querySelector('#contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.querySelector('#servicos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="inicio"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      style={{
        backgroundImage: 'url(/hero-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/80 via-[#0a1628]/70 to-[#0a1628]" />
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#ff6b35]/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#ff6b35]/10 border border-[#ff6b35]/30 rounded-full mb-6">
              <span className="w-2 h-2 bg-[#ff6b35] rounded-full animate-pulse" />
              <span className="text-sm text-[#ff6b35] font-medium">
                Especialistas em Pequenos e Médios Negócios
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
              Transforme seu{' '}
              <span className="gradient-text">Negócio</span> em uma{' '}
              <span className="gradient-text">Máquina de Vendas</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
              Estratégias de marketing digital com <strong className="text-[#ff6b35]">Inteligência Artificial</strong> que geram resultados reais. 
              Mais de <strong className="text-white">70 milhões em faturamento</strong> gerados para nossos clientes.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg">
                <TrendingUp className="w-5 h-5 text-[#ff6b35]" />
                <span className="text-sm text-gray-300">+300% de ROI</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg">
                <Zap className="w-5 h-5 text-[#ff6b35]" />
                <span className="text-sm text-gray-300">Resultados em 30 dias</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg">
                <Target className="w-5 h-5 text-[#ff6b35]" />
                <span className="text-sm text-gray-300">100% Focado em PMEs</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button onClick={scrollToContact} className="btn-primary flex items-center justify-center gap-2 group">
                Quero Aumentar Minhas Vendas
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
              <button onClick={scrollToServices} className="btn-secondary">
                Conhecer Serviços
              </button>
            </div>

            {/* Social Proof */}
            <div className="mt-8 flex items-center justify-center lg:justify-start gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-[#ff6b35] to-[#ffb347] border-2 border-[#0a1628] flex items-center justify-center text-sm font-bold"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Award key={i} className="w-4 h-4 text-[#ffb347] fill-[#ffb347]" />
                  ))}
                </div>
                <p className="text-sm text-gray-400">
                  <span className="text-white font-semibold">+150 empresas</span> já transformaram seus resultados
                </p>
              </div>
            </div>
          </div>

          {/* Right Content - Lead Form Preview */}
          <div className="hidden lg:block relative">
            <div className="relative animate-float">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-[#ff6b35]/20 rounded-3xl blur-3xl" />
              
              {/* Card */}
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#ff6b35] flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Diagnóstico Gratuito</h3>
                    <p className="text-sm text-gray-400">Descubra o potencial do seu negócio</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="p-4 bg-white/5 rounded-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                        <TrendingUp className="w-4 h-4 text-green-400" />
                      </div>
                      <span className="text-sm font-medium">Análise de Presença Digital</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full w-3/4 bg-gradient-to-r from-[#ff6b35] to-[#ffb347] rounded-full" />
                    </div>
                  </div>

                  <div className="p-4 bg-white/5 rounded-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                        <Zap className="w-4 h-4 text-blue-400" />
                      </div>
                      <span className="text-sm font-medium">Potencial de Crescimento</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full w-[90%] bg-gradient-to-r from-[#ff6b35] to-[#ffb347] rounded-full" />
                    </div>
                  </div>

                  <div className="p-4 bg-white/5 rounded-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                        <Award className="w-4 h-4 text-purple-400" />
                      </div>
                      <span className="text-sm font-medium">Oportunidades Identificadas</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full w-[85%] bg-gradient-to-r from-[#ff6b35] to-[#ffb347] rounded-full" />
                    </div>
                  </div>
                </div>

                <button
                  onClick={scrollToContact}
                  className="w-full mt-6 btn-primary"
                >
                  Quero Meu Diagnóstico Gratuito
                </button>

                <p className="text-center text-xs text-gray-500 mt-4">
                  🔒 Seus dados estão 100% seguros
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a1628] to-transparent" />
    </section>
  );
}

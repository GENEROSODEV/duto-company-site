import { useEffect, useRef, useState } from 'react';
import { Award, TrendingUp, Globe, Target, Quote, Linkedin, Instagram } from 'lucide-react';

export function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const achievements = [
    {
      icon: <TrendingUp className="w-6 h-6 text-[#ff6b35]" />,
      value: 'R$ 70M+',
      label: 'Faturados em 2025',
    },
    {
      icon: <Globe className="w-6 h-6 text-[#ff6b35]" />,
      value: '15+',
      label: 'Anos de Experiência',
    },
    {
      icon: <Target className="w-6 h-6 text-[#ff6b35]" />,
      value: '150+',
      label: 'Negócios Transformados',
    },
    {
      icon: <Award className="w-6 h-6 text-[#ff6b35]" />,
      value: '100%',
      label: 'Foco em Resultados',
    },
  ];

  return (
    <section
      id="quem-somos"
      ref={sectionRef}
      className="section-padding bg-[#0a1628] relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#ff6b35]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#1e3a5f]/30 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Image */}
          <div
            className={`relative transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            {/* Main image */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#ff6b35]/30 to-[#1e3a5f]/30 rounded-3xl blur-2xl" />
              <div className="relative rounded-2xl overflow-hidden border border-white/10">
                <img
                  src="ceo-juan.jpg"
                  alt="Juan Pablo - CEO DUTO Company"
                  className="w-full h-auto object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/80 via-transparent to-transparent" />
                
                {/* Name badge */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-[#0a1628]/90 backdrop-blur-md rounded-xl p-4 border border-white/10">
                    <h3 className="text-xl font-bold text-white">Juan Pablo</h3>
                    <p className="text-[#ff6b35] font-medium">CEO & Fundador</p>
                    <p className="text-sm text-gray-400 mt-1">DUTO Company</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating stats card */}
            <div
              className={`absolute -bottom-8 -right-4 lg:-right-8 bg-gradient-to-br from-[#ff6b35] to-[#ff8c5a] rounded-xl p-4 shadow-xl shadow-[#ff6b35]/30 transition-all duration-700 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">R$ 70M+</p>
                  <p className="text-sm text-white/80">Faturados em 2025</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            {/* Section label */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#ff6b35]/10 border border-[#ff6b35]/30 rounded-full mb-6">
              <span className="text-sm text-[#ff6b35] font-medium">Quem Somos</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              A Força Por Trás da{' '}
              <span className="gradient-text">DUTO Company</span>
            </h2>

            {/* Quote */}
            <div className="relative mb-8">
              <Quote className="absolute -top-2 -left-2 w-8 h-8 text-[#ff6b35]/30" />
              <p className="text-lg text-gray-300 italic pl-6">
                "Meu objetivo é transformar pequenos e médios negócios em máquinas de vendas 
                através de estratégias digitais inovadoras e resultados mensuráveis."
              </p>
            </div>

            {/* Bio */}
            <div className="space-y-4 text-gray-400 mb-8">
              <p>
                <strong className="text-white">Juan Pablo</strong> é um empresário espanhol 
                que chegou ao Brasil aos <strong className="text-[#ff6b35]">3 anos de idade</strong>. 
                Com uma trajetória impressionante no mercado de negócios, acumulou uma vasta 
                experiência que o tornou referência em transformação digital.
              </p>
              <p>
                Em <strong className="text-white">2025</strong>, liderou operações que 
                faturaram mais de <strong className="text-[#ff6b35]">R$ 70 milhões</strong> no 
                mercado aduaneiro, demonstrando sua capacidade de gerar resultados expressivos 
                em mercados complexos.
              </p>
              <p>
                Agora, Juan Pablo está canalizando todo esse conhecimento para criar um 
                <strong className="text-white"> modelo de negócio único e exclusivo</strong> na 
                DUTO Company, focado em ajudar pequenos e médios empresários a alcançarem 
                resultados extraordinários no mundo digital.
              </p>
            </div>

            {/* Achievements Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {achievements.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#ff6b35]/10 flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-lg font-bold text-white">{item.value}</p>
                    <p className="text-xs text-gray-400">{item.label}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-400">Siga Juan:</span>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#ff6b35] hover:border-[#ff6b35] transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#ff6b35] hover:border-[#ff6b35] transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div
          className={`mt-20 text-center max-w-4xl mx-auto transition-all duration-700 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="p-8 bg-gradient-to-br from-white/5 to-white/[0.02] rounded-2xl border border-white/10">
            <h3 className="text-2xl font-bold mb-4">Nossa Missão</h3>
            <p className="text-lg text-gray-300">
              Democratizar o acesso a estratégias de marketing de alto nível para{' '}
              <span className="text-[#ff6b35] font-semibold">pequenos e médios negócios</span>, 
              provando que qualquer empresa pode alcançar resultados extraordinários com as 
              ferramentas e o parceiro certo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

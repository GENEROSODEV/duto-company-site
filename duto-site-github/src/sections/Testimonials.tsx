import { useEffect, useRef, useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  image: string;
  content: string;
  rating: number;
  results: string;
}

export function Testimonials() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
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

  const testimonials: Testimonial[] = [
    {
      name: 'Carlos Mendes',
      role: 'Proprietário',
      company: 'Móveis Artesanal',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
      content: 'A DUTO Company transformou completamente nossa presença digital. Em apenas 3 meses, nossas vendas online aumentaram 250%. A equipe é extremamente profissional e os resultados são reais.',
      rating: 5,
      results: '+250% em vendas',
    },
    {
      name: 'Ana Paula Silva',
      role: 'Diretora Comercial',
      company: 'TechSolutions Brasil',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face',
      content: 'Trabalhamos com várias agências antes, mas nenhuma entregou resultados como a DUTO. A abordagem com IA e automação realmente faz a diferença. Nosso custo de aquisição caiu 60%.',
      rating: 5,
      results: '-60% no CAC',
    },
    {
      name: 'Roberto Oliveira',
      role: 'Fundador',
      company: 'Restaurante Sabor & Cia',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
      content: 'Como pequeno empresário, sempre achei que marketing digital era coisa de grande empresa. A DUTO provou o contrário. Hoje tenho fila de espera nos finais de semana!',
      rating: 5,
      results: 'Filas de espera',
    },
    {
      name: 'Fernanda Costa',
      role: 'CEO',
      company: 'Moda Feminina FC',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face',
      content: 'Os vídeos que a DUTO produz para nossa marca são incríveis. Cada reel viraliza! Nosso Instagram cresceu de 5k para 50k seguidores em 6 meses.',
      rating: 5,
      results: '10x seguidores',
    },
    {
      name: 'Marcelo Santos',
      role: 'Diretor',
      company: 'Construtora MS',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face',
      content: 'No setor da construção civil, leads qualificados são ouro. A DUTO nos ajudou a implementar um funil de vendas digital que triplicou nossa carteira de clientes.',
      rating: 5,
      results: '3x mais leads',
    },
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section
      id="depoimentos"
      ref={sectionRef}
      className="section-padding bg-[#0a1628] relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#ff6b35]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#1e3a5f]/20 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#ff6b35]/10 border border-[#ff6b35]/30 rounded-full mb-6">
            <span className="text-sm text-[#ff6b35] font-medium">Depoimentos</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            O Que Nossos{' '}
            <span className="gradient-text">Clientes</span> Dizem
          </h2>
          <p className="text-gray-400 text-lg">
            Não acredite apenas em nossa palavra. Veja o que empresários como você 
            conquistaram trabalhando com a DUTO Company.
          </p>
        </div>

        {/* Featured Testimonial */}
        <div
          className={`max-w-4xl mx-auto mb-12 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="relative bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-8 lg:p-12 border border-white/10">
            {/* Quote icon */}
            <Quote className="absolute top-6 left-6 w-12 h-12 text-[#ff6b35]/20" />

            <div className="relative">
              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#ffb347] fill-[#ffb347]" />
                ))}
              </div>

              {/* Content */}
              <p className="text-xl lg:text-2xl text-gray-200 mb-8 leading-relaxed">
                "{testimonials[activeIndex].content}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <img
                    src={testimonials[activeIndex].image}
                    alt={testimonials[activeIndex].name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-[#ff6b35]"
                  />
                  <div>
                    <p className="font-bold text-white">{testimonials[activeIndex].name}</p>
                    <p className="text-sm text-gray-400">
                      {testimonials[activeIndex].role} • {testimonials[activeIndex].company}
                    </p>
                  </div>
                </div>

                {/* Results badge */}
                <div className="px-4 py-2 bg-[#ff6b35]/10 border border-[#ff6b35]/30 rounded-lg">
                  <p className="text-sm text-[#ff6b35] font-semibold">
                    {testimonials[activeIndex].results}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#ff6b35] hover:border-[#ff6b35] transition-all"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === activeIndex
                        ? 'w-8 bg-[#ff6b35]'
                        : 'bg-white/20 hover:bg-white/40'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#ff6b35] hover:border-[#ff6b35] transition-all"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Testimonial Cards Grid */}
        <div
          className={`grid md:grid-cols-3 lg:grid-cols-5 gap-4 transition-all duration-700 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {testimonials.map((testimonial, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`p-4 rounded-xl border transition-all duration-300 text-left ${
                index === activeIndex
                  ? 'bg-[#ff6b35]/10 border-[#ff6b35]/50'
                  : 'bg-white/5 border-white/10 hover:bg-white/10'
              }`}
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover mb-3"
              />
              <p className="font-medium text-sm text-white truncate">{testimonial.name}</p>
              <p className="text-xs text-gray-400 truncate">{testimonial.company}</p>
              <p className="text-xs text-[#ff6b35] mt-2">{testimonial.results}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

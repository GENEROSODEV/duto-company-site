import { useEffect, useRef, useState } from 'react';
import { Calendar, Video, Brain, Rocket, ArrowRight, Check } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  image: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  delay: number;
}

function ServiceCard({ icon, image, title, subtitle, description, features, delay }: ServiceCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToContact = () => {
    const element = document.querySelector('#contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      ref={ref}
      className={`group relative bg-gradient-to-br from-white/5 to-white/[0.02] rounded-2xl overflow-hidden border border-white/10 transition-all duration-700 hover:border-[#ff6b35]/50 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-[#0a1628]/50 to-transparent" />
        
        {/* Icon badge */}
        <div className="absolute bottom-4 left-4 w-14 h-14 rounded-xl bg-[#ff6b35] flex items-center justify-center shadow-lg shadow-[#ff6b35]/30">
          {icon}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-sm text-[#ff6b35] font-medium mb-1">{subtitle}</p>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-400 text-sm mb-4">{description}</p>

        {/* Features */}
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 text-sm text-gray-300">
              <Check className="w-4 h-4 text-[#ff6b35] flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button
          onClick={scrollToContact}
          className="flex items-center gap-2 text-[#ff6b35] font-medium text-sm group/btn"
        >
          Saiba mais
          <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
        </button>
      </div>

      {/* Hover glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-[#ff6b35]/5 to-transparent" />
      </div>
    </div>
  );
}

export function Services() {
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

  const services = [
    {
      icon: <Calendar className="w-7 h-7 text-white" />,
      image: '/servico-postagens.jpg',
      title: 'Postagem + Cadência Digital',
      subtitle: 'Gestão de Redes Sociais',
      description: 'Estratégia completa de conteúdo com calendário editorial, postagens otimizadas e análise de métricas em tempo real.',
      features: [
        'Calendário editorial estratégico',
        'Posts diários em todas as redes',
        'Análise de engajamento',
        'Relatórios semanais',
      ],
    },
    {
      icon: <Video className="w-7 h-7 text-white" />,
      image: '/servico-videos.jpg',
      title: 'Vídeos e Edições',
      subtitle: 'Produção Audiovisual',
      description: 'Conteúdo em vídeo profissional que engaja e converte. Desde reels curtos até vídeos institucionais completos.',
      features: [
        'Reels e Shorts virais',
        'Edição profissional',
        'Motion graphics',
        'Legendas e efeitos',
      ],
    },
    {
      icon: <Brain className="w-7 h-7 text-white" />,
      image: '/servico-ia.jpg',
      title: 'Inteligência Artificial Integrada',
      subtitle: 'Automação Inteligente',
      description: 'Automatize processos e escale resultados com IA. Chatbots, análise preditiva e personalização em escala.',
      features: [
        'Chatbots inteligentes',
        'Análise preditiva',
        'Personalização automática',
        'Otimização de campanhas',
      ],
    },
    {
      icon: <Rocket className="w-7 h-7 text-white" />,
      image: '/servico-produtos.jpg',
      title: 'Desenvolvimento de Produtos',
      subtitle: 'Inovação Digital',
      description: 'Transforme ideias em produtos digitais de sucesso. Apps, plataformas e soluções tecnológicas sob medida.',
      features: [
        'Prototipagem rápida',
        'UI/UX Design',
        'Desenvolvimento ágil',
        'Lançamento estratégico',
      ],
    },
  ];

  return (
    <section
      id="servicos"
      ref={sectionRef}
      className="section-padding bg-[#0a1628] relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#ff6b35]/5 to-transparent pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#ff6b35]/10 border border-[#ff6b35]/30 rounded-full mb-6">
            <span className="text-sm text-[#ff6b35] font-medium">Nossos Serviços</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Soluções Completas para{' '}
            <span className="gradient-text">Impulsionar</span> seu Negócio
          </h2>
          <p className="text-gray-400 text-lg">
            Oferecemos um ecossistema integrado de serviços de marketing digital, 
            todos focados em um único objetivo: <strong className="text-white">aumentar suas vendas</strong>.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              image={service.image}
              title={service.title}
              subtitle={service.subtitle}
              description={service.description}
              features={service.features}
              delay={index * 100}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className={`mt-16 text-center transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-gray-400 mb-6">
            Não sabe qual serviço precisa?{' '}
            <span className="text-white font-medium">Fale conosco</span> e faremos um diagnóstico gratuito.
          </p>
          <a href="#contato" className="btn-primary inline-flex items-center gap-2">
            Quero uma Consultoria Gratuita
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}

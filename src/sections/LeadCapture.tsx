import { useEffect, useRef, useState } from 'react';
import { Send, Check, Loader2, Phone, Mail, Building, User, TrendingUp, Zap, Shield } from 'lucide-react';
import { toast } from 'sonner';

export function LeadCapture() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    segment: '',
    challenge: '',
  });

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulação de envio
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast.success('Proposta solicitada com sucesso! Entraremos em contato em breve.');
  };

  const benefits = [
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: 'Análise Completa',
      description: 'Diagnóstico gratuito da sua presença digital',
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: 'Proposta em 24h',
      description: 'Receba sua proposta personalizada rapidamente',
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: 'Sem Compromisso',
      description: 'Análise 100% gratuita e sem obrigação',
    },
  ];

  if (isSubmitted) {
    return (
      <section
        id="contato"
        ref={sectionRef}
        className="section-padding bg-[#0a1628] relative overflow-hidden"
      >
        <div className="container-custom relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-12 border border-white/10">
              <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                <Check className="w-10 h-10 text-green-400" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Solicitação Enviada!</h2>
              <p className="text-gray-400 mb-8">
                Obrigado pelo interesse, <strong className="text-white">{formData.name}</strong>! 
                Nossa equipe analisará suas informações e entrará em contato em até{' '}
                <strong className="text-[#ff6b35]">24 horas úteis</strong>.
              </p>
              <div className="p-4 bg-[#ff6b35]/10 border border-[#ff6b35]/30 rounded-lg">
                <p className="text-sm text-[#ff6b35]">
                  📧 Confira seu e-mail ({formData.email}) para mais informações.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="contato"
      ref={sectionRef}
      className="section-padding bg-[#0a1628] relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#ff6b35]/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Content */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#ff6b35]/10 border border-[#ff6b35]/30 rounded-full mb-6">
              <span className="text-sm text-[#ff6b35] font-medium">Comece Agora</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Pronto para{' '}
              <span className="gradient-text">Transformar</span> seu Negócio?
            </h2>

            <p className="text-lg text-gray-400 mb-8">
              Preencha o formulário e receba uma{' '}
              <strong className="text-white">proposta personalizada</strong> para o seu negócio. 
              Nossa equipe de especialistas analisará seu caso e apresentará a melhor estratégia.
            </p>

            {/* Benefits */}
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#ff6b35]/10 flex items-center justify-center text-[#ff6b35] flex-shrink-0">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{benefit.title}</h4>
                    <p className="text-sm text-gray-400">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust indicators */}
            <div className="mt-8 flex items-center gap-6">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-[#ff6b35] to-[#ffb347] border-2 border-[#0a1628]"
                  />
                ))}
              </div>
              <p className="text-sm text-gray-400">
                <span className="text-white font-semibold">+150 empresas</span> já confiaram em nós
              </p>
            </div>
          </div>

          {/* Right - Form */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-[#ff6b35]/20 rounded-3xl blur-2xl" />

              <form
                onSubmit={handleSubmit}
                className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10"
              >
                <h3 className="text-xl font-bold mb-6">Solicite sua Proposta</h3>

                <div className="space-y-4">
                  {/* Name */}
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Nome completo *</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Seu nome"
                        className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#ff6b35] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">E-mail *</label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="seu@email.com"
                          className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#ff6b35] transition-colors"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">WhatsApp *</label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          placeholder="(11) 99999-9999"
                          className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#ff6b35] transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Company */}
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Nome da empresa *</label>
                    <div className="relative">
                      <Building className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        placeholder="Sua empresa"
                        className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#ff6b35] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Segment */}
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Segmento *</label>
                    <select
                      name="segment"
                      value={formData.segment}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#ff6b35] transition-colors appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-[#0a1628]">Selecione seu segmento</option>
                      <option value="varejo" className="bg-[#0a1628]">Varejo</option>
                      <option value="servicos" className="bg-[#0a1628]">Serviços</option>
                      <option value="industria" className="bg-[#0a1628]">Indústria</option>
                      <option value="tech" className="bg-[#0a1628]">Tecnologia</option>
                      <option value="saude" className="bg-[#0a1628]">Saúde & Bem-estar</option>
                      <option value="alimentacao" className="bg-[#0a1628]">Alimentação</option>
                      <option value="outro" className="bg-[#0a1628]">Outro</option>
                    </select>
                  </div>

                  {/* Challenge */}
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">
                      Qual seu maior desafio hoje?
                    </label>
                    <textarea
                      name="challenge"
                      value={formData.challenge}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Conte-nos um pouco sobre seus desafios..."
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#ff6b35] transition-colors resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        Quero Receber Minha Proposta
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>

                  {/* Privacy note */}
                  <p className="text-center text-xs text-gray-500">
                    🔒 Seus dados estão 100% seguros. Nunca compartilhamos suas informações.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

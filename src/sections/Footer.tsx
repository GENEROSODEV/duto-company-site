import { Mail, Phone, MapPin, Instagram, Linkedin, Facebook, Youtube, ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = {
    servicos: [
      { name: 'Postagem + Cadência', href: '#servicos' },
      { name: 'Vídeos e Edições', href: '#servicos' },
      { name: 'Inteligência Artificial', href: '#servicos' },
      { name: 'Desenvolvimento de Produtos', href: '#servicos' },
    ],
    empresa: [
      { name: 'Quem Somos', href: '#quem-somos' },
      { name: 'Depoimentos', href: '#depoimentos' },
      { name: 'Cases de Sucesso', href: '#depoimentos' },
      { name: 'Blog', href: '#' },
    ],
    suporte: [
      { name: 'FAQ', href: '#' },
      { name: 'Política de Privacidade', href: '#' },
      { name: 'Termos de Uso', href: '#' },
      { name: 'Contato', href: '#contato' },
    ],
  };

  const socialLinks = [
    { icon: <Instagram className="w-5 h-5" />, href: 'https://instagram.com/dutodigital', label: 'Instagram' },
    { icon: <Linkedin className="w-5 h-5" />, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <Facebook className="w-5 h-5" />, href: 'https://facebook.com', label: 'Facebook' },
    { icon: <Youtube className="w-5 h-5" />, href: 'https://youtube.com', label: 'YouTube' },
  ];

  return (
    <footer className="bg-[#050d18] border-t border-white/5">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="#inicio" className="inline-block mb-6">
              <img
                src="logo-duto.png"
                alt="DUTO COMPANY"
                className="h-16 w-auto"
              />
            </a>
            <p className="text-gray-400 mb-6 max-w-sm">
              Transformamos pequenos e médios negócios em máquinas de vendas através de 
              estratégias digitais inovadoras e resultados mensuráveis.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="mailto:contato@dutocompany.com"
                className="flex items-center gap-3 text-gray-400 hover:text-[#ff6b35] transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>contato@dutocompany.com</span>
              </a>
              <a
                href="https://wa.me/553199946-8275"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-[#ff6b35] transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>(31) 99946-8275</span>
              </a>
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin className="w-5 h-5" />
                <span>Belo Horizonte, MG - Brasil</span>
              </div>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Serviços</h4>
            <ul className="space-y-3">
              {footerLinks.servicos.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#ff6b35] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#ff6b35] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Suporte</h4>
            <ul className="space-y-3">
              {footerLinks.suporte.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#ff6b35] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-gray-500 text-sm text-center md:text-left">
              © {currentYear} DUTO Company. Todos os direitos reservados.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#ff6b35] hover:border-[#ff6b35] transition-all"
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-gray-400 hover:text-[#ff6b35] transition-colors"
            >
              <span className="text-sm">Voltar ao topo</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

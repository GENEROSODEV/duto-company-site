import { useEffect, useRef, useState } from 'react';
import { TrendingUp, Users, DollarSign, Award } from 'lucide-react';

interface StatItemProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  suffix?: string;
  delay: number;
}

function StatItem({ icon, value, label, suffix = '', delay }: StatItemProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const numericValue = parseInt(value.replace(/\D/g, ''));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const timer = setTimeout(() => {
      const duration = 2000;
      const steps = 60;
      const increment = numericValue / steps;
      let current = 0;

      const interval = setInterval(() => {
        current += increment;
        if (current >= numericValue) {
          setCount(numericValue);
          clearInterval(interval);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timer);
  }, [isVisible, numericValue, delay]);

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(0) + 'M';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(0) + 'K';
    }
    return num.toString();
  };

  return (
    <div
      ref={ref}
      className={`text-center p-6 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#ff6b35]/10 mb-4">
        {icon}
      </div>
      <div className="text-4xl sm:text-5xl font-bold gradient-text mb-2">
        {formatNumber(count)}{suffix}
      </div>
      <p className="text-gray-400">{label}</p>
    </div>
  );
}

export function Stats() {
  const stats = [
    {
      icon: <DollarSign className="w-8 h-8 text-[#ff6b35]" />,
      value: '70000000',
      label: 'Faturados em 2025',
      suffix: '+',
    },
    {
      icon: <Users className="w-8 h-8 text-[#ff6b35]" />,
      value: '150',
      label: 'Clientes Atendidos',
      suffix: '+',
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-[#ff6b35]" />,
      value: '300',
      label: 'Média de ROI',
      suffix: '%',
    },
    {
      icon: <Award className="w-8 h-8 text-[#ff6b35]" />,
      value: '98',
      label: 'Taxa de Satisfação',
      suffix: '%',
    },
  ];

  return (
    <section className="py-16 bg-[#0a1628] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#ff6b35]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#ff6b35]/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

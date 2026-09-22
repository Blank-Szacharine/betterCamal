import { ArrowRight, MapPin, PhoneCall, Siren } from 'lucide-react';
import { Link } from 'react-router';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#17324d] text-white">
      <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(23,50,77,0.98)_15%,rgba(23,50,77,0.82)_52%,rgba(23,50,77,0.3)),url('https://camalaniugan.gov.ph/wp-content/uploads/2025/02/1-3-500x281.jpg')] bg-cover bg-center" />
      <div className="relative container mx-auto px-4 py-20 md:py-28">
        <div className="max-w-3xl animate-fade-in">
          <div className="mb-6 flex items-center gap-2 text-sm font-semibold text-[#e3b35a]">
            <MapPin className="h-4 w-4" /> Cagayan, Philippines
          </div>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.24em] text-white/75">
            Municipality of Camalaniugan
          </p>
          <h1 className="max-w-2xl font-serif text-5xl font-bold leading-[0.98] tracking-tight md:text-7xl">
            Where the <span className="text-[#e3b35a]">BEST</span> begins.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-[#e5edf2] md:text-xl">
            A progressive agri-commercial and eco-cultural tourism center in
            Northern Cagayan, committed to quality of life, sustainable
            livelihood, and transparent public service.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-full bg-[#e3b35a] px-6 py-3 font-bold text-[#17324d] transition hover:bg-white"
            >
              Find a service <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="#updates"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 font-semibold text-white transition hover:border-white hover:bg-white/10"
            >
              Latest updates
            </a>
            <a
              href="#emergency"
              className="inline-flex items-center gap-2 rounded-full border border-[#f0b7a7] px-6 py-3 font-semibold text-[#ffe4dc] transition hover:border-white hover:bg-white/10"
            >
              <Siren className="h-4 w-4" /> Emergency hotlines
            </a>
          </div>
          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/20 pt-5 text-sm text-[#d5e1e8]">
            <span className="inline-flex items-center gap-2">
              <PhoneCall className="h-4 w-4 text-[#e3b35a]" /> 0917 872 8794
            </span>
            <span>camalaniuganbestbegins@gmail.com</span>
          </div>
        </div>
      </div>
    </section>
  );
}

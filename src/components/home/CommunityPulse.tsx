import {
  ArrowUpRight,
  BellRing,
  CalendarDays,
  HeartPulse,
  Landmark,
  PhoneCall,
  Sprout,
} from 'lucide-react';
import { Link } from 'react-router';

const highlights = [
  {
    icon: Sprout,
    label: 'Agri-commercial growth',
    text: 'Supporting farmers, local enterprise, and livelihoods across Camalaniugan.',
    tone: 'bg-[#e8f3df] text-[#35622b]',
  },
  {
    icon: Landmark,
    label: 'Good governance',
    text: 'Transparent programs, public information, and services that reach every barangay.',
    tone: 'bg-[#e7eff8] text-[#1f4f78]',
  },
  {
    icon: HeartPulse,
    label: 'A resilient community',
    text: 'Working toward a climate change-adaptive, disaster-resilient, and balanced environment for every Camalaniugeño.',
    tone: 'bg-[#fff0d8] text-[#925e16]',
  },
];

export default function CommunityPulse() {
  return (
    <>
      <section className="bg-[#f5f1e9] py-16 md:py-20" id="about">
        <div className="container mx-auto px-4">
          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[#c26b30]">
                The Camalaniugan promise
              </p>
              <h2 className="max-w-2xl font-serif text-3xl font-bold leading-tight text-[#17324d] md:text-5xl">
                The heart of Northern Cagayan.
              </h2>
            </div>
            <Link
              to="/government/departments"
              className="inline-flex items-center gap-2 font-semibold text-[#1f4f78] hover:text-[#c26b30]"
            >
              Meet the local government <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {highlights.map(({ icon: Icon, label, text, tone }) => (
              <article
                key={label}
                className="border-t-4 border-[#e3b35a] bg-white p-6 shadow-[0_14px_40px_rgba(23,50,77,0.06)]"
              >
                <div
                  className={`mb-6 flex h-11 w-11 items-center justify-center rounded-full ${tone}`}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-[#17324d]">
                  {label}
                </h3>
                <p className="text-sm leading-7 text-[#596575]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#17324d] py-14 text-white" id="updates">
        <div className="container mx-auto grid gap-10 px-4 lg:grid-cols-[1fr_1.4fr] lg:items-center">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[#e3b35a]">
              From the municipality
            </p>
            <h2 className="mb-4 font-serif text-3xl font-bold md:text-4xl">
              What’s happening in Camalaniugan
            </h2>
            <p className="max-w-md leading-7 text-[#c8d5df]">
              Follow verified programs, recognitions, opportunities, and
              community stories from the official Camalaniugan Public
              Information Service.
            </p>
            <a
              href="https://www.facebook.com/profile.php?id=61571001161472"
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#e3b35a] px-5 py-3 text-sm font-bold text-[#17324d] transition hover:bg-white"
            >
              Visit public information service{' '}
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
          <div className="grid gap-3 sm:grid-cols-3" id="emergency">
            <div className="border border-white/15 bg-white/10 p-5">
              <CalendarDays className="mb-8 h-5 w-5 text-[#e3b35a]" />
              <p className="text-xs uppercase tracking-wider text-[#aebfca]">
                Coming up
              </p>
              <p className="mt-2 font-bold">Local & overseas job fair</p>
              <p className="mt-1 text-sm text-[#c8d5df]">August 17, 2026</p>
            </div>
            <div className="border border-white/15 bg-white/10 p-5">
              <BellRing className="mb-8 h-5 w-5 text-[#e3b35a]" />
              <p className="text-xs uppercase tracking-wider text-[#aebfca]">
                Latest recognition
              </p>
              <p className="mt-2 font-bold">
                2025 Good Financial Housekeeping passer
              </p>
            </div>
            <div className="border border-white/15 bg-white/10 p-5">
              <PhoneCall className="mb-8 h-5 w-5 text-[#e3b35a]" />
              <p className="text-xs uppercase tracking-wider text-[#aebfca]">
                Emergency
              </p>
              <p className="mt-2 font-bold">Rescue: 0967 526 0473</p>
              <p className="mt-1 text-sm text-[#c8d5df]">BFP · 0917 119 9139</p>
              <p className="mt-1 text-sm text-[#c8d5df]">PNP · 0917 514 6905</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

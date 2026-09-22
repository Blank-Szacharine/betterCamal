import { ArrowUpRight } from 'lucide-react';

const posts = [
  {
    title: 'Camalaniugan Fluvial Parade',
    excerpt:
      'A celebration of the town’s rich cultural heritage, faith, unity, and tradition along the Cagayan River.',
    image: '/images/news/fluvial-parade.jpg',
  },
  {
    title: 'Local & Overseas Job Fair and Government Service Caravan 2026',
    excerpt:
      'Jobseekers, graduates, skilled workers, and professionals are invited to the job fair and government service caravan on August 17, 2026.',
    image: '/images/news/job-fair.png',
  },
  {
    title: 'Turnover of Office Ceremony',
    excerpt:
      'Camalaniugan welcomes its new Acting Chief of Police, PMAJ Reymond C. Calubaquib.',
    image: '/images/news/turnover-ceremony.png',
  },
  {
    title: 'Welcome Program at Northern Camalaniugan National High School',
    excerpt: 'A welcome program for Ma’am Jonah Joyce R. Urbi at NCNHS.',
    image: '/images/news/welcome-program.png',
  },
  {
    title: 'NExpedition Tourism Circuit Site Assessment',
    excerpt:
      'The Endless Fun Cagayan tourism circuit site assessment visits Camalaniugan.',
    image: '/images/news/tourism-assessment.png',
  },
];

const announcements = [
  {
    title: '2025 Good Financial Housekeeping Passer',
    text: 'Camalaniugan is recognized for its continued commitment to transparency, accountability, and good governance.',
  },
  {
    title: 'Cagayan Science High School Launch',
    text: 'The official launch brings quality science education and new opportunities closer to Camalaniugan youth.',
  },
  {
    title: 'SPES Program Completion',
    text: 'Student beneficiaries completed 20 days of public service through the Special Program for the Employment of Students.',
  },
];

export default function NewsSection() {
  return (
    <section className="bg-[#f5f1e9] py-16 md:py-20" id="updates">
      <div className="container mx-auto px-4">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[#c26b30]">
              From the municipality
            </p>
            <h2 className="font-serif text-3xl font-bold leading-tight text-[#17324d] md:text-5xl">
              Latest news and updates
            </h2>
          </div>
          <a
            href="https://camalaniugan.gov.ph/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 font-semibold text-[#1f4f78] hover:text-[#c26b30]"
          >
            View all updates <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map(post => (
            <article
              key={post.title}
              className="overflow-hidden bg-white shadow-[0_14px_40px_rgba(23,50,77,0.08)]"
            >
              <img
                src={post.image}
                alt=""
                className="aspect-[16/10] w-full object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold leading-snug text-[#17324d]">
                  {post.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#596575]">
                  {post.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 border-t border-[#d9d1c3] pt-10">
          <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
            <h3 className="font-serif text-2xl font-bold text-[#17324d]">
              More official announcements
            </h3>
            <p className="text-sm text-[#596575]">
              Programs, recognitions, and community updates
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {announcements.map((announcement, index) => (
              <article
                key={announcement.title}
                className="border-l-4 border-[#e3b35a] bg-white p-6 shadow-[0_10px_30px_rgba(23,50,77,0.06)]"
              >
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#c26b30]">
                  Update {String(index + 1).padStart(2, '0')}
                </p>
                <h4 className="mt-3 text-lg font-bold leading-snug text-[#17324d]">
                  {announcement.title}
                </h4>
                <p className="mt-3 text-sm leading-7 text-[#596575]">
                  {announcement.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

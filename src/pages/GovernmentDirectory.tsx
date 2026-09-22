import { ChevronRight, MapPinned, UsersRound } from 'lucide-react';
import { Link, useParams } from 'react-router';
import Section from '../components/ui/Section';
import SEO from '../components/SEO';
import { barangays, municipalOfficials } from '../data/governmentDirectory';

function PersonCard({ name, role }: { name: string; role: string }) {
  return (
    <div className="rounded-xl border border-[#d8e2e8] bg-white px-4 py-3 text-center shadow-sm">
      <p className="text-xs font-bold uppercase tracking-wider text-[#c26b30]">
        {role}
      </p>
      <p className="mt-1 font-semibold text-[#17324d]">{name}</p>
    </div>
  );
}

function MunicipalOfficials() {
  return (
    <>
      <SEO
        title="Municipal Officials"
        description="Elected officials of the Municipality of Camalaniugan."
      />
      <Section className="bg-[#f5f1e9]">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#c26b30]">
            Municipality of Camalaniugan
          </p>
          <h1 className="mt-3 font-serif text-4xl font-bold text-[#17324d] md:text-5xl">
            Municipal officials
          </h1>
          <p className="mt-4 max-w-2xl text-[#596575]">
            A view of the elected municipal leadership and the Sangguniang
            Bayan.
          </p>

          <div className="mt-10 text-center">
            <div className="mx-auto max-w-xs rounded-2xl bg-[#17324d] p-1 shadow-lg">
              <PersonCard
                name={municipalOfficials.mayor}
                role="Municipal Mayor"
              />
            </div>
            <div className="mx-auto h-8 w-px bg-[#9bb2c0]" />
            <div className="mx-auto max-w-xs rounded-2xl border-2 border-[#e3b35a] bg-[#fffaf0] p-1 shadow-sm">
              <PersonCard
                name={municipalOfficials.viceMayor}
                role="Municipal Vice Mayor"
              />
            </div>
            <div className="mx-auto h-8 w-px bg-[#9bb2c0]" />
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#596575]">
              Sangguniang Bayan members
            </p>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {municipalOfficials.councilors.map(councilor => (
                <PersonCard key={councilor} name={councilor} role="SB Member" />
              ))}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

function BarangayHierarchy() {
  const { barangaySlug } = useParams();
  const barangay = barangays.find(item => item.slug === barangaySlug);

  if (!barangay) {
    return (
      <Section>
        <h1 className="text-2xl font-bold text-[#17324d]">
          Barangay not found
        </h1>
        <Link
          className="mt-4 inline-block text-primary-600"
          to="/government/barangays"
        >
          Back to barangays
        </Link>
      </Section>
    );
  }

  const roles = [
    'Sangguniang Barangay Members',
    'Barangay Secretary',
    'Barangay Treasurer',
    'SK Chairperson',
  ];
  return (
    <>
      <SEO
        title={`${barangay.name} Barangay Officials`}
        description={`Barangay leadership hierarchy for ${barangay.name}, Camalaniugan.`}
      />
      <Section className="bg-[#f5f1e9]">
        <div className="mx-auto max-w-5xl">
          <Link
            to="/government/barangays"
            className="inline-flex items-center gap-1 text-sm font-semibold text-[#1f4f78] hover:text-[#c26b30]"
          >
            Barangays <ChevronRight className="h-4 w-4" /> {barangay.name}
          </Link>
          <p className="mt-7 text-xs font-bold uppercase tracking-[0.22em] text-[#c26b30]">
            {barangay.classification} barangay
          </p>
          <h1 className="mt-3 font-serif text-4xl font-bold text-[#17324d]">
            Barangay {barangay.name}
          </h1>
          <p className="mt-4 max-w-2xl text-[#596575]">
            Barangay leadership hierarchy. Individual names will appear here
            once verified by the barangay office.
          </p>

          <div className="mt-10 text-center">
            <div className="mx-auto max-w-sm rounded-2xl bg-[#17324d] p-1 shadow-lg">
              <PersonCard
                name="Official record pending verification"
                role="Punong Barangay"
              />
            </div>
            <div className="mx-auto h-8 w-px bg-[#9bb2c0]" />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {roles.map(role => (
                <PersonCard
                  key={role}
                  name="Official record pending verification"
                  role={role}
                />
              ))}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

export function BarangayDirectory() {
  const urban = barangays.filter(
    barangay => barangay.classification === 'Urban core'
  );
  const rural = barangays.filter(
    barangay => barangay.classification === 'Rural'
  );
  const group = (title: string, items: typeof barangays) => (
    <div className="mt-10">
      <h2 className="text-xl font-bold text-[#17324d]">{title}</h2>
      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {items.map(barangay => (
          <Link
            key={barangay.slug}
            to={`/government/barangays/${barangay.slug}`}
            className="group flex items-center justify-between rounded-xl border border-[#d8e2e8] bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-[#e3b35a] hover:shadow-md"
          >
            <span className="font-bold text-[#17324d]">{barangay.name}</span>
            <ChevronRight className="h-5 w-5 text-[#c26b30] transition group-hover:translate-x-1" />
          </Link>
        ))}
      </div>
    </div>
  );
  return (
    <>
      <SEO
        title="Barangays"
        description="Directory of the 28 barangays of Camalaniugan."
      />
      <Section className="bg-[#f5f1e9]">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#c26b30]">
            Municipality of Camalaniugan
          </p>
          <h1 className="mt-3 font-serif text-4xl font-bold text-[#17324d] md:text-5xl">
            Barangays
          </h1>
          <p className="mt-4 max-w-2xl text-[#596575]">
            Select a barangay to view its local government hierarchy.
          </p>
          {group('Urban core barangays', urban)}
          {group('Rural barangays', rural)}
        </div>
      </Section>
    </>
  );
}

export function GovernmentLanding() {
  return (
    <Section className="bg-[#f5f1e9]">
      <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
        <Link
          to="/government/officials"
          className="rounded-2xl bg-[#17324d] p-8 text-white shadow-lg"
        >
          <UsersRound className="h-9 w-9 text-[#e3b35a]" />
          <h1 className="mt-6 font-serif text-3xl font-bold">Officials</h1>
          <p className="mt-3 text-[#c8d5df]">
            View the municipal leadership hierarchy.
          </p>
        </Link>
        <Link
          to="/government/barangays"
          className="rounded-2xl bg-white p-8 text-[#17324d] shadow-lg"
        >
          <MapPinned className="h-9 w-9 text-[#c26b30]" />
          <h1 className="mt-6 font-serif text-3xl font-bold">Barangays</h1>
          <p className="mt-3 text-[#596575]">
            Browse all 28 barangays and their leadership structures.
          </p>
        </Link>
      </div>
    </Section>
  );
}

export { MunicipalOfficials, BarangayHierarchy };

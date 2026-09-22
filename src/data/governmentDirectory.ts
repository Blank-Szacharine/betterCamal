export const municipalOfficials = {
  mayor: 'Hon. Isidro T. Cabaddu',
  viceMayor: 'Hon. Jamuel Rosario',
  councilors: [
    'Hon. Leezel A. Rosario',
    'Hon. Dante B. Canillo',
    'Hon. Milagros C. Libatique',
    'Hon. Roberto S. Alariao',
    'Hon. Hilda B. Littaua',
    'Hon. Edison B. Tollo',
    'Hon. Francis M. Teaño',
    'Hon. Hermogenes U. Lorenzo',
  ],
};

export interface Barangay {
  name: string;
  slug: string;
  classification: 'Urban core' | 'Rural';
}

export const barangays: Barangay[] = [
  { name: 'Agusi', slug: 'agusi', classification: 'Urban core' },
  { name: 'Bulala', slug: 'bulala', classification: 'Urban core' },
  { name: 'Centro Norte', slug: 'centro-norte', classification: 'Urban core' },
  { name: 'Centro Sur', slug: 'centro-sur', classification: 'Urban core' },
  {
    name: 'Dacal-la Fugu',
    slug: 'dacal-la-fugu',
    classification: 'Urban core',
  },
  { name: 'Dugo', slug: 'dugo', classification: 'Urban core' },
  { name: 'Sapping', slug: 'sapping', classification: 'Urban core' },
  { name: 'Abagao', slug: 'abagao', classification: 'Rural' },
  { name: 'Afunan-Cabayu', slug: 'afunan-cabayu', classification: 'Rural' },
  { name: 'Alilinu', slug: 'alilinu', classification: 'Rural' },
  { name: 'Baggao', slug: 'baggao', classification: 'Rural' },
  { name: 'Bantay', slug: 'bantay', classification: 'Rural' },
  { name: 'Casili', slug: 'casili', classification: 'Rural' },
  { name: 'Catotoran Norte', slug: 'catotoran-norte', classification: 'Rural' },
  { name: 'Catotoran Sur', slug: 'catotoran-sur', classification: 'Rural' },
  { name: 'Cullit', slug: 'cullit', classification: 'Rural' },
  { name: 'Felipe Tuzon', slug: 'felipe-tuzon', classification: 'Rural' },
  { name: 'Fusina', slug: 'fusina', classification: 'Rural' },
  {
    name: 'Gen. Eduardo Batalla',
    slug: 'gen-eduardo-batalla',
    classification: 'Rural',
  },
  {
    name: 'Joaquin dela Cruz',
    slug: 'joaquin-dela-cruz',
    classification: 'Rural',
  },
  {
    name: 'Julian Olivas Sr.',
    slug: 'julian-olivas-sr',
    classification: 'Rural',
  },
  { name: 'Jurisdiccion', slug: 'jurisdiccion', classification: 'Rural' },
  { name: 'Luec', slug: 'luec', classification: 'Rural' },
  { name: 'Minanga', slug: 'minanga', classification: 'Rural' },
  { name: 'Paragat', slug: 'paragat', classification: 'Rural' },
  { name: 'Tagum', slug: 'tagum', classification: 'Rural' },
  { name: 'Tullutuging', slug: 'tullutuging', classification: 'Rural' },
  { name: 'Ziminila', slug: 'ziminila', classification: 'Rural' },
];

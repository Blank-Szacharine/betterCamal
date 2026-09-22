import type { NavigationItem } from '../types';
import { serviceCategories as servicesData } from './yamlLoader';

interface Subcategory {
  name: string;
  slug: string;
}

interface Category {
  category: string;
  slug: string;
  subcategories: Subcategory[];
}

export const mainNavigation: NavigationItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Services',
    href: '/services',
    children: (servicesData.categories as Category[]).map(category => ({
      label: category.category,
      href: `/services/${category.slug}`,
    })),
  },
  {
    label: 'Government',
    href: '/government/departments',
  },
  { label: 'Updates', href: '/#updates' },
  { label: 'About Camalaniugan', href: '/#about' },
];

export const footerNavigation = {
  mainSections: [
    {
      title: 'About',
      links: [
        { label: 'Municipal Profile', href: '/#about' },
        // { label: 'Privacy Policy', href: '/privacy' },
        // { label: 'Terms of Use', href: '/terms' },
        { label: 'Accessibility', href: '/accessibility' },
        { label: 'Contact Us', href: '/#contact' },
        { label: 'Emergency Hotlines', href: '/#emergency' },
      ],
    },
    {
      title: 'Services',
      links: [
        { label: 'All Services', href: '/services' },
        ...(servicesData.categories as Category[])
          .slice(0, 6)
          .map(category => ({
            label: category.category,
            href: `/services/${category.slug}`,
          })),
        { label: 'Emergency Hotlines', href: '/#emergency' },
      ],
    },
    {
      title: 'Government',
      links: [
        { label: "Citizen's Charter", href: '/government/departments' },
        { label: 'Bids and Awards', href: '/government/departments' },
        { label: 'Freedom of Information', href: 'https://www.foi.gov.ph' },
      ],
    },
  ],
  socialLinks: [
    {
      label: 'Facebook',
      href: 'https://www.facebook.com/profile.php?id=61571001161472',
    },
  ],
};

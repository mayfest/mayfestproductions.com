interface NavigationItem {
  name: string;
  href: string;
}

export const navigation: NavigationItem[] = [
  { name: 'ABOUT', href: '#about' },
  { name: 'UPCOMING EVENTS', href: '#upcoming-events' },
  { name: 'JOIN THE BAND', href: '#join-the-band' },
  { name: 'RESOURCES', href: '#resources' },
  { name: 'PARTNERS', href: '#partners' },
  // { name: 'SUPPORT', href: 'https://support.dilloday.com' },
];

export function getHrefProps(href: string) {
  const isExternal = href.startsWith('https://') || href.startsWith('http://');
  return {
    href,
    target: isExternal ? '_blank' : undefined,
    rel: isExternal ? 'noreferrer' : undefined,
  };
}
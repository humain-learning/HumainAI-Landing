/** Brand tokens — Sage, Terracotta, Charcoal, White, Grey only */
export const sp = {
  section: 'border-b border-grey',
  sectionAlt: 'bg-white',
  sectionWhite: 'bg-white',
  card: 'rounded-2xl border border-grey bg-white shadow-sm',
  cardAlt: 'rounded-2xl border border-grey bg-white shadow-sm',
  cardHover:
    'transition-all duration-300 hover:-translate-y-1 hover:border-sage/50 hover:shadow-md hover:shadow-sage/10',
  headingAccent: 'text-sage',
  label: 'font-display text-sm font-bold uppercase tracking-wider text-sage',
  link: 'inline-flex items-center font-semibold text-sage transition-colors hover:text-terracotta group',
  tableHead: 'border-b border-grey bg-white',
  tableRow: 'border-b border-grey last:border-none transition-colors hover:bg-sage/10',
} as const;

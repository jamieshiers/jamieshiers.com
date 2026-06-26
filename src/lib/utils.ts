/**
 * Maps a category name to a CSS slug used for tag colour classes.
 * e.g. "Cyber Essentials" → "cyber", "AS9100D" → "as9100d"
 */
export function categorySlug(category: string): string {
  const map: Record<string, string> = {
    'Cyber Essentials': 'cyber',
    'AS9100D':          'as9100d',
    'Operations':       'ops',
    'Technology':       'tech',
  };
  return map[category] ?? category.toLowerCase().replace(/\s+/g, '-');
}

/**
 * Formats a Date as "Jun 2026"
 */
export function shortDate(date: Date): string {
  return date.toLocaleDateString('en-GB', { month: 'short', year: 'numeric' });
}

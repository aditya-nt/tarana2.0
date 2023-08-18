export function getTheme() {
  return localStorage.getItem('THEME');
}

export function storeTheme(theme: string) {
  return localStorage.setItem('THEME', theme);
}

export function truncateText(text: string, maxLength: number): string {
  return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
}

export type UnsafeHtmlSymbol = '&' | '<' | '>' | '"' | "'";

export default function escapeHtml(str: string) {
  const escapeMap: Record<UnsafeHtmlSymbol, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };

  return str.replace(
    /[&<>"']/g,
    (match) => escapeMap[match as UnsafeHtmlSymbol]
  );
}

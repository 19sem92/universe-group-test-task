export function formatDateTime(iso: string): string {
    const date = new Date(iso);
    return date.toLocaleString('uk-UA', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    }).replace(',', '');
  }
  
  export function truncateText(text: string, maxLength = 20): string {
    return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
  }
  
export function getReadingStats(content: string) {
  // Strip HTML tags and markdown syntax
  const cleanText = content
    .replace(/<[^>]*>/g, '')
    .replace(/[#*_~`]/g, '')
    .trim();

  // Count words (including French accents)
  const words = cleanText.match(/[\w\u00C0-\u017F]+/g)?.length || 0;
  
  // Average reading speed (words per minute)
  const WORDS_PER_MINUTE = 225;
  
  // Calculate reading time in minutes, round up to nearest minute
  const minutes = Math.ceil(words / WORDS_PER_MINUTE);
  
  return {
    words,
    minutes,
    // Format word count with French thousands separator
    formattedWords: words.toLocaleString('fr-FR'),
    // Format reading time in French
    formattedTime: `${minutes} min de lecture`
  };
} 
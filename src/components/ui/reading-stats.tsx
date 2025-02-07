import { getReadingStats } from '@/lib/readingStats';

interface ReadingStatsProps {
  content: string;
}

export function ReadingStats({ content }: ReadingStatsProps) {
  const { formattedWords, minutes } = getReadingStats(content);
  
  return (
    <>
      <span className="text-primary text-muted-foreground/50">•</span>
      <span>{minutes} min ({formattedWords} mots)</span>
    </>
  );
} 
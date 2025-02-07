import { getReadingStats } from '@/lib/readingStats';

interface ReadingStatsProps {
  content: string;
}

export function ReadingStats({ content }: ReadingStatsProps) {
  const { formattedWords, formattedTime } = getReadingStats(content);
  
  return (
    <>
      <span className="text-primary text-muted-foreground/50">•</span>
      <span>{formattedTime}</span>
      <span className="text-primary text-muted-foreground/50">•</span>
      <span>{formattedWords} mots</span>
    </>
  );
} 
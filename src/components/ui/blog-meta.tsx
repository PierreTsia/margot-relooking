import { Calendar } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from './avatar';
import { ReadingStats } from './reading-stats';

interface BlogMetaProps {
  author?: string;
  date: Date;
  showStats?: boolean;
  content?: string;
}

export function BlogMeta({ author, date, showStats = false, content = '' }: BlogMetaProps) {
  return (
    <div className="flex items-center gap-2.5 mt-2 text-xs text-muted-foreground/70">
      {author && (
        <>
          <Avatar className="h-4 w-4">
            <AvatarImage src="/images/blog/13690990_10154264610755941_4449575742935912085_o-ahr0chm6.jpg" alt={author} />
            <AvatarFallback className="bg-primary/5 text-primary text-xs font-medium">
              {author.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <span>{author}</span>
        </>
      )}
     <span className="text-primary text-muted-foreground/50">•</span>
      <time dateTime={date.toISOString()}>
        {new Date(date).toLocaleDateString('fr-FR', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      </time>
      {showStats && content && <ReadingStats content={content} />}
    </div>
  );
} 
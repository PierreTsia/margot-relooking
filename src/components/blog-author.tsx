import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'

interface BlogAuthorProps {
  author: string
  date: Date
}

export function BlogAuthor({ author, date }: BlogAuthorProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Avatar className="h-12 w-12">
          <AvatarImage src="/images/avatar.jpg" alt={author} />
          <AvatarFallback>
            {author.split(' ').map(word => word[0]).join('').toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <span className="font-medium text-muted-foreground/80 text-l uppercase tracking-wide">
            {author}
          </span>
        </div>
      </div>
      <time 
        className="font-medium text-muted-foreground/80 text-l uppercase tracking-wide" 
        dateTime={date.toISOString()}
      >
        {new Date(date).toLocaleDateString('fr-FR', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      </time>
    </div>
  )
} 
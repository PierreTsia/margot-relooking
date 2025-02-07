import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from './button';
import type { CollectionEntry } from 'astro:content';

interface ArticleNavigationProps {
  prevPost?: CollectionEntry<'blog'>;
  nextPost?: CollectionEntry<'blog'>;
  currentTags: string[] | undefined;
}

export function ArticleNavigation({ prevPost, nextPost, currentTags }: ArticleNavigationProps) {
  return (
    <nav className="mt-8 flex flex-col gap-4 border-t border-primary/5 pt-8 sm:flex-row sm:justify-between">
      {prevPost ? (
        <Button variant="ghost" className="group flex items-center gap-2" asChild>
          <a href={`/blog/${prevPost.slug}`}>
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            <span className="flex flex-col items-start">
              <span className="text-xs text-muted-foreground">Article précédent</span>
              <span className="text-sm">{prevPost.data.title}</span>
            </span>
          </a>
        </Button>
      ) : (
        <div />
      )}

      <Button variant="ghost" className="group" asChild>
        <a href="/blog" className="flex items-center gap-2">
          <span className="text-sm">Retour aux articles</span>
        </a>
      </Button>

      {nextPost ? (
        <Button variant="ghost" className="group flex items-center gap-2" asChild>
          <a href={`/blog/${nextPost.slug}`}>
            <span className="flex flex-col items-end">
              <span className="text-xs text-muted-foreground">Article suivant</span>
              <span className="text-sm">{nextPost.data.title}</span>
            </span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </Button>
      ) : (
        <div />
      )}
    </nav>
  );
} 
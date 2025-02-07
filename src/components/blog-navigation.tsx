import { Button } from '@/components/ui/button'
import { ArrowRight, ArrowLeft } from 'lucide-react'
import type { CollectionEntry } from 'astro:content'

interface BlogNavigationProps {
  prevPost?: CollectionEntry<'blog'>
  nextPost?: CollectionEntry<'blog'>
}

export function BlogNavigation({ prevPost, nextPost }: BlogNavigationProps) {
  return (
    <nav className="mt-8 flex flex-col gap-4 border-t border-primary/5 pt-8 sm:flex-row sm:justify-between min-w-full">
      {prevPost && (
        <a 
          href={`/blog/${prevPost.slug}`}
          className="flex flex-col gap-2 group text-decoration-none w-1/2 text-left" 
        > 
          <Button variant='outline' className='mr-auto'>
            <ArrowLeft className="h-5 w-5 transition-transform" />
          </Button>
          <span className="text-base font-medium line-clamp-1 group-hover:text-primary transition-colors">
            {prevPost.data.title}
          </span>
        </a>
      )}

      {nextPost && (
        <a 
          href={`/blog/${nextPost.slug}`}
          className="flex items-center justify-end flex-col gap-2 group" 
        > 
          <Button variant='outline' className='ml-auto'>
            <ArrowRight className="h-5 w-5 transition-transform" />
          </Button>
          <span className="text-base font-medium line-clamp-1 group-hover:text-primary transition-colors">  
            {nextPost.data.title}
          </span>
        </a>
      )}
    </nav>
  )
} 
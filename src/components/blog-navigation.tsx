import { Button } from '@/components/ui/button'
import { ArrowRight, BookOpen, ArrowLeft } from 'lucide-react'
import type { CollectionEntry } from 'astro:content'

interface BlogNavigationProps {
  prevPost?: CollectionEntry<'blog'>
  nextPost?: CollectionEntry<'blog'>
}

export function BlogNavigation({ prevPost, nextPost }: BlogNavigationProps) {
  return (
    <nav className="mt-8 flex flex-col gap-4 border-t border-primary/5 pt-8 sm:flex-row sm:justify-between">
      {/* Move all the navigation JSX here */}
    </nav>
  )
} 
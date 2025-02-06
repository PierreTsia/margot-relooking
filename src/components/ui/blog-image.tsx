import { cn } from '@/lib/utils';
import type { ImageMetadata } from 'astro';

interface BlogImageProps {
  src?: string;
  alt: string;
  className?: string;
}

const defaultImage = '/images/static/blog-placeholder.jpg';
const imageSize = {
  width: 1200,
  height: 675,
};

export function BlogImage({ src, alt, className }: BlogImageProps) {
  return (
    <div className={cn('aspect-[16/9] overflow-hidden rounded-t-lg', className)}>
      <picture>
        <source
          type="image/webp"
          srcSet={`${src || defaultImage}?w=400&format=webp 400w,
                  ${src || defaultImage}?w=800&format=webp 800w,
                  ${src || defaultImage}?w=1200&format=webp 1200w`}
          sizes="(max-width: 400px) 400px,
                 (max-width: 800px) 800px,
                 1200px"
        />
        <img
          src={src || defaultImage}
          alt={alt}
          className="h-full w-full object-cover transition-all hover:scale-105 duration-300 bg-muted/10"
          loading="lazy"
          width={imageSize.width}
          height={imageSize.height}
          decoding="async"
        />
      </picture>
    </div>
  );
} 
import type { ReactNode } from 'react'

interface BrandProps {
  name: string
  founder: string
  instagram: string
  description: string
}

function Brand({ name, founder, instagram, description }: BrandProps) {
  return (
    <div className="flex flex-col gap-3 p-6 rounded-lg border border-primary/10 hover:border-primary/20 transition-colors">
      <div className="flex items-center justify-between">
        <h3 className="font-display text-xl">{name}</h3>
        <a 
          href={`https://instagram.com/${instagram}`}
          target="_blank"
          rel="noopener noreferrer" 
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          @{instagram}
        </a>
      </div>
      <p className="text-sm text-muted-foreground">
        Fondé par <span className="font-medium">{founder}</span>
      </p>
      <p className="text-muted-foreground">{description}</p>
    </div>
  )
}

interface BrandShowcaseProps {
  children: ReactNode
}

export function BrandShowcase({ children }: BrandShowcaseProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 my-12">
      {children}
    </div>
  )
}

Brand.displayName = 'Brand'
BrandShowcase.displayName = 'BrandShowcase'

export { Brand } 
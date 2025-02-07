import { ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

export function ScrollIndicator() {
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const bottom = Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight;
      setIsAtBottom(bottom);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    document.getElementById('articles')?.scrollIntoView({ behavior: 'smooth' });
  };

  if (isAtBottom) return null;

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
      <ChevronDown 
        className="h-10 w-10 text-muted-foreground/50 hover:text-primary cursor-pointer transition-colors"
        onClick={handleClick}
      />
    </div>
  );
} 
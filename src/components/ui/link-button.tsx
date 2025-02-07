import { Button } from '@/components/ui/button';
import type { ButtonProps } from '@/components/ui/button';
import type { VariantProps } from 'class-variance-authority';

interface LinkButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: ButtonProps['variant'];
  size?: ButtonProps['size'];
  className?: string;
}

export function LinkButton({ href, children, ...props }: LinkButtonProps) {
  return (
    <Button asChild {...props}>
      <a href={href}>{children}</a>
    </Button>
  );
}

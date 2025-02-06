import { Button } from './button';
import type { ButtonProps, buttonVariants } from './button';
import type { VariantProps } from 'class-variance-authority';

interface LinkButtonProps
  extends React.ComponentPropsWithoutRef<'a'>,
    VariantProps<typeof buttonVariants> {
  href: string;
  children: React.ReactNode;
  variant?: VariantProps<typeof buttonVariants>['variant'];
  size?: VariantProps<typeof buttonVariants>['size'];
}

export function LinkButton({ href, children, ...props }: LinkButtonProps) {
  return (
    <Button asChild {...props}>
      <a href={href}>{children}</a>
    </Button>
  );
}

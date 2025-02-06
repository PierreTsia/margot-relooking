import * as React from 'react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';
import { Lock, LogOut, Settings } from 'lucide-react';
import { Button } from './ui/button';

interface NetlifyUser {
  email: string;
  app_metadata: {
    provider: string;
  };
  user_metadata: {
    avatar_url: string;
    full_name: string;
  };
}

const navItems = [
  { href: '/blog', label: 'Articles' },
  { href: '/a-propos', label: 'À propos' },
];

export function Header() {
  const [user, setUser] = useState<NetlifyUser | null>(null);

  const handleLogout = () => {
    (window as any).netlifyIdentity.logout();
  };

  useEffect(() => {
    const checkIdentity = setInterval(() => {
      if ((window as any).netlifyIdentity) {
        clearInterval(checkIdentity);

        (window as any).netlifyIdentity.on('init', (user: any) =>
          setUser(user)
        );
        (window as any).netlifyIdentity.on('login', (user: any) =>
          setUser(user)
        );
        (window as any).netlifyIdentity.on('logout', () => setUser(null));

        // Check current user
        const currentUser = (window as any).netlifyIdentity.currentUser();
        if (currentUser) {
          setUser(currentUser);
        }
      }
    }, 100);

    return () => clearInterval(checkIdentity);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-primary/10 bg-background/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-4">
        <a
          href="/"
          className="font-display text-xl text-primary transition-colors hover:text-primary/90"
        >
          Margot Relooking
        </a>

        <NavigationMenu>
          <NavigationMenuList>
            {navItems.map(({ href, label }) => (
              <NavigationMenuItem key={href}>
                <NavigationMenuLink
                  href={href}
                  className={cn(navigationMenuTriggerStyle(), 'bg-transparent')}
                >
                  {label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
            <NavigationMenuItem>
              {user ? (
                <div className="flex items-center gap-2">
                  <NavigationMenuLink
                    href="/admin"
                    className={cn(
                      navigationMenuTriggerStyle(),
                      'bg-transparent px-2'
                    )}
                  >
                    <Settings className="h-4 w-4" />
                  </NavigationMenuLink>
                  <NavigationMenuLink
                    className={cn(navigationMenuTriggerStyle(), 'bg-transparent px-2')}
                  >
                    <LogOut className="h-4 w-4" onClick={handleLogout} />
                  </NavigationMenuLink>
                </div>
              ) : (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => (window as any).netlifyIdentity.open()}
                >
                  <Lock className="h-4 w-4" />
                </Button>
              )}
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}

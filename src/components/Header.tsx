import * as React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const navItems = [
  { href: "/blog", label: "Articles" },
  { href: "/a-propos", label: "À propos" },
];

export function Header() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    if ((window as any).netlifyIdentity) {
      (window as any).netlifyIdentity.on("init", (user: any) => setUser(user));
      (window as any).netlifyIdentity.on("login", (user: any) => setUser(user));
      (window as any).netlifyIdentity.on("logout", () => setUser(null));
    }
  }, []);

  return (
    <header className="border-b border-primary/10 sticky top-0 bg-background/80 backdrop-blur-sm z-50">
      <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
        <a
          href="/"
          className="font-display text-xl text-primary hover:text-primary/90 transition-colors"
        >
          Margot Relooking
        </a>

        <NavigationMenu>
          <NavigationMenuList>
            {navItems.map(({ href, label }) => (
              <NavigationMenuItem key={href}>
                <NavigationMenuLink
                  href={href}
                  className={cn(navigationMenuTriggerStyle(), "bg-transparent")}
                >
                  {label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
            {user && (
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/admin"
                  className={cn(navigationMenuTriggerStyle(), "bg-transparent")}
                >
                  Admin
                </NavigationMenuLink>
              </NavigationMenuItem>
            )}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}

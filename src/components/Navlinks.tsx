"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
// import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Women",
    href: "#",
    description:
      "A link to connect with every accessibility for women at one click",
  },
  {
    title: "Men",
    href: "#",
    description:
      "For sighted users to preview LINK AVAIABLE FOR MALE SHOPPING.",
  },
  {
    title: "Kids",
    href: "#",
    description: "everything for kids from Newborn to age 17.",
  },
  {
    title: "Kitchen",
    href: "#",
    description: "An area to experience need of gadgets.",
  },
  {
    title: "Stationary",
    href: "#",
    description:
      "A set of layered sections of content—known for stationary items.",
  },
  {
    title: "Furniture",
    href: "#",
    description:
      "A popup that displays information related to an furniture of choice.",
  },
];

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {/* Home Section */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Home</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Needle to Network
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Click to purchase by simply searching, ordering at your
                      flexibility to have your desire come true. Truly Yours.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="#" title="Introduction">
                It helps you understand shopping is easy.
              </ListItem>
              <ListItem href="#" title="Order">
                Simply search, select, decide and order. Track your order by
                order number.
              </ListItem>
              <ListItem href="#" title="Points">
                Get a hassle-free full information of your point track record.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Categories Section */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Contact Us and About Us Section */}
        <NavigationMenuItem>
          <div className="flex flex-row space-x-4">
            <Link href="/about" legacyBehavior passHref>
              <a className="flex">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  About Us
                </NavigationMenuLink>
              </a>
            </Link>
            <Link href="/contact" legacyBehavior passHref>
              <a className="flex">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Contact Us
                </NavigationMenuLink>
              </a>
            </Link>
          </div>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

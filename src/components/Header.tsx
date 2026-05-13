import React from 'react'
import GradientText from './GradientText'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import {GiSolarSystem} from 'react-icons/gi'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

const pages: { title: string; href: string; description: string }[] = [
  {
    title: "Introducere",
    href: "/",
    description: "Introducere în astronomie și cosmologie.",
  },
  {
    title: "Legi și Principii",
    href: "/legi",
    description: "Legile fundamentale ale universului.",
  },
  {
    title: "Constelații",
    href: "/constelatii",
    description: "Explorarea constelațiilor și a cerului nocturn.",
  },
  {
    title: "Cosmologie",
    href: "/cosmologie",
    description: "Studiul originii și evoluției universului.",
  },
  {
    title: "Realizări",
    href: "/realizari",
    description: "Realizările majore în astronomie și spațiu.",
  },
]

const PageName= {
  '/': 'INTRODUCERE',
  '/legi': 'LEGI ȘI PRINCIPII',
  '/constelatii': 'CONSTELAȚII',
  '/cosmologie': 'COSMOLOGIE',
  '/realizari': 'REALIZĂRI'
}

export default function Header() {
  return (
    <div className='bg-black border-b-2 border-b-gray-500 rounded-xl font-bold flex items-center p-4 mb-5'>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger><GiSolarSystem className='size-6'/></NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="column min-w-100 gap-2 ">
                  {pages.map((page) => (
                    <ListItem
                      key={page.title}
                      title={page.title}
                      href={page.href}
                    >
                      {page.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className='flex-1 text-center text-2xl'>
            <GradientText
              colors={["#8EA0FA", "#627BF8", "#4A67F7", "#627BF8", "#8EA0FA"]}
              animationSpeed={8}
              showBorder={false}
              className=""
            >
              {PageName[useLocation().pathname as keyof typeof PageName]}
            </GradientText>
        </div>
    </div>
  )
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link to={href}>
          <div className="flex flex-col gap-1">
            <div className="leading-none font-medium text-xl">{title}</div>
            <div className="line-clamp-2 text-muted-foreground text-md">{children}</div>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { NavigationMenuSub } from '@radix-ui/react-navigation-menu'

import headerJson from '@/content/header.json'


//TODO: use NavigationMenuLink instead of Link
import Link from "next/link"


const nochevronStyle = "text-2xl group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 group text-xl"
const navButtonStyle = nochevronStyle + " text-white bg-blue-900"

export const NavButton: React.FC<{ target: string; label: string }> = ({ target, label }) => {
  return (
    <div>
      <NavigationMenu className='text-white'>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink href={target}>
              <div className={navButtonStyle}>{label}</div>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}

interface MenuItem {
  link: string;
  label: string;
}

const createSubmenu = (submenu: MenuItem[]) => {
  return (
    <NavigationMenuSub className=''>
      <NavigationMenuList className='group flex flex-col flex-1 list-none items-start justify-start space-x-1'>
        {submenu.map((item: MenuItem) => (
          <NavigationMenuItem key={item.link}>
            <Link href={item.link}>
              <div className={nochevronStyle}>{item.label}</div>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenuSub>
  );
};

const NavSection: React.FC = () => {
  return (
    <>
    <div id='navwrapper' className='text-xl'>
        <NavigationMenu className=''>
        <NavigationMenuList>
          <NavigationMenuItem>
              <NavigationMenuLink href={headerJson.mainMenu[0].link}>
                <div className={nochevronStyle}>{headerJson.mainMenu[0].label}</div>
              </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
              <NavigationMenuTrigger className=' text-xl'>{headerJson.mainMenu[1].label}</NavigationMenuTrigger>
            <NavigationMenuContent>
              {createSubmenu(headerJson.submenu1)}
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
              <NavigationMenuTrigger className=' text-xl'>{headerJson.mainMenu[2].label}</NavigationMenuTrigger>
            <NavigationMenuContent>
              {createSubmenu(headerJson.submenu2)}
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
              <NavigationMenuLink href={headerJson.mainMenu[3].link}>
                <div className={nochevronStyle}>{headerJson.mainMenu[3].label}</div>
              </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
      <NavButton target={headerJson.mainMenu[3].link} label={headerJson.mainMenu[3].label} />
    </>
  );
};

export default NavSection;

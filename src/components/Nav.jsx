import React from "react";
import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import { menuItems } from "../../_Details.jsx";
import logo from "../assets/logo.png"

export default function Nav() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <Navbar
            isBordered
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen} justify="center"
        >
            <NavbarContent className="sm:hidden" justify="center">
                <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
            </NavbarContent>

            <NavbarContent className="sm:hidden" justify="center">
                <NavbarBrand>
                    <img src={logo} alt="" width={250}/>
                    {/* <p className="font-bold text-inherit">Scope Tech</p> */}
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-16 -ml-[150px]" justify="start">
                {menuItems.map((items, index) => (
                    <NavbarItem key={items.id}>
                        <Link color="foreground" href={items.href} className={index === menuItems.length - 1 ? "hidden" : "block"}>
                            {items.name}
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarContent>
            <NavbarContent className="hidden sm:flex" justify="start">
                <NavbarBrand>
                    <img src={logo} alt="" className="" width={220}/>
                    {/* <p className="font-bold text-inherit">Scope</p> */}
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent justify="center" className="flex">
                {/* <NavbarItem className="hidden sm:flex">
                    <ThemeSwitcher />
                </NavbarItem> */}
                {/* <NavbarItem className="hidden lg:flex">
                    <Link href="#">Sign Up</Link>
                </NavbarItem> */}
                <NavbarItem>
                    <Button as={Link} color="secondary" href="#" variant="solid" className="h-[64px] w-[100px] rounded-none text-xl">
                        Login
                    </Button>
                </NavbarItem>
            </NavbarContent>

            <NavbarMenu>
            <NavbarItem className="flex justify-between my-1">
                </NavbarItem>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            className="w-full"
                            color={
                                index === menuItems.length - 1 ? "primary" : "foreground"
                            }
                            href={item.href}
                            size="lg"
                        >
                            {item.name}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}

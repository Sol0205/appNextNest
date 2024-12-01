"use client"

import Link from "next/link";
import { getProducts } from "./products/products.api"
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Input, Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import { useState } from "react";
import ProductsPage from "./admin/products/page";
export const dynamic = "force-dynamic"
import "./page.css"
import { SearchIcon } from "./navbarIcon/searchIcon";


export default function HomePage() {

    const [activePage, setActivePage] = useState<string>("");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [userProducts, setUserProducts] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleClick = async (option: string) => {
        setActivePage(option);

        if (option === "productosUser") {
            setIsLoading(true);
            const products = await getProducts();
            setUserProducts(products);
            setIsLoading(false);
        }
    };

    return (
        <div>

            <Navbar isBordered>
                <NavbarContent>
                    <NavbarBrand className="nav-link">
                        {/* <AcmeLogo /> */}
                        <Link href="/" className="nav-link">LOGO</Link>
                    </NavbarBrand>
                    <NavbarContent className="hidden sm:flex gap-4" justify="center">
                        <NavbarItem>
                            <Link href="admin" className="nav-link" onClick={() => handleClick("productosAdmin")}>
                                Admin
                            </Link>
                        </NavbarItem>
                        <NavbarItem isActive>
                            <Link href="catalog" className="nav-link" onClick={() => handleClick("productosUser")}>
                                Catalogo
                            </Link>
                        </NavbarItem>
                    </NavbarContent>
                </NavbarContent>

                <NavbarContent className="items-center" justify="end">
                    <Input
                        classNames={{
                            base: "max-w-full sm:max-w-[10rem] h-10",
                            mainWrapper: "h-full",
                            input: "text-small",
                            inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
                        }}
                        style={{ width: "160px" }}
                        placeholder="Type to search..."
                        size="sm"
                        startContent={<SearchIcon size={24} width={24} height={24} />}
                        type="search"
                    />

                    <Dropdown placement="bottom-end">
                        <DropdownTrigger as={Link} href="#" className="nav-link">
                            <p>AVATAR</p>
                            {/* <AvatarIcon /> */}
                        </DropdownTrigger>
                        <DropdownMenu aria-label="Profile Actions" variant="flat">
                            <DropdownItem key="profile" className="h-14 gap-2">
                                <p className="font-semibold">Signed in as</p>
                                <p className="font-semibold">zoey@example.com</p>
                            </DropdownItem>
                            <DropdownItem key="settings">My Settings</DropdownItem>
                            <DropdownItem key="team_settings">Team Settings</DropdownItem>
                            <DropdownItem key="analytics">Analytics</DropdownItem>
                            <DropdownItem key="system">System</DropdownItem>
                            <DropdownItem key="configurations">Configurations</DropdownItem>
                            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
                            <DropdownItem key="logout" color="danger">
                                Log Out
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </NavbarContent>
            </Navbar>

            <div style={{ padding: "70px" }}>
                {activePage === "productosAdmin" && <ProductsPage />}
                {/* {activePage === "productosUser" && <ProductCard />} */}
                {!activePage && <h2>Selecciona una opción para poder ver los productos</h2>}
            </div>
        </div>
    )
}
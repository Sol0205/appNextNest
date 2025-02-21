"use client"

import {
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
    Input,
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
} from "@nextui-org/react"
import Link from "next/link"
import { SearchIcon } from "./icon/searchIcon"
import ProductsPage from "../admin/page"
import "./page.css"
import { useRouter } from 'next/navigation'
import { useState } from 'react'

interface NavBarProps {
    onSearch?: (term: string) => void
}

export default function NavBarSinSearch({ onSearch }: NavBarProps) {
    const [activePage, setActivePage] = useState<string>("")
    const router = useRouter()

    const handleClick = (path: string) => {
        setActivePage(path)
        router.push(`/${path}`)
    };

    return (
        <div>
            <Navbar isBordered>
                <NavbarContent className="hidden sm:flex gap-4" justify="center">
                    <NavbarBrand className="nav-link">
                        <Link href="/" className="nav-link">LOGO</Link>
                    </NavbarBrand>
                    <NavbarItem>
                        <button
                            onClick={() => handleClick("./admin")}
                            className={`nav-link ${activePage === "./admin" ? "active" : ""}`}
                        >
                            Admin
                        </button>
                    </NavbarItem>
                    <NavbarItem>
                        <button
                            onClick={() => handleClick("../catalog")}
                            className={`nav-link ${activePage === "../catalog" ? "active" : ""}`}
                        >
                            Catálogo
                        </button>
                    </NavbarItem>
                </NavbarContent>

                <NavbarContent className="items-center" justify="end">
                    <Dropdown placement="bottom-end">
                        <DropdownTrigger as={Link} href="#" className="nav-link">
                            <p>AVATAR</p>
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
                {activePage === "admin" && <ProductsPage />}
                {activePage === "catalog" && <h2>Catálogo de productos</h2>}
            </div>
        </div>
    )
}
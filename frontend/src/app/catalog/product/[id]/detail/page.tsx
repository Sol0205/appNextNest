"use client";

import NavBar from "@/app/navBar/page";
import ProductDetailsClient from "./productDetailsClient"

export default function ProductDetailPage() {
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <NavBar onSearch={() => { }} />
            <ProductDetailsClient />
        </div>
    )
}
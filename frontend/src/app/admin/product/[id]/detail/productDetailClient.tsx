"use client"

import { useParams } from "next/navigation"
import ProductDetail from "@/components/product-detail"
import { useEffect, useState } from "react"
import { getProduct } from "@/app/products/products.api"
import NavBar from "@/app/navBar/page"

export default function ProductDetailClient() {
    const params = useParams()
    const productId = params?.id as string

    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (productId) {
            getProduct(productId).then((data) => {
                setProduct(data)
                setLoading(false)
            });
        }
    }, [productId])

    if (loading) {
        return <p>Loading...</p>
    }

    if (!product) {
        return <p>Product not found</p>
    }

    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <NavBar />
            <ProductDetail product={product} />
        </div>
    )
}
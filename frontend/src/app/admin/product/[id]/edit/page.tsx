'use client'

import React, { useState, useEffect } from 'react'
import { getProduct } from '@/app/products/products.api'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import ProductForm from './product-form'
import Link from 'next/link'
import { buttonVariants } from "@/components/ui/button"
import NavBar from '@/app/navBar/page'

type Params = {
    id: string
}

export default function ProductsEditPage({ params }: { params: Params }) {
    const [product, setProduct] = useState<any>(null)
    const [id, setId] = useState<string | null>(null)
    const resolvedParams = React.use(params)

    useEffect(() => {
        const fetchParams = async () => {
            if (resolvedParams && resolvedParams.id) {
                setId(resolvedParams.id)
            }
        }
        fetchParams();
    }, [resolvedParams])

    useEffect(() => {
        const fetchProduct = async () => {
            if (id) {
                const fetchedProduct = await getProduct(id)
                setProduct(fetchedProduct)
            }
        };

        if (id) {
            fetchProduct()
        }
    }, [id])

    if (!product) return <div>Loading...</div>

    return (
        <div className='h-screen flex justify-center items-center'>
            <NavBar />
            <Card>
                <CardHeader>
                    <CardTitle className="flex justify-between">
                        {product.id ? 'Edit Product' : 'Creation'}
                        <Link
                            className={buttonVariants()}
                            href="/admin"
                        >
                            Go back
                        </Link>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <ProductForm product={product} />
                </CardContent>
            </Card>
        </div>
    )
}

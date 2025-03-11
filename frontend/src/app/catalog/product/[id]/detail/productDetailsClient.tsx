import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import ProductDetail from "@/components/product-detail"


function ProductDetailsClient() {
    const params = useParams()
    const id = params.id as string

    const [product, setProduct] = useState<any | null>(null)
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        if (!id) return

        const fetchProduct = async () => {
            try {
                setLoading(true)

                const res = await fetch(`http://localhost:4000/api/products/${id}`)

                if (!res.ok) {
                    throw new Error(`HTTP error! Status: ${res.status}`)
                }

                const productData = await res.json()
                console.log("Fetched product data:", productData)

                if (!productData) {
                    setError("Product not found")
                } else {
                    setProduct(productData)
                }
            } catch (err) {
                console.error("Error fetching product:", err)
                setError("Failed to fetch product")
            } finally {
                setLoading(false)
            }
        };

        fetchProduct()
    }, [id])

    if (loading) return <p>Loading...</p>
    if (error) return <p>{error}</p>
    if (!product) return <p>Product not found</p>

    return (
        <div>
            <ProductDetail product={product} />
        </div>
    )
}

export default ProductDetailsClient
'use client'
import { useEffect, useState } from "react"
import { getProducts, deleteProduct } from "../products/products.api"
import NavBar from "../navBar/page"
import Link from "next/link"
import { useRouter } from "next/navigation"

interface Product {
    id: string;
    name: string;
    description: string;
    category: string;
    price: number;
    currency: string;
    image: string;
}

export default function ProductsCardsPage() {
    const [products, setProducts] = useState<Product[]>([])
    const [searchTerm, setSearchTerm] = useState<string>("")
    const router = useRouter()

    async function handleRemoveProduct(id: string) {
        await deleteProduct(id)
        setProducts(prevProducts => prevProducts.filter(product => product.id !== id))
    }

    useEffect(() => {
        async function fetchProducts() {
            const data = await getProducts()
            setProducts(data)
        }

        fetchProducts();
    }, []);

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
        <div>
            <NavBar onSearch={(term) => setSearchTerm(term)} />
            <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4">
                {filteredProducts.map((product) => (
                    <div key={product.id} className="border rounded-lg p-4 shadow-md bg-white">
                        <Link href={`/catalog/product/${product.id}/detail`}>
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-40 object-cover rounded-t-md"
                            />
                            <h2 className="text-lg font-bold">{product.name}</h2>
                            <p className="text-sm text-gray-600">{product.description}</p>
                            <p className="text-sm">Category: {product.category}</p>
                            <p className="text-sm">Price: ${product.price} {product.currency}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

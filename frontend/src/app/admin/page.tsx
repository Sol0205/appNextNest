'use client'
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Button } from "@nextui-org/react"
import { useEffect, useState } from "react"
import { deleteProduct, getProducts } from "../products/products.api"
import './page.css'
import Link from 'next/link'
import { buttonVariants } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import "./page.css"
import NavBar from "../navBar/page"


interface Product {
    id: number
    name: string
    description: string
    color: string
    category: string
    dimensions: string
    price: number
    currency: string
}

export default function ProductsPage() {
    const [products, setProducts] = useState<Product[]>([])
    const [searchTerm, setSearchTerm] = useState<string>("")
    const router = useRouter()

    async function handleRemoveProduct(id: number) {
        await deleteProduct(id.toString())
        setProducts((prevProducts) =>
            prevProducts.filter((product) => product.id !== id)
        )
    }

    useEffect(() => {
        async function fetchProducts() {
            const data = await getProducts()
            setProducts(data)
        }

        fetchProducts()
    }, [])

    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
        <>
            <NavBar onSearch={(term) => setSearchTerm(term)} />

            <Link href="/"
                className={buttonVariants()}>
                Go back
            </Link>

            <Link href="../../admin/product/new"
                className={buttonVariants()}
            >
                Create Product
            </Link>

            <Table aria-label="Products List Table" className="custom-table">
                <TableHeader>
                    <TableColumn className="custom-header">Name</TableColumn>
                    <TableColumn className="custom-header">Description</TableColumn>
                    <TableColumn className="custom-header">Color</TableColumn>
                    <TableColumn className="custom-header">Category</TableColumn>
                    <TableColumn className="custom-header">Dimensions</TableColumn>
                    <TableColumn className="custom-header">Price</TableColumn>
                    <TableColumn className="custom-header">Editar</TableColumn>
                    <TableColumn className="custom-header">Eliminar</TableColumn>
                </TableHeader>

                <TableBody>
                    {filteredProducts.map((product) => (
                        <TableRow key={product.id}>
                            <TableCell className="custom-cell">
                                <Link
                                    href={`../admin/product/${product.id}/detail`}
                                    className="custom-link-id-detail"
                                >
                                    {product.name}
                                </Link>
                            </TableCell>
                            <TableCell className="custom-cell">
                                <Link href={`../admin/product/${product.id}/detail`} className="custom-link-id-detail">
                                    {product.description}
                                </Link>
                            </TableCell>
                            <TableCell className="custom-cell">
                                <Link href={`../admin/product/${product.id}/detail`} className="custom-link-id-detail">
                                    {product.color}
                                </Link>
                            </TableCell>
                            <TableCell className="custom-cell">
                                <Link href={`../admin/product/${product.id}/detail`} className="custom-link-id-detail">
                                    {product.category}
                                </Link>
                            </TableCell>
                            <TableCell className="custom-cell">
                                <Link href={`../admin/product/${product.id}/detail`} className="custom-link-id-detail">
                                    {product.dimensions}
                                </Link>
                            </TableCell>
                            <TableCell className="custom-cell">
                                <Link href={`../admin/product/${product.id}/detail`} className="custom-link-id-detail">
                                    {product.price} {product.currency}
                                </Link>
                            </TableCell>
                            <TableCell className="custom-cell">
                                <Button
                                    className="buttonEdit"
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        router.push(`../admin/product/${product.id.toString()}/edit`)
                                    }}
                                >
                                    Editar
                                </Button>
                            </TableCell>
                            <TableCell className="custom-cell">
                                <Button
                                    className="buttonDelete"
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        handleRemoveProduct(product.id)
                                    }}
                                >
                                    Eliminar
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table >
        </>
    )
}


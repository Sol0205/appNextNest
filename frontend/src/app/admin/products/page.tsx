'use client'
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Button } from "@nextui-org/react"
import { useEffect, useState } from "react"
import { getProducts } from "../../products/products.api"
import '../products/page.css'
import Link from 'next/link'
import { buttonVariants } from "@/components/ui/button"

interface Product {
    id: string;
    name: string;
    description: string;
    color: string;
    category: string;
    dimensions: string;
    price: number;
    currency: string;
}

export default function ProductsPage() {
    const [products, setProducts] = useState<Product[]>([])

    useEffect(() => {
        async function fetchProducts() {
            const data = await getProducts()
            setProducts(data);
        }

        fetchProducts()
    }, []);

    return (
        <>
            <Link
                className={buttonVariants()}
                href="/"
            >
                Go back
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
                    {products.map((product) => (
                        <TableRow key={product.id}>
                            <TableCell className="custom-cell">{product.name}</TableCell>
                            <TableCell className="custom-cell">{product.description}</TableCell>
                            <TableCell className="custom-cell">{product.color}</TableCell>
                            <TableCell className="custom-cell">{product.category}</TableCell>
                            <TableCell className="custom-cell">{product.dimensions}</TableCell>
                            <TableCell className="custom-cell">{product.price} {product.currency}</TableCell>
                            <TableCell className="custom-cell">
                                <Button className="buttonEdit">Editar</Button>
                            </TableCell>
                            <TableCell className="custom-cell">
                                <Button className="buttonDelete">Eliminar</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </>
    );
}

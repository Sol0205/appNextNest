import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getProduct } from "@/app/products/products.api";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import './page.css'
import NavBar from "@/app/navBar/page";


interface Props {
    params: {
        id: string
    }
}

async function ProductDetailPage({ params }: Props) {
    const product = await getProduct(params.id)

    return (
        <div className="flex justify-center items-center h-screen">
            <NavBar />
            <Card
                className="card-content"
            >
                <CardHeader>
                    <CardTitle className="flex justify-between">
                        Product detail: {product.id}
                        <Link
                            className={buttonVariants()}
                            href="/admin"
                        >
                            Go back
                        </Link>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p>
                        <span style={{ textDecoration: 'underline' }}>Nombre:</span> {product.name}
                        <br />
                        <span style={{ textDecoration: 'underline' }}>Descripción:</span> {product.description}
                        <br />
                        <span style={{ textDecoration: 'underline' }}>Color:</span> {product.color}
                        <br />
                        <span style={{ textDecoration: 'underline' }}>Categoria:</span> {product.category}
                        <br />
                        <span style={{ textDecoration: 'underline' }}>Tamaño:</span> {product.dimensions}
                        <br />
                        <span style={{ textDecoration: 'underline' }}>Metodo de pago:</span> {product.currency}
                        <br />
                        <span style={{ textDecoration: 'underline' }}>Precio:</span> {product.price}
                    </p>
                    <img src={product.image} alt=""
                        className="w-full h-64 object-cover image"
                    />
                </CardContent>
            </Card>
        </div>
    )
}

export default ProductDetailPage
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getProduct } from "../products.api";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

interface Props {
    params: {
        id: string
    }
}

async function ProductDetailPage({ params }: Props) {
    const product = await getProduct(params.id)

    return (
        <div className="flex justify-center items-center h-screen">
            <Card>
                <CardHeader>
                    <CardTitle className="flex justify-between">
                        Product detail: {product.id}
                        <Link
                            className={buttonVariants()}
                            href="/"
                        >
                            Go back
                        </Link>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <h1>Nombre: {product.name}</h1>
                    <p>Descripcion: {product.description}</p>
                    <p>Color: {product.color}</p>
                    <p>Categoria: {product.category}</p>
                    <p>Medidas: {product.dimensions}</p>
                    <p>Moneda en la que cobra: {product.currency}</p>
                    <p>Precio: ${product.price} </p>
                    <img src={product.image} alt="" 
                        className="w-full h-64 object-cover"
                    />
                </CardContent>
            </Card>
        </div>
    )
}

export default ProductDetailPage
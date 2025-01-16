import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import ProductForm from './product-form';
import { getProduct } from '@/app/products/products.api';
import Link from 'next/link'
import { buttonVariants } from "@/components/ui/button";
import NavBar from '@/app/navBar/page';

interface Props {
    params: {
        id: string
    }
}

async function ProductsEditPage({ params }: Props) {
    const product = params.id ? await getProduct(params.id) : {}

    return (
        <div className='h-screen flex justify-center items-center'>
            <NavBar />
            <Card>
                <CardHeader>
                    <CardTitle className="flex justify-between">
                        {params.id ? 'Edit Product' : 'Creation'}
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

export default ProductsEditPage
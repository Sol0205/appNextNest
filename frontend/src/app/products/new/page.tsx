import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import ProductForm from './product-form'
import { getProduct } from '../products.api'
import Link from 'next/link'
import { buttonVariants } from "@/components/ui/button";

interface Props{
    params: {
        id: string
    }
}

async function ProductsNewPage({params}: Props) {
    const product = params.id ? await getProduct(params.id) : {}

    return(
        <div className='h-screen flex justify-center items-center'>
            <Card>
                <CardHeader>
                    <CardTitle className="flex justify-between">
                        {params.id ? 'Edit Product' : 'Creation'}
                        <Link
                            className={buttonVariants()}
                            href="/admin/products"
                        >
                            Go back
                        </Link>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <ProductForm product={product}/>
                </CardContent>
            </Card>
        </div>
    )
}

export default ProductsNewPage
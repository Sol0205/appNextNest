import { getProduct } from '@/app/products/products.api'

export default async function ProductEditServer({ id }: { id: string }) {
    const product = await getProduct(id)
    return product
}
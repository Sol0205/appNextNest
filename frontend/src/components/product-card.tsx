'use client'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useRouter } from "next/navigation";
import './product-card.css'

export function ProductCard({ product }: any) {
  const router = useRouter()

  return (
    <Card onClick={() => {
      router.push(`/products/${product.id}`)
    }}
    >

      <CardHeader>
        <CardTitle
          className='container-card'>
          {product.name}
        </CardTitle>
      </CardHeader>

      <img
        src={product.image}
        className='image'
        alt="Here is a photo referring to the product"
      />

      <CardContent>
        <p
          className='container-card'>
          {product.description}
        </p>
      </CardContent>

      <CardContent>
        <span className="text-md font-bold text-gray-500">
          ${product.price}
        </span>
      </CardContent>
    </Card>
  )
}
'use client'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { useForm } from 'react-hook-form'
import { createProduct, updateProduct } from '../products.api'
import { useParams, useRouter } from 'next/navigation'


export default function ProductForm({product}: any) {
    const { register, handleSubmit } = useForm({
        defaultValues:{
            name: product?.name,
            description: product?.description,
            color: product?.color,
            category: product?.category,
            dimensions: product?.dimensions,
            currency: product?.currency,
            price: product?.price,
            image: product?.image
        }
    })
    const router = useRouter()
    const params = useParams<{id: string}>()

    const onSubmit = handleSubmit(async (data) => {
        if (params?.id) {
            const res = await updateProduct(params.id, {
                ...data,
                price: parseFloat(data.price),
            })
        } else {
            await createProduct({
                ...data,
                price: parseFloat(data.price)
            })
        }
        router.push('/admin/products')
        router.refresh()
    })

    return(
        <form onSubmit={onSubmit}>
            <Label> Product name </Label>
            <Input 
                {...register('name')}
            />

            <Label> Description </Label>
            <Input 
                {...register('description')}
            />

            <Label> Color </Label>
            <Input 
                {...register('color')}
            />

            <Label> Category </Label>
            <Input 
                {...register('category')}
            />

            <Label> Dimensions </Label>
            <Input 
                {...register('dimensions')}
            />

            <Label> Currency </Label>
            <Input 
                {...register('currency')}
            />

            <Label> Price </Label>
            <Input type='number' 
                {...register('price')}
            />
                        
            <Label> Image </Label>
            <Input
                {...register('image')}
            />
                        
            <Button> 
                {params.id ? 'update product' : 'Create product'}
            </Button>
        </form>
    )
}
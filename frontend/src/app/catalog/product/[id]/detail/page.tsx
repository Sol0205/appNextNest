import NavBar from "@/app/navBar/page";
import ProductDetail from "@/components/product-detail-catalog";
import { getProduct } from "@/app/products/products.api";

interface Props {
    params: { id: string };
}

export default async function ProductDetailPage({ params }: Props) {
    const product = await getProduct(params.id);

    if (!product) {
        return <p>Product not found</p>;
    }

    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <NavBar />
            <ProductDetail product={product} />
        </div>
    );
}
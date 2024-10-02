import { buttonVariants } from "@/components/ui/button"
import Link from "next/link"

function ProductsAdmin() {
    return (
        <div>
            <h1>Aca va la lista de productos</h1>
            <br />
            <Link
                className={buttonVariants()}
                href="/"
            >
                Go back
            </Link>
        </div>
    )
}

export default ProductsAdmin
import { buttonVariants } from "@/components/ui/button"
import Link from "next/link"

function ProductsAdmin() {
    return (
        <div>
            <h1>Here is the list of products</h1>
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
"use client";

import { redirect } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@nextui-org/react";

interface Props {
    product: {
        id: string;
        name: string;
        description: string;
        color: string;
        category: string;
        dimensions: string;
        currency: string;
        price: string;
        image: string;
    };
}

export default function ProductDetail({ product }: Props) {
    const onBack = () => {
        redirect("/catalog");
    };

    return (
        <Card className="card-content">
            <CardHeader>
                <CardTitle className="flex justify-between">
                    Product detail: {product.id}
                    <Button onClick={onBack}>Go back</Button>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <p>
                    <span style={{ textDecoration: "underline" }}>Nombre:</span> {product.name}
                    <br />
                    <span style={{ textDecoration: "underline" }}>Descripción:</span> {product.description}
                    <br />
                    <span style={{ textDecoration: "underline" }}>Color:</span> {product.color}
                    <br />
                    <span style={{ textDecoration: "underline" }}>Categoria:</span> {product.category}
                    <br />
                    <span style={{ textDecoration: "underline" }}>Tamaño:</span> {product.dimensions}
                    <br />
                    <span style={{ textDecoration: "underline" }}>Metodo de pago:</span> {product.currency}
                    <br />
                    <span style={{ textDecoration: "underline" }}>Precio:</span> {product.price}
                </p>
                <img
                    src={product.image}
                    alt=""
                    className="w-full h-64 object-cover image"
                />
            </CardContent>
        </Card>
    );
}
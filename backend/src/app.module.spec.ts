import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from './app.module';
import { ProductsModule } from './products/products.module';
import { PrismaService } from './prisma/prisma.service';

describe('AppModule', () => {
    let appModule: TestingModule;
    //Comienza un bloque de pruebas para AppModule. Se declara la variable appModule para almacenar el entorno de prueba.

    beforeEach(async () => {
        appModule = await Test.createTestingModule({
            imports: [AppModule],
        }).compile();
    });
    //Se configura el entorno de pruebas para usar AppModule y se compila antes de cada prueba.

    it('should be defined', () => {
        expect(appModule).toBeDefined();
    });
    //Verifica que appModule esté bien configurado y definido.

    it('should import ProductsModule', () => {
        const productsModule = appModule.get<ProductsModule>(ProductsModule);
        expect(productsModule).toBeDefined();
    });
    //Comprueba que ProductsModule esté correctamente importado en AppModule.

    it('should provide PrismaService', () => {
        const prismaService = appModule.get<PrismaService>(PrismaService);
        expect(prismaService).toBeDefined();
    });
    //Verifica si PrismaService está disponible en AppModule, pero falla porque probablemente no está registrado en el módulo.
});

import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from './app.module';
import { ProductsModule } from './products/products.module';
import { PrismaService } from './prisma/prisma.service';

describe('AppModule', () => {
    let appModule: TestingModule;

    beforeEach(async () => {
        appModule = await Test.createTestingModule({
            imports: [AppModule],
        }).compile();
    });

    it('should be defined', () => {
        expect(appModule).toBeDefined();
    });

    it('should import ProductsModule', () => {
        const productsModule = appModule.get<ProductsModule>(ProductsModule);
        expect(productsModule).toBeDefined();
    });

    //este no pasa
    it('should provide PrismaService', () => {
        const prismaService = appModule.get<PrismaService>(PrismaService);
        expect(prismaService).toBeDefined();
    });
});

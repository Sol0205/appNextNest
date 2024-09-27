import { Test, TestingModule } from '@nestjs/testing';
import { ProductsService } from './products.service';
import { PrismaService } from '../prisma/prisma.service';
import { ProductsController } from './products.controller';

describe('ProductsService', () => {
  let service: ProductsService;
  let controller: ProductsController;
  //Define un grupo de pruebas para ProductsService. Se declaran las variables service para almacenar el servicio de productos y controller para el controlador de productos.

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductsController],
      providers: [ProductsService, PrismaService],
    }).compile();

    service = module.get<ProductsService>(ProductsService);
    controller = module.get<ProductsController>(ProductsController);
  });
  //Se crea un entorno de prueba, especificando los controladores y servicios a usar (ProductsController, ProductsService, y PrismaService).
  //Se compila el módulo de pruebas y luego se asignan las instancias del servicio y del controlador a sus respectivas variables (service y controller).

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  //Verifica que el servicio de productos esté bien definido, es decir, que la instancia de ProductsService esté correctamente creada.
});

import { Test, TestingModule } from '@nestjs/testing';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { PrismaService } from '../prisma/prisma.service';
interface CreateProductDto {
  name: string
  price: number
  description: string
  color: string
  category: string
  dimensions: string
  currency: string
  quantity: number
  image: string
}
//contiene los datos que se requieren para crear un producto.

interface Product {
  id: number
  name: string
  price: number
  description: string
  color: string
  category: string
  dimensions: string
  currency: string
  quantity: number
  image: string
  createdAt: Date
  updatedAt: Date
}
//estructura completa del producto, incluyendo id, fechas de creación y actualización.


describe('ProductsController', () => {
  let controller: ProductsController;
  //Define un grupo de pruebas para ProductsController. Se declara una variable controller para guardar la instancia del controlador que se va a probar.

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductsController],
      providers: [ProductsService, PrismaService],
    }).compile();

    controller = module.get<ProductsController>(ProductsController);
    //Se crea un entorno de prueba, se compila el módulo de prueba con el controlador y los servicios necesarios (ProductsService y PrismaService), y se asigna la instancia del controlador a la variable controller.
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
  //Verifica que el controlador esté correctamente definido, es decir, que se haya creado y esté listo para ser usado.

  it('should create a product', async () => {
    const createProductDto: CreateProductDto = {
      name: 'Product 1',
      price: 100,
      description: 'A test product',
      color: 'red',
      category: 'test',
      dimensions: '10x10x10',
      currency: 'USD',
      quantity: 1,
      image: 'image.png'
    };

    const result: Product = {
      id: 1,
      ...createProductDto,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    jest.spyOn(controller['productsService'], 'create').mockResolvedValue(result);

    expect(await controller.create(createProductDto)).toBe(result);
  });
  //Simula la creación de un producto utilizando un DTO de producto de prueba. Se finge que el servicio de productos (productsService) crea el producto correctamente, y se verifica que el controlador devuelva el resultado esperado.

  it('should return an array of products', async () => {
    const result: Product[] = [{
      id: 1,
      name: 'Product 1',
      price: 100,
      description: 'A test product',
      color: 'red',
      category: 'test',
      dimensions: '10x10x10',
      currency: 'USD',
      quantity: 1,
      image: 'image.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }];

    jest.spyOn(controller['productsService'], 'findAll').mockResolvedValue(result);

    expect(await controller.findAll()).toBe(result);
  });
  //Simula la obtención de todos los productos. Se verifica que el controlador retorne un array con los productos esperados.

  it('should return a single product', async () => {
    const result: Product = {
      id: 1,
      name: 'Product 1',
      price: 100,
      description: 'A test product',
      color: 'red',
      category: 'test',
      dimensions: '10x10x10',
      currency: 'USD',
      quantity: 1,
      image: 'image.png',
      createdAt: new Date(),
      updatedAt: new Date()
    };

    jest.spyOn(controller['productsService'], 'findOne').mockResolvedValue(result);

    expect(await controller.findOne('1')).toBe(result);
  });
  //Simula la obtención de un solo producto mediante un ID. Se comprueba que el controlador retorne el producto correcto.

  it('should update a product', async () => {
    const updateProductDto = { name: 'Updated Product', price: 150 };
    const result: Product = {
      id: 1,
      ...updateProductDto,
      description: 'A test product',
      color: 'red',
      category: 'test',
      dimensions: '10x10x10',
      currency: 'USD',
      quantity: 1,
      image: 'image.png',
      createdAt: new Date(),
      updatedAt: new Date()
    };

    jest.spyOn(controller['productsService'], 'update').mockResolvedValue(result);

    expect(await controller.update('1', updateProductDto)).toBe(result);
  });
  //Simula la actualización de un producto mediante un ID y un DTO de actualización. Se verifica que el controlador devuelva el producto actualizado.

  it('should remove a product', async () => {
    const result: Product = {
      id: 1,
      name: 'Product 1',
      price: 100,
      description: 'A test product',
      color: 'red',
      category: 'test',
      dimensions: '10x10x10',
      currency: 'USD',
      quantity: 1,
      image: 'image.png',
      createdAt: new Date(),
      updatedAt: new Date()
    };

    jest.spyOn(controller['productsService'], 'remove').mockResolvedValue(result);

    expect(await controller.remove('1')).toBe(result);
  });
  //Simula la eliminación de un producto mediante un ID. Se comprueba que el controlador retorne el producto que fue eliminado.
});

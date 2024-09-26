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


describe('ProductsController', () => {
  let controller: ProductsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductsController],
      providers: [ProductsService, PrismaService],
    }).compile();

    controller = module.get<ProductsController>(ProductsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

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
});

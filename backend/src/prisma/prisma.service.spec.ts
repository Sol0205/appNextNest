import { Test, TestingModule } from '@nestjs/testing';
// import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaService } from './prisma.service';
// import { PrismaClient } from '@prisma/client';

jest.mock('@prisma/client', () => {
    //jest.mock crea una versión simulad de PrismaClient para las pruebas. Así simula una base de datos
    return {
        PrismaClient: jest.fn().mockImplementation(() => {
            //Simula una implementación de PrismaClient con una función falsa de cómo actuaría Prisma
            return {
                $connect: jest.fn().mockResolvedValue(undefined),
                // Simula la conexión exitosa a "mockResolvedValue" 
            };
        }),
    };
});

describe('PrismaService', () => {
    let prismaService: PrismaService;
    //-Crea una variable que luego se usará para almacenar el servicio que se está probando (PrismaService).

    beforeEach(async () => {
        //beforeEach indica que lo que está dentro se ejecuta antes de cada prueba, configura todo antes de probar.
        const module: TestingModule = await Test.createTestingModule({
            //Crea un módulo de prueba (TestingModule), que es como un contenedor donde se configuran los servicios que se usarán en las pruebas.
            providers: [PrismaService],
            //Especifica que PrismaService es el servicio que estará disponible en este módulo de prueba.
        }).compile();
        prismaService = module.get<PrismaService>(PrismaService);
        //Asigna el servicio PrismaService creado en el módulo de prueba a la variable prismaService.
    });

    it('should be defined', () => {
        expect(prismaService).toBeDefined();
        //Espera que prismaService este definido. Osea, que se haya creado bien.
    });
});

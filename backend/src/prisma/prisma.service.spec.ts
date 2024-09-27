import { Test, TestingModule } from '@nestjs/testing';
import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { PrismaClient } from '@prisma/client';

jest.mock('@prisma/client', () => {
    return {
        PrismaClient: jest.fn().mockImplementation(() => {
            return {
                $connect: jest.fn().mockResolvedValue(undefined), // Simulando la conexión exitosa
            };
        }),
    };
});

describe('PrismaService', () => {
    let prismaService: PrismaService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [PrismaService],
        }).compile();

        prismaService = module.get<PrismaService>(PrismaService);
    });

    it('should be defined', () => {
        expect(prismaService).toBeDefined();
    });
});

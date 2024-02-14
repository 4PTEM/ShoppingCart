import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Client } from '@prisma/client';

@Injectable()
export class ClientsService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Client[]> {
    return this.prisma.client.findMany();
  }

  async findOne(clientId: number): Promise<Client | null> {
    return this.prisma.client.findUnique({
      where: { client_id: clientId },
    });
  }

  async create(data: any): Promise<Client> {
    return this.prisma.client.create({ data });
  }

  async update(clientId: number, data: any): Promise<Client> {
    return this.prisma.client.update({
      where: { client_id: clientId },
      data,
    });
  }

  async remove(clientId: number): Promise<void> {
    await this.prisma.client.delete({
      where: { client_id: clientId },
    });
  }
}

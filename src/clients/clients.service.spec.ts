import { Test, TestingModule } from '@nestjs/testing';
import { ClientsService } from './clients.service';
import { PrismaService } from 'src/prisma/prisma.service';

describe('ClientsService', () => {
  let service: ClientsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClientsService, PrismaService],
    }).compile();

    service = module.get<ClientsService>(ClientsService);
  });

  it('Create', async () => {
    const data = {
      name : 'client test',
      projectId: 1
    }

    const client = await service.create(data)
    expect(client).toMatchObject(data)
    service.remove(client.id)
    
  });

  it.only('Try create client with projectId not exist', async() => {
    const data = {
      name: 'client name',
      projectId: 8
    }

    const client = await service.create(data)

    service.remove(client.id)


  })

  it('Find All', async() => {
    const clients = await service.findAll()
    expect(clients.length).toBeGreaterThan(1)
    clients.forEach(client => {
      expect(client).toHaveProperty('name')
      expect(client).toHaveProperty('projectId')
    })
  })

  it('Find One', async() => {
    const client = await service.findOne(1)

    expect(client).toHaveProperty('name')
    expect(client).toHaveProperty('projectId')
  })

  it('Update', async() => {
    const data = {
      name: `client ${new Date().getMinutes()}`,
      projectId: 2
    }

    const client = await service.update(1, data)

    expect(client).toMatchObject(data)
  })
});

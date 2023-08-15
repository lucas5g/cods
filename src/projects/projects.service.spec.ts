import { Test, TestingModule } from '@nestjs/testing';
import { ProjectsService } from './projects.service';
import { PrismaService } from 'src/prisma/prisma.service';

describe('ProjectsService', () => {
  let service: ProjectsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProjectsService, PrismaService],
    }).compile();

    service = module.get<ProjectsService>(ProjectsService);
  });

  it('Create', async () => {
    const data = {
      name: 'Marketplace',
    };
    const project = await service.create(data);
    expect(project).toHaveProperty('name');

    service.remove(project.id);
  });

  it('Find All', async () => {
    const projects = await service.findAll();
    expect(projects.length).toBeGreaterThan(1);
    projects.forEach((project) => {
      expect(project).toHaveProperty('id');
      expect(project).toHaveProperty('name');
    });
  });

  it('Find One', async () => {
    const project = await service.findOne(1);

    expect(project).toMatchObject({ id: 1 });
    expect(project).toHaveProperty('name');
  });

  it('Update', async () => {
    const data = {
      name: `Project update ${new Date().getMinutes()}`,
    };

    const project = await service.update(1, data);
    expect(project).toMatchObject({ id: 1, ...data });
  });
});

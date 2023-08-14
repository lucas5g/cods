import { Module } from '@nestjs/common';
import { ProjectsModule } from './app/projects/projects.module';
import { ClientsModule } from './app/clients/clients.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [ProjectsModule, PrismaModule, ClientsModule],
})
export class AppModule {}

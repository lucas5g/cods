import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ProjectsModule } from 'src/projects/projects.module';
import { ClientsModule } from 'src/clients/clients.module';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [ProjectsModule, PrismaModule, ClientsModule],
  controllers: [AppController],
})
export class AppModule {}

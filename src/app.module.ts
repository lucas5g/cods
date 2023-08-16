import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ProjectsModule } from './projects/projects.module';
import { ClientsModule } from './clients/clients.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [ProjectsModule, PrismaModule, ClientsModule],
  controllers: [AppController],
})
export class AppModule {}

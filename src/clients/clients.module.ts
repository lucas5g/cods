import { Module } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { ClientsController } from './clients.controller';
import { ExistsValidator } from 'src/validators/exists.validator';


@Module({
  controllers: [ClientsController],
  providers: [ClientsService, ExistsValidator],
})
export class ClientsModule {}

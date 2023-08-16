import { IsNotEmpty, IsNumber, Validate } from "class-validator";

export class CreateClientDto {
  
  @IsNotEmpty()
  name:string;

  @IsNotEmpty()
  // @Validate(ExistsValidator, ['Project', 'id'])
  projectId:number;
}

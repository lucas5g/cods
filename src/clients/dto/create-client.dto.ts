import { IsNotEmpty, IsNumber, Validate } from "class-validator";

export class CreateClientDto {
  
  @IsNotEmpty()
  name:string;

  @IsNumber()
  projectId:number;
}

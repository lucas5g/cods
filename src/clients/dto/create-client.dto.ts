import { IsNotEmpty, IsNumber, Validate } from "class-validator";
import { IsUniqueName } from "src/decorators/unique-name.decorator";
import { ExistsValidator } from "src/validators/exists.validator";

export class CreateClientDto {
  
  @IsNotEmpty()
  @IsUniqueName()
  name:string;

  @IsNotEmpty()
  // @Validate(ExistsValidator, ['Project', 'id'])
  projectId:number;
}

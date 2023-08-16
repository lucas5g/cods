import { registerDecorator, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments } from 'class-validator';
import { PrismaService } from 'src/prisma/prisma.service';

@ValidatorConstraint({ name: 'isUniqueName', async: true })
export class IsUniqueNameConstraint implements ValidatorConstraintInterface {
  constructor(private readonly prismaService: PrismaService) {}

  async validate(name: any, args: ValidationArguments) {
    const user = await this.prismaService.project.findFirst({ where: { name } });
    return !user;
  }

  defaultMessage(args: ValidationArguments) {
    return 'O nome já está em uso.';
  }
}

export function IsUniqueName(validationOptions?: ValidationOptions) {
  return (object: Record<string, any>, propertyName: string) => {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsUniqueNameConstraint,
    });
  };
}

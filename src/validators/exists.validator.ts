// exists.validator.ts
import { ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments } from 'class-validator';

import { Injectable, Inject } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@ValidatorConstraint({ name: 'exists', async: true })
@Injectable()
export class ExistsValidator implements ValidatorConstraintInterface {
  constructor(
    @Inject(PrismaService)
    private readonly prisma: PrismaService,
  ) {}

  async validate(value: any, args: ValidationArguments) {
    const [model, field] = args.constraints;
    if (!value) {
      return false;
    }
    
    const record = await this.prisma.project.findFirst({
      where: {
        [field]: value,
      },
    });

    return !!record;
  }

  defaultMessage(args: ValidationArguments) {
    const [model, field] = args.constraints;
    return `${field} in ${model} does not exist.`;
  }
}

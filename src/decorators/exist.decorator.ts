import { ValidationOptions, registerDecorator } from "class-validator"

export function exist(table:string, field:string, validationOptions?: ValidationOptions){
  
  return function(object:Object, propertyName:string){
    // registerDecorator({
      // name: 'Exist',
      // target: object.constructor,
      // propertyName,
      // options: validationOptions,

    // })
  }
}
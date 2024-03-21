import { Injectable } from '@nestjs/common';
import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { Cpf } from '../cpf';

@ValidatorConstraint({ name: 'IsCpf' })
@Injectable()
export class IsCpfValidRule implements ValidatorConstraintInterface {
  validate(value: Cpf) {
    if (!value) return false;
    return value.isValid();
  }

  defaultMessage(args: ValidationArguments) {
    return `The value '${args.value}' is not a valid CPF.`;
  }
}

/**
 * Validate if it's a valid CPF Document.
 * @param validationOptions (optional) Options of class-validation validator
 */
export function IsCpfValid(validationOptions?: ValidationOptions) {
  return function (object: any, propertyName: string) {
    registerDecorator({
      name: 'IsCpfValid',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: IsCpfValidRule,
    });
  };
}

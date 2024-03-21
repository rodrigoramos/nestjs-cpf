import { PipeTransform, Injectable } from '@nestjs/common';
import { Cpf } from '../cpf';

@Injectable()
/**
 * A NestJS PipeTranform which transform from a string or a number into CPF Object.
 */
export class CpfParsePipe implements PipeTransform {
  transform(value: any) {
    if (typeof value !== 'string' && typeof value !== 'number')
      throw new TypeError(
        `Invalid type of argument \'value\'. Current type ${typeof value}`,
      );

    return new Cpf(value as string | number);
  }
}

import {ValidationOptions} from 'class-validator';
import 'reflect-metadata';

import { Cpf } from './cpf';
import { CpfParsePipe } from './pipes/cpfParse.pipe';
import { IsCpfValid } from './validators/cpf.validator';

type CpfValidationType = (validationOptions?: ValidationOptions | undefined) => any;

export interface NestJSCpf {
  Cpf: typeof Cpf;
  IsCpfValid: CpfValidationType;
  CpfParsePipe: typeof CpfParsePipe;

}

export {
  Cpf,
  IsCpfValid,
  CpfParsePipe,
};


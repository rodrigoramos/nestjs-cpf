import 'reflect-metadata';

import { Cpf } from './cpf';
import { CpfParsePipe } from './pipes/cpfParse.pipe';
import { IntoCpf } from './transformer/cpf.transformer';
import { IsCpfValid } from './validators/cpf.validator';

export { Cpf, IsCpfValid, CpfParsePipe, IntoCpf };

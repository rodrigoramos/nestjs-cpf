import { Cpf, IsCpfValid } from 'nestjs-cpf';
import { IsCpf } from './transformer/cpf.transformer';

export class CpfRequest {
  nome: string;

  @IsCpf()
  cpf: Cpf;
}

export class CpfRequestWithValidation {
  nome: string;

  @IsCpf()
  @IsCpfValid()
  cpf: Cpf;
}

import { Transform } from 'class-transformer';
import { Cpf } from 'nestjs-cpf';

export const IsCpf = () => Transform(({ value }) => new Cpf(value));

import { Transform } from 'class-transformer';
import { Cpf } from '../cpf';

export const IntoCpf = ({ value }: any): Cpf => new Cpf(value);
export const IsCpf = () => Transform(IntoCpf);

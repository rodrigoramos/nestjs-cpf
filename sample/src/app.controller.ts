import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { CpfRequest, CpfRequestWithValidation } from './cpfRequest';
import { Cpf, CpfParsePipe } from 'nestjs-cpf';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('query')
  testCpfQuery(@Query('cpf', CpfParsePipe) cpf: Cpf) {
    return this.output(cpf);
  }

  @Get('param/:cpf')
  testParam(@Param('cpf', CpfParsePipe) cpf: Cpf) {
    return this.output(cpf);
  }

  @Post('/body')
  testBody(@Body() request: CpfRequest): string {
    return request.nome + ' ' + this.output(request.cpf);
  }

  @Post('/body-validation')
  testBodyValidation(@Body() request: CpfRequestWithValidation): string {
    return request.nome + ' ' + this.output(request.cpf);
  }

  output(cpf: Cpf): string {
    console.log(cpf instanceof Cpf);
    return (
      cpf.isValid() +
      ' ' +
      cpf.toFormattedString() +
      ' ' +
      cpf.asNumber().toString()
    );
  }
}

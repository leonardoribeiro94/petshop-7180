import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { Customer } from '../model/customer.model';
import { Result } from '../model/result.model';

@Controller('/v1/customers')
export class CustomerController {
  @Get()
  get() {
    return new Result(null, true, [], null);
  }

  @Get(':document') // parameter url
  getById(@Param('document') document: string) {
    return new Result(null, true, {}, null);
  }

  @Post()
  post(@Body() body: Customer) {
    return new Result('Cliente criado com sucesso', true, body, null);
  }

  @Put(':document')
  put(@Param('document') document: string, @Body() body: object) {
    return new Result('Cliente alterado com sucesso', true, body, null);
  }

  @Delete(':document')
  delete(@Param('document') document: string) {
    return new Result('Cliente removido com sucesso', true, document, null);
  }
}

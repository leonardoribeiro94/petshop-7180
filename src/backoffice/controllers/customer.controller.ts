import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  Injectable,
  UseInterceptors,
} from '@nestjs/common';
import { Customer } from '../models/customer.model';
import { Result } from '../models/result.model';
import { ValidatorInterceptor } from 'src/interceptors/validator.interceptor';
import { CreateCustomerContract } from '../contracts/customer.contracts';

@Injectable()
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
// tslint:disable-next-line: new-parens
  @UseInterceptors(new ValidatorInterceptor(new CreateCustomerContract()))
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

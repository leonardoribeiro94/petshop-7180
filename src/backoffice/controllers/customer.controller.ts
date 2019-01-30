import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';

@Controller('/v1/customers')
export class CustomerController {
  @Get()
  get() {
    return 'obter os clientes';
  }

  @Get(':document') // parameter url
  getById(@Param('document') document: string) {
    return `obter o cliente ${document}`;
  }

  @Post()
  post(@Body() body) {
    return body;
  }

  @Put(':document')
  put(@Param('document') document, @Body() body) {
    return {
      customer: document,
      data: body,
    };
  }

  @Delete(':document')
  delete(@Param('document') document) {
    return 'deletar cliente';
  }
}

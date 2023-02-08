import { CreditCardDto } from './../../dto/credit-card.dto';
import { AuthInterceptor } from '../../interceptors/AuthInterceptor';
import { ResponseDTO } from '../../dto/response.dto';
import { Body, Controller, Get, Post, Param, Patch, UseInterceptors, HttpStatus } from '@nestjs/common';
import { PaymentService } from './payment.service';

@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Post()
  @UseInterceptors(AuthInterceptor)
  async addCreditCard(@Body() creditCardDto: CreditCardDto): Promise<ResponseDTO> {
    const result = await this.paymentService.setCreditCard(creditCardDto);

    return new ResponseDTO(result, 'Credit card added successfully', 'Cartão de Crédito adicionado com sucesso', HttpStatus.CREATED);
  }
}

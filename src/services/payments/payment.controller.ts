import { AuthInterceptor } from '../../interceptors/AuthInterceptor';
import { ResponseDTO } from '../../dto/response.dto';
import { Body, Controller, Get, Post, Param, Patch, UseInterceptors, HttpStatus } from '@nestjs/common';
import { PaymentService } from './payment.service';

@Controller('address')
export class PaymentController {
  constructor(private readonly custumerService: PaymentService) {}
}

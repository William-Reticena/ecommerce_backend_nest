export class ResponseDTO {
  data: any;
  message: string;
  userMessage: string;
  statusCode: number;

  constructor(data?: any, message?: string, userMessage?: string, statusCode?: number) {
    this.data = data;
    this.message = message;
    this.userMessage = userMessage;
    this.statusCode = statusCode;
  }
}

export class ResponseDTO<T> {
  data: T;
  message: string;
  userMessage: string;
  statusCode: number;

  constructor(
    data?: T,
    message?: string,
    userMessage?: string,
    statusCode?: number,
  ) {
    this.data = data;
    this.message = message;
    this.userMessage = userMessage;
    this.statusCode = statusCode;
  }
}

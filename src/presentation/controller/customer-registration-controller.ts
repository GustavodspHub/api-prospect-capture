import { CustumerRegistration } from '@/domain/usecases/customer/customer-registration';
import { Controller } from '../protocols/controller';
import { HttpRequest, HttpResponse } from '@/presentation/protocols/http';
import { serverError, badRequest, created } from '../utils';

export class CustomerRegistrationController implements Controller {
  constructor(private readonly custumerRegistration: CustumerRegistration) {}
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const customer = await this.custumerRegistration.registration(httpRequest.body);

      return created('Parabéns, agora você é um cliente Safira!', {customer});
    } catch (error) {
      console.log(error);
      switch (error.message) {
        case 'USER_INVALID':
          return badRequest('Preencha todos os campos, por gentileza!');
        case 'USER_NOT_CREATE':
          return badRequest('Não foi possível criar o seu usuário')
        default:
          return serverError(error);
      }
    }
  }
}

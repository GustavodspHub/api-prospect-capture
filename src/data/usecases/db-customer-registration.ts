import { CustomerRegistration, CustomerRegistrationProtocol } from '@/data/protocols/db';

export class DbCustomerRegistration implements CustomerRegistrationProtocol {
  constructor(
    private readonly custumerRegistrationRepository: CustomerRegistrationProtocol,
  ) {}
  async registration (params: CustomerRegistration.Params):  CustomerRegistration.Result{
    if(!params) throw new Error('USER_INVALID')

    const customer = await this.custumerRegistrationRepository.registration(params)

    if(!customer) throw new Error ('USER_NOT_CREATE')

    return customer
  }
}

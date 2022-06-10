import { CustomerRegistration, CustomerRegistrationProtocol } from '@/data/protocols/db';
import {dbGrupoSafira} from '../helpers/index'

export class CustomerRepository implements CustomerRegistrationProtocol{
  async registration (params: CustomerRegistration.Params): CustomerRegistration.Result{
    const result = await dbGrupoSafira('tb_customer')
    .insert(params)
    .returning('*')

    return result
  }
}
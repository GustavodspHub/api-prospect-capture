import { CustomerRepository } from '@/infra/db/mssql/customer-repository';
import { DbCustomerRegistration } from '../../../data/usecases/db-customer-registration';
import { CustomerRegistrationController } from '@/presentation/controller/customer-registration-controller';

export const makeCustomerRegistrationController = () => {
  const customerRepository = new CustomerRepository();
  const dbCustomerRegistration = new DbCustomerRegistration(
    customerRepository
  );
  return new CustomerRegistrationController(dbCustomerRegistration);
};

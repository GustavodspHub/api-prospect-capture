export interface CustomerRegistrationProtocol {
  registration: (params: CustomerRegistration.Params) => CustomerRegistration.Result;
}

export namespace CustomerRegistration {

  export type Params = {
    name: string,
    phone: string,
    cpf: string,
    document: string,
    nationality?: string,
    adress?: {
    
    },
    creditCard?: {

    }
  }

  type Customer = {
    Customer: {
      name: string,
      phone: string,
      cpf: string,
      document: string
    };
  };

  export type Result = Promise<Customer[]>;
}

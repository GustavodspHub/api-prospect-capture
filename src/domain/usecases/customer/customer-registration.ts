export interface CustumerRegistration {
  registration: (params: CustumerRegistration.Params) => CustumerRegistration.Result
}

export namespace CustumerRegistration {
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
  export type Result = Promise<any>
}
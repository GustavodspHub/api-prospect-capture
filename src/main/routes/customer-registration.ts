import { adaptRoute } from '../adapters/adapt-route';
import { Router } from 'express';
import { makeCustomerRegistrationController } from '../factories/controllers/make-customer-registration';

export default (routes: Router) => {
  routes.post(
    '/customer_registration',
    adaptRoute(makeCustomerRegistrationController()),
  );
};

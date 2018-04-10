import * as EmailUtil from '../util/email_util';

export const sendOrderConfirmation = (email, order, items) => dispatch => {
  return (
    EmailUtil.sendOrderConfirmation(email, order, items)
  );
};

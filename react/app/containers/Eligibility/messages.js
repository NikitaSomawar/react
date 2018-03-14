/*
 * Eligibility Messages
 *
 * This contains all the text for the Eligibility component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  header: {
    id: 'app.containers.Eligibility.header',
    defaultMessage: 'This is Eligibility container !',
  },
  panInfo: {
    id: 'app.containers.Eligibility.panInfo',
    defaultMessage: 'The PAN is required for all financial transactions – to retrieve,and report your credit behavior to the credit bueruea, including but not limited to CIBIL, Experian, CRIF Highmark etc.',
  },
  submitInfo: {
    id: 'app.containers.Eligibility.submitInfo',
    defaultMessage: 'Details once submitted cannot be changed',
  },
});

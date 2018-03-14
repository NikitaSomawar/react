/**
 *
 * Asynchronously loads the component for FirebaseLogin
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});

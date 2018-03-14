/**
 *
 * Asynchronously loads the component for TogglerScreen
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});

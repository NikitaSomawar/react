/**
 *
 * Asynchronously loads the component for KashIntro
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});

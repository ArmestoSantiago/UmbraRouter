import { lazy, Suspense } from 'react';

import { Page404 } from './Page404.jsx';
import { Router } from './Router.jsx';
import { Route } from './Route.jsx';

const LazyHomePage = lazy(() => import('./Home.jsx'));
const LazyAboutPage = lazy(() => import('./About.jsx'));

export const routes = [
  {
    path: '/:lang/about',
    Component: LazyAboutPage
  },
  {
    path: '/',
    Component: LazyHomePage
  },
  {
    path: '/search/:query',
    Component: (params) => {
      return <h1>Buscador {params.routeParams.query}</h1>;
    }
  }
];

export function App () {
  return (
    <main>
      <Suspense fallback={<div>Loading ...</div>}>
        <Router routes={routes} defaultComponent={Page404}>
          <Route path='/' Component={LazyHomePage} />
          <Route path='/about' Component={LazyAboutPage} />
        </Router>
      </Suspense>
    </main>
  );
}

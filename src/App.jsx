import React from 'react';
import { Suspense, lazy } from 'react';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements, Navigate } from 'react-router-dom';
import { routes } from './routes/routes';
import SuspenseLoader from './component/common/SuspenseLoader';
const ErrorComponent = lazy(() => import('./component/common/ErrorComponent'));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path={routes.main.path} element={<Navigate to={`${routes.emails.path}/inbox`} />} />
      <Route path={routes.main.path} element={<routes.main.element />}>
        <Route path={`${routes.emails.path}/:type`} element={<routes.emails.element />} errorElement={<ErrorComponent />} />
        <Route path={routes.view.path} element={<routes.view.element />} errorElement={<ErrorComponent />} />
      </Route>

      <Route path={routes.invalid.path} element={<Navigate to={`${routes.emails.path}/inbox`} />} />
    </Route>
  )
)

function App() {
  return (
    <>
      <div>
        <Suspense fallback={<SuspenseLoader />}>
          <RouterProvider router={ router } />
        </Suspense>
      </div>
    </>
  )
}

export default App;
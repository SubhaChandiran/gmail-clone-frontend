import React from 'react';
import Main from '../src/pages/Main';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements, Navigate } from 'react-router-dom';
import { routes } from './routes/routes';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path={routes.main.path} element={<Navigate to={`${routes.main.path}/inbox`} />} />
      <Route path={routes.main.path} element={<routes.main.element />}>
        <Route path={`${routes.main.path}/:type`} element={<routes.main.element />} />
      </Route>
    </Route>
  )
)

function App() {
  return (
    <>
      <div>
        <RouterProvider router={ router } />
      </div>
    </>
  )
}

export default App;
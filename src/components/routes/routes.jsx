import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import useRoutes from './useRoutes.tsx';

const CustomRouter = () => {
  const routes = useRoutes();

  return (
        <Routes>
          {routes.map(r => (
        <Route element={r.element} path={r.path} key={r.key} />
      ))}
    </Routes>
  );
};

export default CustomRouter;

/* eslint-disable react-refresh/only-export-components */
import { lazy } from 'react';
import Profile from '../../pages/Auth/Login/Profile';

import ProtectedRoutesLayout from '../../layouts/ProtectedRoutesLayout';
import DashboardLayout from '../../layouts/DashboardLayout';
import AuthLayout from '../../layouts/AuthLayout';

import Login from '../../pages/Auth/Login';

import Home from '../../pages/Dashboard/Home';

// Lazy-loaded components
const Categories = lazy(() => import('../../pages/Categories'));
const CategoryDetails = lazy(
  () => import('../../pages/Categories/CategoryDetails'),
);
const CreateCategory = lazy(
  () => import('../../pages/Categories/CreateCategory'),
);
const UpdateCategory = lazy(
  () => import('../../pages/Categories/UpdateCategory'),
);

const Products = lazy(() => import('../../pages/Products'));
const CreateProduct = lazy(() => import('../../pages/Products/CreateProduct'));
const ProductDetails = lazy(
  () => import('../../pages/Products/ProductDetails'),
);
const UpdateProduct = lazy(() => import('../../pages/Products/UpdateProduct'));

const Colors = lazy(() => import('../../pages/Colors'));
const CreateColor = lazy(() => import('../../pages/Colors/CreateColor'));
const UpdateColor = lazy(() => import('../../pages/Colors/UpdateColor'));

const Offers = lazy(() => import('../../pages/Offers'));
const CreateOffer = lazy(() => import('../../pages/Offers/CreateOffer'));
const UpdateOffer = lazy(() => import('../../pages/Offers/UpdateOffer'));

const Admins = lazy(() => import('../../pages/Admins'));
const UpdateAdmin = lazy(() => import('../../pages/Admins/UpdateAdmin'));
const CreateAdmin = lazy(() => import('../../pages/Admins/CreateAdmin'));

const routes = [
  // Dashboard Layout
  {
    path: '',
    element: (
      <ProtectedRoutesLayout>
        <DashboardLayout />
      </ProtectedRoutesLayout>
    ), // Outlet here
    children: [
      {
        path: '/',
        element: <Home />,
        exact: true,
      },
      // ? Start Product
      {
        path: '/products',
        element: <Products />,
      },
      {
        path: '/products/create',
        element: <CreateProduct />,
      },
      {
        path: '/products/update/:id',
        element: <UpdateProduct />,
      },
      {
        path: '/products/details/:id',
        element: <ProductDetails />,
      },
      //  ! End Product
      //  ? Start Categories
      {
        path: '/categories',
        element: <Categories />,
      },
      {
        path: '/categories/create',
        element: <CreateCategory />,
      },
      {
        path: '/categories/update/:id',
        element: <UpdateCategory />,
      },
      {
        path: '/categories/details/:id',
        element: <CategoryDetails />,
      },
      // ! End Categories
      // ? Start Colors
      {
        path: '/colors',
        element: <Colors />,
      },
      {
        path: '/colors/create',
        element: <CreateColor />,
      },
      {
        path: '/colors/update/:id',
        element: <UpdateColor />,
      },
      {
        path: '/colors/details/:id',
        element: <CategoryDetails />,
      },
      // ! End Colors
      // ? Start Offers
      {
        path: '/offers',
        element: <Offers />,
      },
      {
        path: '/offers/create',
        element: <CreateOffer />,
      },
      {
        path: '/offers/update/:id',
        element: <UpdateOffer />,
      },
      // ! End Offers
      // ? Start Admins
      {
        path: '/admins',
        element: <Admins />,
      },
      {
        path: '/admins/create',
        element: <CreateAdmin />,
      },
      {
        path: '/admins/update/:id',
        element: <UpdateAdmin />,
      },
      // ! End Admins
      // ? Start Profile
      {
        path: '/profile',
        element: <Profile />,
      },
      // ! End Profile
    ],
  },
  // Auth layout
  {
    path: '/login',
    element: <AuthLayout />, // Outlet here
    children: [
      {
        path: '',
        element: <Login />,
      },
      {
        path: 'companies',
        element: <Login />,
      },
    ],
  },
];

export default routes;

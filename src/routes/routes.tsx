import React, { Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import LayoutNavAndFooter from '../layout/LayoutNavAndFooter';
import ProtectedRoute from '../modules/auth/components/ProtectedRoute';
import Loading from '../components/Loading';

// Componentes cargados de manera diferida
const Login = React.lazy(() => import('../modules/auth/pages/Login'));
const Register = React.lazy(() => import('../modules/auth/pages/Register'));
const DashBoard = React.lazy(() => import('../modules/dashboard/pages/DashBoard'));



// Definición de las rutas
const routes = createBrowserRouter([
    {
        path: '/',
        element: (
            <LayoutNavAndFooter>
                <div>Home</div>
            </LayoutNavAndFooter>
        ),
    },
    {
        path: '/login',
        element: (
            <Suspense fallback={<Loading />}>
                <LayoutNavAndFooter>
                    <Login />
                </LayoutNavAndFooter>
            </Suspense>
        ),
    },
    {
        path: '/register',
        element: (
            <Suspense fallback={<Loading />}>
                <LayoutNavAndFooter>
                    <Register />
                </LayoutNavAndFooter>
            </Suspense>
        ),
    },
    {
        path: '/',
        element: <ProtectedRoute />,
        children: [
            {
                path: 'dashboard',
                element: (
                    <Suspense fallback={<Loading />}>
                        <LayoutNavAndFooter>
                            <DashBoard />
                        </LayoutNavAndFooter>
                    </Suspense>
                ),
            },
        ],
    },
]);

export default routes;

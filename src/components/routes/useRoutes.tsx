import * as React from 'react';
import { UserAuth } from './Auth';
import { lazy } from 'react';
const Home = lazy(() => import('../../pages/Home'));
const Pricing = lazy(() => import('../pricing'));
const ProductModal = lazy(() => import('../ProductModal'));
const LoginModal = lazy(() => import('../LoginModal'));
const Gallery = lazy(() => import('../ImageGallery'));
const Testimonial = lazy(() => import('../testimonialProduct'));
const SignUp = lazy(() => import('../SignUp'));
//@ts-ignore
const Account = lazy(() => import('../../pages/Account'));
const FriendProfiles = lazy(() => import('../../pages/profiles'));

interface RoutesObj {
    path: String;
    element: React.ReactNode;
    key: String;
}

const useRoutes = (): RoutesObj[] | React.ReactNode => {
    const { user } = UserAuth();

    let routeArray = [
        {
            path: '/',
            element: (
                <React.Suspense>
                    <Home />
                </React.Suspense>
            ),
            key: '/'
        },
        {
            path: '/pricing',
            element: (
                <React.Suspense>
                    <Pricing />
                </React.Suspense>
            ),
            key: '/pricing'
        },
        {
            path: '/productModal',
            element: (
                <React.Suspense>
                    <ProductModal />
                </React.Suspense>
            ),
            key: '/productModal'
        },
        {
            path: '/login',
            element: (
                <React.Suspense>
                    <LoginModal />
                </React.Suspense>
            ),
            key: '/login'
        },
        {
            path: '/product',
            element: (
                <React.Suspense>
                    <Gallery />
                </React.Suspense>
            ),
            key: '/product'
        },
        {
            path: '/signup',
            element: (
                <React.Suspense>
                    <SignUp />
                </React.Suspense>
            ),
            key: '/signup'
        }
    ];

    if (user) {
        let userArray = [
            {
                path: '/account',
                element: (
                    <React.Suspense>
                        <Account />
                    </React.Suspense>
                ),
                key: '/account'
            },
            {
                path: '/friends',
                element: (
                    <React.Suspense>
                        <FriendProfiles />
                    </React.Suspense>
                ),
                key: '/friends'
            }
        ];

        let newArray = routeArray.concat(userArray);
        return newArray;
    }

    return routeArray;
};
export default useRoutes;

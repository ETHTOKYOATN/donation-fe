import Loadable from '@react-loadable/revised';
import { ContainerLoading } from '@/components/commons/Loadings';
import { LayoutType1, LayoutType2 } from '@/components/layouts';

const LoadableMain = Loadable({
    loader: () => import('@/components/containers/Main'),
    loading: ContainerLoading,
});

const LoadableSelect = Loadable({
    loader: () => import('@/components/containers/Select'),
    loading: ContainerLoading,
});

const LoadableStart = Loadable({
    loader: () => import('@/components/containers/Start'),
    loading: ContainerLoading,
});

const LoadableManage = Loadable({
    loader: () => import('@/components/containers/Manage'),
    loading: ContainerLoading,
});

export const homeDomainName = 'Donation';

export const commonRoutes = [
    {
        name: 'Main',
        path: '/',
        exact: true,
        component: LoadableMain,
        layout: LayoutType1,
        checkAuth: false,
    },
    {
        name: 'Select',
        path: '/select',
        exact: true,
        component: LoadableSelect,
        layout: LayoutType2,
        checkAuth: true,
    },
    {
        name: 'Start',
        path: '/start',
        exact: true,
        component: LoadableStart,
        layout: LayoutType2,
        checkAuth: true,
    },
    {
        name: 'Manage',
        path: '/manage',
        exact: true,
        component: LoadableManage,
        layout: LayoutType2,
        checkAuth: true,
    },
];

export const routes = [
    ...commonRoutes,
    {
        name: 'Base URL',
        path: '/*',
        exact: true,
        component: LoadableStart,
        layout: LayoutType1,
        checkAuth: false,
    },
];

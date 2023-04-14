import { ComponentType } from 'react';
import { Route, Redirect } from 'react-router-dom';

type LoadableComponent<T, P> = ComponentType<
    T extends {
        default: ComponentType<infer Props>;
    }
        ? Props
        : P
>;

type RouteWrapperProps = {
    layout: React.FunctionComponent<any>;
    component: React.FunctionComponent<any> | LoadableComponent<any, any>;
    checkAuth?: boolean;
    path: string;
};

const RouteWrapper = (props: RouteWrapperProps) => {
    const { component: Component, layout: Layout, checkAuth, path, ...rest } = props;

    return (
        <Route
            {...rest}
            render={(renderProps) => {
                if (path === '/*') return <Redirect to={'/'} />;

                // if (checkAuth) {
                //     if (auth.data) {
                //         <Layout>
                //             <Component {...renderProps} />
                //         </Layout>;
                //     } else {
                //         return <Redirect to={'/'} />;
                //     }
                // }

                return (
                    <Layout>
                        <Component {...renderProps} />
                    </Layout>
                );
            }}
        />
    );
};

export default RouteWrapper;

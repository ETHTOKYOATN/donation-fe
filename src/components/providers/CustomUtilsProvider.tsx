import * as React from 'react';
import { createContext, useContext } from 'react';
import { useRef, useEffect } from 'react';

type CustomUtilsContextProviderProps = {
    children: React.ReactNode;
};

const CustomUtilsContext = createContext<{
    usePrevState: any;
}>({
    usePrevState: null,
});

export const useCustom = () => useContext(CustomUtilsContext);

const CustomUtilsContextProvider = (props: CustomUtilsContextProviderProps) => {
    const { children } = props;
    const usePrevState = (state: any) => {
        const ref = useRef(state);
        useEffect(() => {
            ref.current = state;
        }, [state]);
        return ref.current;
    };

    return <CustomUtilsContext.Provider value={{ usePrevState }}>{children}</CustomUtilsContext.Provider>;
};

export default CustomUtilsContextProvider;

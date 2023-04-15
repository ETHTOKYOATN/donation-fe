import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';

import rootReducer from '@/reducers';
import { configureStore } from '@reduxjs/toolkit';
import ProvidersWrapper from '@/components/providers/ProvidersWrapper';

import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';

const store = configureStore({
    reducer: rootReducer,
});

const run = async () => {
    const container = document.getElementById('root') as HTMLElement;
    const root = ReactDOM.createRoot(container);

    root.render(
        <Provider store={store}>
            <ProvidersWrapper>
                <App />
            </ProvidersWrapper>
        </Provider>,
    );
    reportWebVitals();
};

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
run();

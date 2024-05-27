import styles from './app.module.scss';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { store, persistor } from '../src/redux/store/store';
import TheHeader from '../src/components/TheHeader/TheHeader';
import Home from '../src/pages/Home/Home';
import Card from '../src/pages/Card/Card';
import PreSignUp from './pages/PreSignUp/PreSignUp';
import SignUp from './pages/SignUp/SignUp';
import SignIn from './pages/SignIn/SignIn';
//import axios from "axios";
//import { useForm } from 'react-hook-form';
//import * as Yup from "yup";

function App() {

    const paths = {
        preSignUp: "presign-up",
        sigUp: "/sign-up",
        signIn: "/sign-in",
        home: "/",
        card: "/card"
    };

    const routes = [
        { path: paths.preSignUp, element: <PreSignUp /> },
        { path: paths.sigUp, element: <SignUp /> },
        { path: paths.signIn, element: <SignIn /> },
        { path: paths.home, element: <Home /> },
        { path: paths.card, element: <Card /> },
    ];

    return (
        <div className={styles.app}>
            <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                    <TheHeader />
                    <main className={styles.main}>
                        <Routes>
                            {routes.map((route, index) => (<Route key={index} path={route.path} element={route.element} />))}
                        </Routes>
                    </main>
                </PersistGate>
            </Provider>
        </div>
    );
}

export default App;

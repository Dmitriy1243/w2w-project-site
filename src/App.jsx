import styles from './app.module.scss';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { store, persistor } from '../src/redux/store/store';
import Home from '../src/pages/Home/Home';
import Card from '../src/pages/Card/Card';
import SignUpCreate from './pages/SignUpCreate/SignUpCreate';
import SignIn from './pages/SignIn/SignIn';
import  Quiz from './pages/Quiz/Quiz';
import Chat from './pages/Chat/Chat';
import UserAgreements from './pages/UserAgreements/UserAgreements';
import PolicyProcessingPersonalDataDocument from './pages/PolicyProcessingPersonalDataDocument/PolicyProcessingPersonalDataDocument';
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';


function App() {

    const navigate = useNavigate();

    useEffect(() => {
        if(true)
        navigate('/signUp-Create');
    }, [])

    const paths = {
        firstPage: "*",
        signUpCreate: "/signUp-Create",
        userAgreements: "/signUp-Create/user-agreements",
        policyPersonalData: "signUp-Create/policy-personalData",
        //signIn: "/signIn",
        //home: "/",
        //card: "/card",
        //quiz: "/quiz",
        //chat: "/websocket"
    };

    const routes = [
        { path: paths.signUpCreate, element: <SignUpCreate /> },
        { path: paths.userAgreements, element: <UserAgreements /> },
        { path: paths.policyPersonalData, element: <PolicyProcessingPersonalDataDocument /> },
        //{ path: paths.signIn, element: <SignIn /> },
        //{ path: paths.home, element: <Home /> },
        //{ path: paths.card, element: <Card /> },
        //{ path: paths.quiz, element: <Quiz /> },
        //{ path: paths.chat, element: <Chat /> },
    ];

    return (
        <div className={styles.app}>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
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

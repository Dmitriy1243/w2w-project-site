import styles from './app.module.scss';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { store, persistor } from '../src/redux/store/store';
import Home from '../src/pages/Home/Home';
import Card from '../src/pages/Card/Card';
import SignUp from './pages/SignUp/SignUp';
import SignIn from './pages/SignIn/SignIn';
import  Quiz from './pages/Quiz/Quiz';
import Chat from './pages/Chat/Chat';
import UserAgreements from './pages/UserAgreements/UserAgreements';
import PolicyPersononalInfo from './pages/PolicyPersononalInfo/PolicyPersononalInfo';




function App() {

    const paths = {
        firstPage: "*",
        signUp: "/sign-up",
        userAgreements:"/sign-up/user-agreements",
        policyPersononalInfo: "/sing-up/policy-persononal-info"
        //signIn: "/sign-in",
        //home: "/",
        //card: "/card",
        //quiz: "/quiz",
        //chat: "/websocket"
    };
//<Route path="*" element={<Navigate to ="/products" />}/>
    const routes = [
        {path: paths.firstPage, element: <Navigate to ="/sign-up" /> },
        { path: paths.signUp, element: <SignUp /> },
        { path: paths.userAgreements, element: <UserAgreements /> },
        { path: paths.policyPersononalInfo, element: <PolicyPersononalInfo /> },
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

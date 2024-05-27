import './App.css';
import styles from './app.module.scss';
import { Routes, Route } from 'react-router-dom';
import TheHeader from '../src/components/TheHeader/TheHeader';
import Home from '../src/pages/Home/Home';
import Card from '../src/pages/Card/Card';
import SignUp from './pages/SignUp/SignUp';
import SignIn from './pages/SignIn/SignIn';
//import axios from "axios";
//import { useForm } from 'react-hook-form';
//import * as Yup from "yup";

function App() {

    const paths = {
        sigUp: "/sign-up",
        signIn: "/sign-in",
        home: "/",
        card: "/card"
    };

    const routes = [
        { path: paths.sigUp, element: <SignUp /> },
        { path: paths.signIn, element: <SignIn /> },
        { path: paths.home, element: <Home /> },
        { path: paths.card, element: <Card /> },
    ];

    return (
        <div className="App">
            <TheHeader />
            <main className={styles.main}>
                <Routes>
                    {routes.map((route, index) => (<Route key={index} path={route.path} element={route.element} />))}
                </Routes>
            </main>
        </div>
    );
}

export default App;

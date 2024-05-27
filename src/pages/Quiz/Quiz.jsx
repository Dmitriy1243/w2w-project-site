import styles from './quiz.module.scss';
import Button from '../../components/Button/Button';
import Question1 from '../../components/QuestionsQuiz/Question1/Question1';
import Question2 from '../../components/QuestionsQuiz/Question2/Question2';
import Question3 from '../../components/QuestionsQuiz/Question3/Question3';
import { useState } from 'react';


const Quiz = () => {

    const [state, setState] = useState(1);

    const handlePlus = () => {
        setState(state + 1)
        if (state >= 3) {
            setState(1)
        }
    };

    const handleMinus = () => {
        setState(state - 1)
        if (state <= 1) {
            setState(3)
        }
    };

    return (
        <>
            <h1>Квиз</h1>
            <div className={styles.container}>
                {state === 1 && <Question1/>}
                {state === 2 && <Question2/>}
                {state === 3 && <Question3/>}
            </div>
            <div className={styles.wrapperButtons}>
                <Button className={styles.button} name={'Назад'} click={handleMinus}/>
                <Button className={styles.button} name={'Следующий'} click={handlePlus}/>
            </div>
        </>
    )
};

export default Quiz;
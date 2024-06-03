import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Cross from '../Svg/Cross';
import styles from './modal.module.scss';
import { useDispatch } from 'react-redux';
import { modalPersonalDatalReducer } from '../../redux/slices/informationSlice';


const box = {
    display: 'flex',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 327,
    height: 176,
    bgcolor: 'background.paper',
    border: '1px solid #000',
    borderRadius: 6,
    boxShadow: 24,
    p: 2,
    marginBlock: 0,
};



export default function ModalPersonalDataDocument({ open }) {

    const dispatch = useDispatch();

    const closeModal = () => {
        dispatch(modalPersonalDatalReducer(false));
    };

    return (
        <div>
        <Modal
            open={open}
            //onClose={closeModal}
            aria-describedby="modal-modal-description"
        >
            <Box sx={box}>
                <p id="modal-modal-description" className={styles.text}>
                Персона́льные данные (сокр. ПД) или личностные данные — сведения, относящиеся к прямо или косвенно определённому или определяемому физическому лицу (субъекту персональных данных), которые могут быть предоставлены другим лицам.
                </p>
                <div className={styles.cross}><Cross click={closeModal}/></div>
            </Box>
        </Modal>
        </div>
    );
}
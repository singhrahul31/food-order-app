import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';

const Backdrop = props => {
    return <div className={classes.backdrop} onClick={props.onHideCart}></div>
};

const ModalOverlay = props => {
    return <div className={classes.modal}>
        <div className='model-content'>{props.children}</div>
    </div>
};

const overlayElm = document.getElementById("overlays");

const Modal = props => {
    return <Fragment>
        {ReactDOM.createPortal(<Backdrop onHideCart={props.onHideCart}/>, overlayElm)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, overlayElm)}
    </Fragment>
}

export default Modal;
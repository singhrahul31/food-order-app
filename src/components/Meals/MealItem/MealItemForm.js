import { useState, useRef } from 'react';
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';

const MealItemForm = props => {
    const inputRef = useRef();

    const [formIsValid, setFormIsValid] = useState(true);
    const submitHandler = event => {
        event.preventDefault();

        const inputAsString = inputRef.current.value;
        const inputNumber = +inputAsString;

        if(inputAsString.trim().length === 0 || inputNumber < 1 || inputNumber > 5) {
            setFormIsValid(false);
            return;
        }

        props.onAddItem(inputNumber);
    };
    return <form className={classes.form} onSubmit={submitHandler}>
        <Input ref={inputRef} label="Amount" input={{
            id : "amount_" + props.id,
            type: 'number',
            min: '1',
            max: '5',
            defaultValue: '1'
        }}/>
        <button>+ Add</button>
        {!formIsValid ? <p>Please enter a valid quantity</p>: ''}
    </form>
};

export default MealItemForm;
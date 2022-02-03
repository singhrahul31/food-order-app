import classes from './Header.module.css';
import mainImage from '../../assets/meals.jpeg';
import HeaderCartButton from './HeaderCartButton';
const Header = props => {
    return <header>
        <div className={classes.header}>
            <h2>React Meals</h2>
            <HeaderCartButton onShowCart={props.onShowCart}/>
        </div>       
        <div className={classes.mainImage}>
            <img src={mainImage} alt="Background"/>
        </div>
        
    </header>
    
};

export default Header;
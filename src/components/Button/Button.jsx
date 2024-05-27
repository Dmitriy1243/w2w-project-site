const Button = ({ name, className, click }) => {

    return (
        <button className={className} onClick={click}>{name}</button>
    )
};

export default Button;
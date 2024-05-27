const Button = ({ name, className, click, type }) => {

    return (
        <button className={className} onClick={click} type={type}>{name}</button>
    )
};

export default Button;
import { memo } from "react";


export default memo(
    ({register, type, className, value, change, placeholder, name, ...rest}) => {

    return (
        <input type={type} className={className} value={value} onChange={change} placeholder={placeholder} {...register} {...rest}/>
    );
}
);
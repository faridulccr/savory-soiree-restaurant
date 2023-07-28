const Input = ({ type, name, label, placeholder, children, ...rest }) => {
    return (
        <div className="form-control relative">
            <label className="label font-semibold">
                <span className="label-text">{label}</span>
            </label>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                className="input input-bordered"
                required
                {...rest}
            />
            {children}
        </div>
    );
};

export default Input;

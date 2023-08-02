const Button = ({text, clickHandler, id}) => {
    return (
        <button key={id} onClick={clickHandler}>
            {text}
        </button>
    )
}

export default Button
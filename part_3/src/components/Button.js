const Button = ({text, clickHandler, id}) => {
    console.log(text, " button clicked");

    return (
        <button key={id} onClick={clickHandler}>
            {text}
        </button>
    )
}

export default Button
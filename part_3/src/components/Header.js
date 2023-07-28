import Content from "./Content";

const Header = (props) => {
    const text = props.text;
    return (
        <div>
            <h1>{text}</h1>
        </div>
    )

}

export default Header
import Content from "./Content";

const Header = (props) => {
    const text = props.text;
    return (
        <div>
            <h2>{text}</h2>
        </div>
    )

}

export default Header
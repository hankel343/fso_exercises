import '../index.css';

const Notification = ({ message }) => {
    if (message === null || message == '') {
        return null;
    }

    console.log(message);
    const keyword = message.split(' ')[0];
    console.log("styling according to keyword: ", keyword);
    if (keyword === 'Added') {    
        return (
            <div className='success'>
                {message}
            </div>
        )
    } else {
        return (
            <div className='error'>
                {message}
            </div>
        )
    }
}

export default Notification



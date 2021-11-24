/* SCSS/CSS: */
import './user-message.scss';

/* Other Components: */

/* Hooks: */

/* Actions: */

/* Images: */

/* Other .js Files: */


const UserMessage = ({ text, type }) => {

    const messageType = type && type === 'error'
        ? 'error'
        : 'confirm';


    return (
        <span className={ `user-message ${ messageType }` }>
            { text }
        </span>
    )
}


export default UserMessage;
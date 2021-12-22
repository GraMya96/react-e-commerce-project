/* SCSS/CSS: */
import './user-message.scss';

/* Other Components: */

/* Hooks: */

/* Actions: */

/* Images: */

/* Other .js Files: */


const UserMessage = ({ text, type, marginTop, marginBottom }) => {

    const messageType = type && type === 'error'
        ? 'error'
        : 'confirm';

    const marginT = marginTop
        ? 'margin-top'
        : ''

    const marginB = marginBottom
    ? 'margin-bottom'
    : ''

    return (
        <span className={ `user-message ${ messageType } ${ marginT } ${ marginB }` }>
            { text }
        </span>
    )
}


export default UserMessage;
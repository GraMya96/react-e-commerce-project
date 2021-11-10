import React from 'react';
import "./menu-item.scss";
import { withRouter } from 'react-router';


const MenuItem =  ( { title, imageUrl, size, history, linkUrl, match } )  => {

    const menuItemStyle = {
        backgroundImage : "url('" + imageUrl + "')"
    }

    return (

        <div
            className={ "menu-item " + size }
            onClick={() => {
                history.push( match.url  + linkUrl )
            }}>
                <div
                    className="background-image"
                    style={ menuItemStyle }>
                        <div className="content">
                            <h1 className="title">{ title.charAt(0).toUpperCase() + title.slice(1) }</h1>
                            <span className="subtitle">SHOP NOW</span>
                        </div>
                </div>
        </div>

    )

}


export default withRouter( MenuItem );
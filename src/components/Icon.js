import React, { Component } from 'react';

class Iconbox extends React.Component {
    render() {
        return (
            <div className="iconbox">
                <img src="http://iconshow.me/media/images/ui/ios7-icons/png/512/chatbubble-outline.png"
                    className="icon" />
                <span className="iconword">2</span>

                <img src="https://png.icons8.com/material/1600/retweet.png"
                    className="icon" />
                <span className="iconword">47</span>

                <img src="https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678087-heart-512.png"
                    className="icon" />
                <span className="iconword">190</span>

                <img src="http://icons.iconarchive.com/icons/custom-icon-design/mono-general-2/512/mail-icon.png"
                    className="icon" />
            </div>
        )
    }
}
export default Iconbox;
import React from 'react';
import DATA from '../CardList';
import Iconbox from '../components/Icon';
const profilecard = DATA.map((profileimage, i) => {
    return (
        <div className="adbox-inner">
            <div className="text-main">
                <p className="text-heading">{DATA[i].author}</p>
                <p className="text-inner">{DATA[i].bio}</p>
            </div>
            <img src={DATA[i].adpic} className="image-banner" />
            <Iconbox />
            <div className="wordbox">
                <span>What a GOOD choice!</span>
                <p>Can't pry yourself away from the tutorials? The cure is to make tiny little experiment apps. </p>
                <p>Cookie.com</p>
            </div>
        </div>
    )
})

const AdBox = (props) => {
    return (
        <div className="adbox">
            {profilecard}
        </div>
    )
}

export default AdBox;
import React from 'react';
import cardimg from '../../assets/card_images_v0/A Bear With a Briefcase.png';

function Unamused_Home(){
    document.title="Unamused Home"
    return(
        <a>
            <h1>Hewwo?</h1>
            <img height={cardimg.height} width={cardimg.width} src={cardimg}/>
        </a>
    );
}

export default Unamused_Home
import React from 'react';
import Header from '../../components/header.js';

import cardimg from '../../assets/card_images/A Bear With a Briefcase.png';

function Unamused_Home(){
    document.title="Unamused Home"
    return(
        <a>
            <Header></Header>
            <h1>Hewwo?</h1>
            <img height={cardimg.height} width={cardimg.width} src={cardimg}/>
        </a>
    );
}

export default Unamused_Home
import React, { useEffect, useState } from "react";

const imageUrl1 = 'https://api.scryfall.com/cards/random?q=t%3Aequipment+c%3Ac+r%3Ac+-is%3Adigital&unique=cards&format=image';
const imageUrl2 = 'https://api.scryfall.com/cards/random?q=t%3Aequipment+c%3Ac+r%3Ac+-is%3Adigital&unique=cards&format=image';


function CurmCommon(){
    const [img1, setImg1] = useState();
    const [img2, setImg2] = useState();
    document.title="Curm Common"

    const fetchImage1 = async () => {
        const res = await fetch(imageUrl1);
        const imageBlob = await res.blob();
        const imageObjectURL = URL.createObjectURL(imageBlob);
        setImg1(imageObjectURL);
    };

    const fetchImage2 = async () => {
        const res = await fetch(imageUrl2);
        const imageBlob = await res.blob();
        const imageObjectURL = URL.createObjectURL(imageBlob);
        setImg2(imageObjectURL);
    };

    useEffect(() => {
        fetchImage1();
        fetchImage2();
    }, []);    

    return(
        <a>
            <img src={img1} alt="icons" />
            <img src={img2} alt="icons" />
        </a>
    );
}

export default CurmCommon
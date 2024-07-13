import React, { useEffect, useState } from "react";
import "./test.css";

export const Banner = () => {

    // let fetchRes= fetch('https://api.sampleapis.com/countries/countries')
    // fetchRes.then(res =>
    //     res.json()).then(d => {
    //         console.log(d)
    //         let populationCount = d
    //         .filter((pop)=>pop.population >1000000000)
    //         .map((pops)=> `${pops.name}`)
    
    //         console.log(populationCount)
    //     })
        
       
    
    const[data, getData] = useState()
    // function countryData() {

    // }
    useEffect(()=>{
        let fetchUrl = fetch('https://api.sampleapis.com/countries/countries')
            fetchUrl.then(response => response.json())
            .then(data => getData(data));
            console.log(data);
    }, [])
  return (
    <>
    <div>
        {/* {data.map((conData)=> {
            return `${conData.id}`
        })} */}
    </div>
        <div className="mainBanner">
            <div className="textBAnner">
                <p className="text">Innovative solution oriented approach</p>
            </div>
            <div className="imageBanner">
                <img
                className="imageSize"
                src="https://cdn.pixabay.com/photo/2013/07/12/17/51/linked-152575_1280.png"
                alt="banner image"
                />
            </div>
        </div>
    </>

  );
};

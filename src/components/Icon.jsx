import React, { useState, useEffect } from "react";
// import { Context } from "react";

// import requireContext from "require-context";
import listReactFiles from 'list-react-files'
// import fs from fs

export default function Icon({ size, category }) {
    // console.log(props.path)
    // const [images, setImages] = useState({})
    // function importAll(r) {


    //     let images = {};
    //     r.keys().map((item) => { images[item.replace('./', '')] = r(item); });
    //     return images;
    // }

    useEffect(() => {

        listReactFiles('/icons').then(files => console.log(files))
        // console.log(allImages)
        // setImages(allImages)
    }, [])



    let variant
    if (size == 18) {
        variant = "small"
    }
    else if (size == 24) {
        variant = "medium"
    }
    else {
        variant = "large"
    }
    return (
        <div>
            <div>
                {console.log(category, variant)}
                {/* <img src="./src/Icons/Medical/iconABC_small.svg" alt="" /> */}
                {/* <img src={`./src/Icons/${category}/iconABC_${variant}.svg`} alt="" /> */}

                { // <svg xmlns="http://www.w3.org/2000/svg" width="{111}" height="111" viewBox="0 0 24 24" dangerouslySetInnerHTML={{ __html: path }} >
                    //  {/* < path d={props.path} /> */}
                    // {/* {props.path} */}
                    // {/* <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" /> */}
                    //  </svg>
                }
            </div>
            <div>hello</div>
        </div >

    )
}


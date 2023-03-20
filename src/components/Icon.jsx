import React, { useState, useEffect } from "react";
// import { Context } from "react";

// // import requireContext from "require-context";
// import listReactFiles from 'list-react-files'
// // import fs from fs

export default function Icon({ iconName, category, size }) {
    // console.log(props.path)
    let sizeVariant
    if (size == 1) {
        sizeVariant = "small"
    }
    else if (size == 2) {
        sizeVariant = "medium"
    }
    else {
        sizeVariant = "large"
    }
    console.log(iconName, category, sizeVariant)
    // const [images, setImages] = useState({})
    // function importAll(r) {


    //     let images = {};
    //     r.keys().map((item) => { images[item.replace('./', '')] = r(item); });
    //     return images;
    // }

    // useEffect(() => {

    //     listReactFiles('/icons').then(files => console.log(files))
    //     // console.log(allImages)
    //     // setImages(allImages)
    // }, [])

    function handleDownload(event) {
        const a = document.createElement('a');

        a.setAttribute('download', iconName);
        a.setAttribute('href', `./Icons/${category}/${iconName}_${sizeVariant}.svg`);
        a.click();
    }

    function toTitleCase(str) {
        if (!str) {
            return '';
        }
        const strArr = str.split(' ').map((word) => {
            return word[0].toUpperCase() + word.substring(1).toLowerCase();
        });
        return strArr.join(' ');
    }

    return (
        <div className="col-sm-1  icon-container">

            <div className="icon-container-inner">
                <img src={`./Icons/${category}/${iconName}_${sizeVariant}.svg`} alt="" className="display-icon" />

                <div class="icon-label-container">
                    <div className="icon-name">{toTitleCase(iconName)}</div>
                    <button className="download--btn" onClick={handleDownload}>
                        <img src="./public/Assets/Download.svg" alt="" />
                        Download
                    </button>
                </div>
            </div>

        </div >
    )
}

//fetch src
// json . srtingyf bblob to text
// 

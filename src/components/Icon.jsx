import React, { useState, useEffect } from "react";




export default function Icon({ iconName, category, size  }) {
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


    const [Code, setCode] = useState()
 


    function copyContent() {
        fetch(`./Icons/${category}/${iconName}_${sizeVariant}.svg`)
            .then((response) => response.text())
            .then((code) => {

                console.log("writing inside response", code)
                navigator.clipboard.writeText(code)
                console.log(Code)
            })
    }



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

    function snackbarCopy() {
        var x = document.getElementById("snackbarCopy");
        x.className = "show";
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 1000);
      }
    function snackbarDownload() {
        var x = document.getElementById("snackbarDown");
        x.className = "show";
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 1000);
      }



    return (
        <div className="icon-container">

            <div className="icon-container-inner">

                <div className="display-icon">
                <img src={`./Icons/${category}/${iconName}_${sizeVariant}.svg`} alt="img"  />
                </div>
                <div className="icon-label-container">


                    <div className="icon-name">{toTitleCase(iconName)}</div>


                    <div className="icontiles">
                        <button className="download--btn buttons" onClick={()=>{handleDownload(); snackbarDownload();}}>
                            <svg width="20" className="download-icon" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 13V17C19 17.5304 18.7893 18.0391 18.4142 18.4142C18.0391 18.7893 17.5304 19 17 19H3C2.46957 19 1.96086 18.7893 1.58579 18.4142C1.21071 18.0391 1 17.5304 1 17V13M5 8L10 13M10 13L15 8M10 13V1" stroke="#6AB7FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                            SVG
                        </button>

                        <button className="copy--btn buttons" onClick={()=>{copyContent();snackbarCopy();}}>
                            <svg width="20" className="copy-icon" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 13V17C19 17.5304 18.7893 18.0391 18.4142 18.4142C18.0391 18.7893 17.5304 19 17 19H3C2.46957 19 1.96086 18.7893 1.58579 18.4142C1.21071 18.0391 1 17.5304 1 17V13M5 8L10 13M10 13L15 8M10 13V1" stroke="#6AB7FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>                            Copy
                        </button>
                    </div>
                </div>
            </div>

        </div >
    )
}



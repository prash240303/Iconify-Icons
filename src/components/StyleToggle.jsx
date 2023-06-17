import React from "react";

export default function StyleToggle({ handleStyle, styleValue }) {

    return (


        <div className="toggle-container">
            <div className="radio-tile-group" id="toggle-tile">
                <div className="input-container">
                    <input
                        id="small"
                        type="radio"
                        name="radio"
                        value="1"
                        onClick={handleStyle}
                    />
                    <div className="radio-tile">
                        <svg className="logo" width="26" height="10" viewBox="0 0 27 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25.8332 2.22045L20.1504 5.63317C18.52 6.61234 16.4255 6.30805 15.1411 4.90541L12.9874 2.55346C11.6846 1.1308 9.55208 0.840584 7.91652 1.86336L1.16549 6.08505" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>


                        <label htmlFor="small">Solid</label>
                    </div>
                </div>



                <div className="input-container">
                    <input
                        id="large"
                        type="radio"
                        name="radio"
                        value="2"
                        checked={true && styleValue === "2"}

                        onClick={handleStyle}
                    />
                    <div className="radio-tile">
                        <svg className="logo" width="40" height="17" viewBox="0 0 27 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25.8332 2.22045L20.1504 5.63317C18.52 6.61234 16.4255 6.30805 15.1411 4.90541L12.9874 2.55346C11.6846 1.1308 9.55208 0.840584 7.91652 1.86336L1.16549 6.08505" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>

                        <label htmlFor="large">Outlined</label>
                    </div>
                </div>
            </div>
        </div>




    );
}

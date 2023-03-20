import React, { useState, useEffect } from "react";
export default function Categories({ cat }) {
    function handlecategoryChange(event) {
        cat = event.target.value
    }
    return (
        <div>
            <select id="" onChange={handlecategoryChange}>
                <option value="All">All</option>
                <option value="Communication">Communication</option>
                <option value="School">School</option>
            </select>
        </div>
    )
}
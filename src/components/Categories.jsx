import React from "react";
export default function Categories({ handlecategory }) {

    return (
        <div className="dropdown-categories">
            <span class="custom-arrow"></span>
            <select>
                <option value="">All Icons</option>
                <option value="">Communication</option>
                <option value="">Office</option>
                <option value="">Education</option>
                <option value="">Medical</option>
            </select>
        </div>
    )
}
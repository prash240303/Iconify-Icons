import React, { useEffect, useState } from "react";
import "./App.css";
import IconData from "./IconData";
import Icon from "./components/Icon";
// import Categories from './components/Categories'

export default function App() {
  const [size, setSize] = React.useState(3);
  const [category, setCategory] = React.useState("All");
  const [iconInfo, setIconInfo] = React.useState(IconData);
  const [search, setSearch] = React.useState("");
  console.log(search);

  function filterByCategory(item) {
    if (category === "All") {
      return item;
    }
    return item.category === category;
  }
  function filterBySearch(item) {
    let modifiedQuery = search.trim().toLocaleLowerCase();
    if (modifiedQuery === "") {
      return true;
    }
    return (
      item.name.includes(modifiedQuery) ||
      item.tags.join(",").includes(modifiedQuery)
    );
  }
  const [queryData, setQueryData] = useState([]);
  useEffect(() => {
    setQueryData(IconData.filter(filterBySearch));
  }, [search]);
  //  const queryData = IconData.filter(filterBySearch)
  const filteredData = queryData.filter(filterByCategory);
  const Icons = filteredData.map((item, index) => {
    return (
      <Icon
        key={index}
        iconName={item.name}
        category={item.category}
        size={size}
      />
    );
  });

  function handleSizeChange(event) {
    setSize(event.target.value);
  }

  function handlecategoryChange(event) {
    setCategory(event.target.value);
  }

  function handleSearchQuery(event) {
    // console.log(event.target.value)
    setSearch(event.target.value);
  }
  return (
    <div className="main-parent">
      <div className="controls">
        {/* <Categories cat={category} /> */}
        <select id="" onChange={handlecategoryChange}>
          <option value="All">All</option>
          <option value="Communication">Communication</option>
          <option value="School">School</option>
        </select>
        <div className="controls-size-label">Size </div>
        <div class="switch-field">
          <input
            type="radio"
            id="radio-three"
            name="switch"
            value="yes"
            checked
          />
          <label for="radio-three">
            <img src="Icon.svg" alt="" />
            18 px
          </label>
          <input type="radio" id="radio-four" name="switch" value="maybe" />
          <label for="radio-four">
            <img src="Icon.svg" alt="" />
            24 px
          </label>
          <input type="radio" id="radio-five" name="switch" value="no" />
          <label for="radio-five">
            <img src="Icon.svg" alt="" />
            32 px
          </label>
        </div>{" "}
      </div>

      <div className="search-bar">
        <img src="./public/Assets/search.svg" alt="" />
        <div className="search-input">
          <input
            type="text"
            name="search"
            id=""
            placeholder="Search"
            value={search}
            onChange={handleSearchQuery}
          />
        </div>
      </div>

      <div className="row icon">{Icons}</div>
    </div>
  );
}

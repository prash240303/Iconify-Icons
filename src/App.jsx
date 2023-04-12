import React, { useEffect, useState } from "react";
import "./App.css";
import IconData from "./IconData";
import Icon from "./components/Icon";
import Switchtoggle from "./components/SwitchToggle";


export default function App() {
  const [size, setSize] = React.useState("3");
  const [category, setCategory] = React.useState("All");
  const [iconInfo, setIconInfo] = React.useState(IconData);
  const [search, setSearch] = React.useState("");
  // console.log(search);

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
    console.log("size is changed")
    console.log("the new size : " + size)
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
      <div className="settings-control">
        <select id="" onChange={handlecategoryChange}>
          <option value="All">All</option>
          <option value="Communication">Communication</option>
          <option value="School">School</option>
        </select>

        <Switchtoggle handleSize={handleSizeChange} sizeValue={size} />

        <div className="search-bar">
          <img src="./public/Assets/search.svg" />
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
      </div>
      <div className="row icon">{Icons}</div>
    </div>
  );
}

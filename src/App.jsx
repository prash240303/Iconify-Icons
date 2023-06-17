import React, { useEffect, useState } from "react";
import "./App.css";
import IconData from "./IconData";
import Icon from "./components/Icon";
import Switchtoggle from "./components/SwitchToggle";
import Categories from "./components/Categories";
// import StyleToggle from "./components/StyleToggle";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Footer from "./components/footer";
import "./components/Nav.css"
import "./components/Icon.css"
import "./components/Hero.css"
import "./components/Footer.css"



export default function App() {
  const [size, setSize] = React.useState("3");
  const [category, setCategory] = React.useState("All");
  const [iconInfo, setIconInfo] = React.useState(IconData);
  const [search, setSearch] = React.useState("");
  // console.log(search);


  //search filter 
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



  // // style state change
  // const [style, setStyle] = React.useState("2");
  // useEffect(() => {
  //   console.log("style is changed");
  //   console.log("the new  style : " + style);
  // }, [style]);


    //category filter
  //  const queryData = IconData.filter(filterBySearch)
  const filteredData = queryData.filter(filterByCategory);
  const Icons = filteredData.map((item, index) => {
    return (
      <Icon
        key={index}
        iconName={item.name}
        category={item.category}
        size={size}
        // iconStyle={style}
      />
    );
  });

  function handleSizeChange(event) {
    console.log("size is changed");
    console.log("the new size : " + size);
    setSize(event.target.value);
  }

  function handlecategoryChange(event) {
    setCategory(event.target.value);
  }

  function handleSearchQuery(event) {
    // console.log(event.target.value)
    setSearch(event.target.value);
  }

  // function handleStyleChange(event) {
  //   setStyle(event.target.value);
  // }


 

  return (
    <div className="main-parent">
      <Nav/>
      <Hero/>

      <div className="settings-control">
        <Categories handlecategory={handlecategoryChange} />
        <Switchtoggle handleSize={handleSizeChange} sizeValue={size} />
        {/* <StyleToggle handleStyle={handleStyleChange} styleValue={style}/> */}
        <div className="search-bar ">
          <img src="./Assets/search.svg" />
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
      <div className=" icon">
        <div className="row innerIcon-container"> {Icons}</div></div>

        <div id="snackbarCopy">Icon SVG copied !</div>
        <div id="snackbarDown">Icon SVG downloaded !</div>

    {/* <Footer/> */}



  
</div>   
    
  );
}

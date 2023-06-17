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
  let index = 0,
  interval = 1000;

const rand = (min, max) => 
Math.floor(Math.random() * (max - min + 1)) + min;

const animate = star => {
star.style.setProperty("--star-left", `${rand(-10, 100)}%`);
star.style.setProperty("--star-top", `${rand(-40, 80)}%`);

star.style.animation = "none";
star.offsetHeight;
star.style.animation = "";
}

for(const star of document.getElementsByClassName("magic-star")) {
setTimeout(() => {
  animate(star);
  
  setInterval(() => animate(star), 1000);
}, index++ * (interval / 3))
}

 

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

    <h1>
    Thank you for visiting this project  <span class="magic">
    <span class="magic-star">
      <svg viewBox="0 0 512 512">
      <path d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z" />
      </svg>
    </span>
    <span class="magic-star">
      <svg viewBox="0 0 512 512">
      <path d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z" />
      </svg>
    </span>
    <span class="magic-star">
      <svg viewBox="0 0 512 512">
      <path d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z" />
      </svg>
    </span>
    <span class="magic-text"> more improvements and updates comming sooon : ) </span>
  </span>
</h1>

  
</div>   
    
  );
}

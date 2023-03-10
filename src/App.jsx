import React from 'react'
import './App.css'
// import IconData from "./IconData"
import Icon from "./components/Icon"

export default function App() {
  const [size, setSize] = React.useState(18)
  const [categories, setCategories] = React.useState("All")

  // const Icons = IconData.map(item => {
  //   console.log(item.variant)
  //   return (
  //     < Icon
  //       size={item.size}
  //     />
  //   )
  // })




  function handleSizeChange(event) {
    setSize(event.target.value);

  }

  function handleCategoryChange(event) {
    setCategories(event.target.value)
  }


  return (
    <div>
      <h1>hello</h1>
      <div >

        <select name="size" onChange={handleSizeChange} >
          <option value="18">18px</option>
          <option value="24">24px</option>
          <option value="32">32px</option>
        </select>
        <select name="category" id="" onChange={handleCategoryChange}>
          <option value="All">All</option>
          <option value="Medical">Medical</option>
          <option value="School">School</option>
        </select>
      </div>
      <Icon size={size} category={categories} />
    </div >
  )
}



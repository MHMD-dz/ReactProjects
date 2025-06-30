//import {Counter } from "./Counter";
//import { Todo } from "./Todo";
//import { Meal } from "./Meal"
//import { Calculator } from './Calculator'
//import { Ac } from "./Ac";
//import { accordionData } from "./util/content";
//import { Form } from "./Form";
import { useState } from "react";
import { ProductList } from "../src/component/ProductShow/ProductList.jsx";
import data  from "../src/data/Product";
import {Navigation} from "../src/component/Navigation/Navigation.jsx"
import {Recommended} from "../src/component/Recommended/Recommended.jsx"
import {SideBar} from "../src/component/SideBar/SideBar.jsx"
import "../src/index.css"
import { Category } from "../src/component/Category/Category.jsx";
import { Colors } from "../src/component/Colors/Colors.jsx";

const App = () => {

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [qury, setQuery] = useState("");
  const handelInputChange = (event) => {
    setQuery(event.target.value);
  }
  const filterdItems = data.filter((item) => {
    return item.title.toLowerCase().includes(qury.toLowerCase());
  });
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredData = (product , selected , qury ) => {
    let filterdProduct = product ;
    if(qury){
      filterdProduct = filterdItems ;
    }
    if(selected !== "all"){
      filterdProduct = filterdProduct.filter(
        ({category , color , company , newPrice}) => {
          return category === selected || color === selected || company === selected || newPrice === selected;
        }
       )
    }
    return filterdProduct;
  };

  const result = filteredData( data , selectedCategory, qury);

  return (
    <div>
      {/*<Counter />
      <Todo />
      <Meal />
      <Calculator />
      <div className="accordion" >
        {accordionData.map(({title , content }, index) => {
          return (
            <Ac key={Math.random()} title={title} content={content} />
          );
        })}
      </div>
      <Form />*/}


      <SideBar handleChange={handleChange} />
      <Navigation handelInputChange={handelInputChange} qury={qury} />
      <Recommended handleClick={handleClick} />
      <ProductList product={result} />
      
      

    </div>
  )
}

export default App;
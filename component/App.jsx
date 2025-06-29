//import {Counter } from "./Counter";
//import { Todo } from "./Todo";
//import { Meal } from "./Meal"
//import { Calculator } from './Calculator'
//import { Ac } from "./Ac";
//import { accordionData } from "./util/content";
//import { Form } from "./Form";
import { ProductList } from "../src/component/ProductShow/ProductList.jsx";
import data  from "../src/data/Product";
import {Navigation} from "../src/component/Navigation/Navigation.jsx"
import {Recommended} from "../src/component/Recommended/Recommended.jsx"
import {SideBar} from "../src/component/SideBar/SideBar.jsx"
import "../src/index.css"

const App = () => {
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
      <SideBar />
      <Navigation />
      <Recommended />
      <ProductList props={data} />
      
      

    </div>
  )
}

export default App;
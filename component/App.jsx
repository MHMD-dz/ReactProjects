//import {Counter } from "./Counter";
//import { Todo } from "./Todo";
//import { Meal } from "./Meal"
//import { Calculator } from './Calculator'
import { Ac } from "./Ac";
import { accordionData } from "./util/content";

const App = () => {
  return (
    <div style={{width: "500px" , height: "500px"}}>
      {/*<Counter />
      <Todo />
      <Meal />
      <Calculator />*/}
      <div className="accordion" >
        {accordionData.map(({title , content }, index) => {
          return (
            <Ac key={Math.random()} title={title} content={content} />
          );
        })}
      </div>
    </div>
  )
}

export default App;
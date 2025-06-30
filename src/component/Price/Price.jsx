import {Inputs} from "../Inputs"
import "./Price.css"

export const Price = ({handleChange}) => {
  return (
    <div className="ml" >
        <h1 className="ST PT">Price</h1>

          <Inputs handleChange={handleChange} value="all" title="All" name="price" />
          <Inputs handleChange={handleChange} value={50} title="0$ - $50" name="price" />
          <Inputs handleChange={handleChange} value={100} title="$50 - $100" name="price" />
          <Inputs handleChange={handleChange} value={150} title="$100 - $150" name="price" />
          <Inputs handleChange={handleChange} value={200} title="Over $150" name="price" />
          

    </div>
  )
}

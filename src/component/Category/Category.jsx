import {Inputs} from "../Inputs"
import "./Category.css"

export const Category = ({handleChange}) => {
  return (
    <div className="category">
        <h1>Category</h1>
        <div>
          <Inputs handleChange={handleChange} value="all" title="All" name="category" />
          <Inputs handleChange={handleChange} value="sneakers" title="sneakers" name="category" />
          <Inputs handleChange={handleChange} value="flats" title="flats" name="category" />
          <Inputs handleChange={handleChange} value="sandals" title="sandals" name="category" />
          <Inputs handleChange={handleChange} value="heels" title="heels" name="category" />
        </div>
    </div>
  )
}

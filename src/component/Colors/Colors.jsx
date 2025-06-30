import {Inputs} from "../Inputs"

export const Colors = ({handleChange}) => {
  return (
    <div className="ml">
      <h1 className="ST PT">Color</h1>

          <Inputs handleChange={handleChange} value="all" title="All" name="color" />
          <Inputs handleChange={handleChange} value="white" title="white" name="color" />
          <Inputs handleChange={handleChange} value="black" title="black" name="color" />
          <Inputs handleChange={handleChange} value="red" title="red" name="color" />
          <Inputs handleChange={handleChange} value="blue" title="blue" name="color" />
          <Inputs handleChange={handleChange} value="green" title="green" name="color" />
    </div>
  )
}

import "./SideBar.css"
import {Category}  from "../Category/Category"
import {Price} from "../Price/Price"
import {Colors} from "../Colors/Colors"

export const SideBar = ({handleChange}) => {
  return (
    <>
        <section className="sideBar" >
            <div className="logoContain">
                <h1>🛒</h1>
            </div>

            <Category handleChange={handleChange} />
            <Price handleChange={handleChange} />
            <Colors handleChange={handleChange} />

        </section>
    </>
  )
}

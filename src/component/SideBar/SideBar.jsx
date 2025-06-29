import "./SideBar.css"
import {Category}  from "../Category/Category"
import {Price} from "../Price/Price"
import {Colors} from "../Colors/Colors"

export const SideBar = () => {
  return (
    <>
        <section className="sideBar" >
            <div className="logoContain">
                <h1>🛒</h1>
            </div>

            <Category />
            <Price />
            <Colors />

        </section>
    </>
  )
}

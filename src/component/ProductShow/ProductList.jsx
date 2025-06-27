import { ProductCart } from '../ProductCart/ProductCart.jsx'
import "./Style.css"

export const ProductList = ({props}) => {
  return (
    <div className="productList" >
        {
            props.map((item) => {
                return <ProductCart prop={item} key={item.id} />
            })
        }
    </div>
  )
}

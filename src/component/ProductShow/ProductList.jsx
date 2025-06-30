import { ProductCart } from '../ProductCart/ProductCart.jsx'
import "./Style.css"

export const ProductList = ({product}) => {
  return (
    <div className="productList" >
        {
            product.map((item) => {
                return <ProductCart product={item} key={item.id} />
            })
        }
    </div>
  )
}

import "./Recommended.css"


export const Recommended = ({handleClick}) => {
  return (
    <>
        <div className="recomand">
            <h1>Recommended</h1>
            <div className="recomandBtns">
                <button onClick={handleClick} value="all" className="btns" >All Products</button>
                <button onClick={handleClick} value="Adidas" className="btns" >Adidas</button>
                <button onClick={handleClick} value="Nike" className="btns" >Nike</button>
                <button onClick={handleClick} value="puma" className="btns" >puma</button>
                <button onClick={handleClick} value="Vans" className="btns" >Vans</button>
            </div>
        </div>
    </>
  )
}

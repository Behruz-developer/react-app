import infoStore from "../store/infoId";

const Nav = () => {
  const { setSearching, select, setSelect } = infoStore()

  const changeSelect = (e: any) =>{
    setSelect(e.target.value)
  }
  
  return (
    <nav className="nav">
      <div className="container">
        <div className="nav_box">
          <input type="text" className="nav_input" placeholder="search" onChange={(e) => setSearching(e.target.value)} />
          <div className="nav_card">
            <select value={select} className="nav_select" onChange={changeSelect}>
              <option value="all" className="nav_option">All</option>
              <option value="name" className="nav_option">Name</option>
              <option value="price" className="nav_option">Price</option>
              <option value="stock" className="nav_option">Stock</option>
            </select>
            {/* <div className="nav_basket">
              <FaShoppingBasket className="nav_basket_icon" />
              <p className="nav_basket_number">{card.length}</p>
            </div> */}
          </div>
        </div>  
      </div>
    </nav>
  )
};

export default Nav
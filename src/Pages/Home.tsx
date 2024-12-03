import Pagination from "../Components/Pagination"
import Card from "./Card"

const Home = () => {
    return (
        <div>
            <Card />
            <div className="products_btns">
                <Pagination />
            </div>
        </div>
    )
}

export default Home
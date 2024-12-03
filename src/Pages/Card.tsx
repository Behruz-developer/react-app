import { getData } from "../Api/getProducts";
import infoStore from "../store/infoId";
import Loading from "../Components/Loading";
import Pagination from "../Components/Pagination";
import { Link } from "react-router-dom";

const Card = () => {
  const { page, searching, select } = infoStore();
  const { data, isLoading } = getData(page * 12);



  const data2 = data ? data.map((obj) => ({ ...obj, amount: 0 })) : [];

  const filterCard = data2?.filter((obj) => {
    if (searching.trim() == '') {
      return obj;
    } else {
      return obj.title?.toLocaleLowerCase().includes(searching.toLocaleLowerCase());
    }
  });
  const sortedCard = filterCard?.sort((a, b) => {
    if (select === "name") {
      return a.title?.localeCompare(b.title || '') || 0;
    } else if (select === "price") {
      return a.price - b.price;
    } else if (select === "stock") {
      return b.stock - a.stock;
    } else {
      return 0; 
    }
  });
  // const addCard = (id: number) => {
  //   const existingProduct = card.find((obj) => obj.id === id);

  //   let updatedCard: ICardItem[];

  //   if (existingProduct) {
  //     updatedCard = card.map((obj) =>
  //       obj.id === id
  //         ? { ...obj, amount: obj.amount + 1, price: obj.price + (obj.price / obj.amount) }
  //         : obj
  //     );
  //   } else {
  //     const newProduct = data2.find((obj) => obj.id === id);
  //     if (newProduct) {
  //       updatedCard = [...card, { id: newProduct.id, amount: 1, price: newProduct.price }];
  //     } else {
  //       updatedCard = [...card];
  //     }
  //   }
  //   setCard(updatedCard);
  // };


  if (isLoading)
    return (
      <div>
        <Loading />
      </div>
    );

  if (filterCard) {
    return (
      <div className="products">
        <div className="container">
          <div className="products_box">
            {sortedCard.map((obj) => (
              <Link className="products_card" key={obj.id} to={`/${obj.id}`}>
                <img className="products_img" src={obj.images[0]} alt="" />
                <h2 className="products_title">{obj.title}</h2>
                <p className="products_text">{obj.description}</p>
                <p className="products_price">
                  price: <span>{obj.price}$</span>{" "}
                </p>
                <p className="products_stock">
                  stock: <span>{obj.stock}</span>
                </p>
                {/* <button className="products_buy" onClick={() => addCard(obj.id)}>buy</button> */}
              </Link>
            ))}
          </div>
          <div className="products_btns">
            <Pagination />
          </div>
        </div>
      </div>
    );
  }
};

export default Card;

import { useNavigate, useParams } from "react-router-dom"
import { getData } from "../Api/getProducts"
import infoStore from "../store/infoId";
import { useState } from "react";

const CardId = () => {
  const { page } = infoStore();
  const { data } = getData(page * 12)
  const { id } = useParams();
  const navigate = useNavigate();
  const [miniImage, setMiniImage] = useState(null);


  let getCard;
  if (data && id) {
    const numericId = parseInt(id);
    getCard = data.find(obj => obj.id === numericId);
  }


  const handleImageClick = (image: any) => {
    setMiniImage(image);
  };


  if (getCard) {
    const mainImage = miniImage || getCard.images[0];
    return (
      <div className="cardid">
        <div className="cardid_box">
          <div className="cardid_card_left">
            <div className="cardid_card_left_box">
              {getCard.images.map((image) => (
                <img
                  className="cardid_img_mini"
                  src={image}
                  alt=''
                  onClick={() => handleImageClick(image)}
                />
              ))}
            </div>
            <img className="cardid_img" src={mainImage} alt="" />
          </div>
          <div className="cardid_card">
            <h1 className="cardid_title">{getCard.title}</h1>
            <p className="cardid_text">Description: <span>{getCard.description}</span></p>
            <p className="cardid_text">Category: <span>{getCard.category}</span></p>
            <p className="cardid_text">Price: <span>{getCard.price}$</span></p>

            <div className="cardid_btns">
              <button className="cardid_btn">Buy now</button>
              <a className="cardid_link" href="" onClick={() => navigate('/')} >Main Page</a>
            </div>
          </div>
        </div>
      </div>

    )
  }

}

export default CardId

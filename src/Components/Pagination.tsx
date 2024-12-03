import ReactPaginate from "react-paginate"
import infoStore from "../store/infoId";
import { useEffect, useState } from "react";

const Pagination = () => {
  const [marginPagesDisplayed, setMarginPagesDisplayed] = useState(5);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 570) {
        setMarginPagesDisplayed(1);
      } else if (window.innerWidth <= 700) {
        setMarginPagesDisplayed(1);
      } else {
        setMarginPagesDisplayed(5);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  const { setPage } = infoStore()
  const handleClick = (info: { selected: number }) => {
    setPage(info.selected)
  }
  return (
    <ReactPaginate
      pageCount={10}
      nextLabel={'>'}
      previousLabel={'<'}
      containerClassName="paginate"
      activeLinkClassName="paginate_active"
      pageLinkClassName="paginate_link"
      previousClassName="paginate_prev"
      nextClassName="paginate_next"
      breakClassName="paginate_break"
      marginPagesDisplayed={marginPagesDisplayed}
      onPageChange={handleClick}

    />
  )
}

export default Pagination
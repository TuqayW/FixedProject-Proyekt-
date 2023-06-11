import React, { useEffect, useState } from "react";
import "./style.scss";
import Nav from "../../components/Nav";
import { productsJson } from "../../Data/products";

const OneProductPage = () => {
  const [selectedItem, setSelectedItem] = useState({});

  const getData = async () => {
    const x = await localStorage.getItem("productId");
    const findProduct = productsJson.find((item) => item.id == x);
    setSelectedItem(findProduct);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Nav />
      {selectedItem && (
        <div className="productPage">
          <div className="img-s">
            <img src={selectedItem.img1} alt="" />
            <img src={selectedItem.img2} alt="" />
          </div>
          <div className="txt-s">
            <div className="txt-c">
              <h1>Broken T Shirt</h1>
              <p>
                This black t-shirt is constructed using fine cotton poplin on
                the front panel for a refined, elegant finish and a contrasting
                textural pique knit on the reverse for comfort and detail. The
                fit is tailored, with both fabrics adding elements of stretch
                for increased comfort.
              </p>
              <ul>
                <li>SKU: <span>3</span></li>
                <li>Categories: <span>Men, T Shirts</span></li>
                <li>Tags: <span>broken, tshirt</span></li>
              </ul>
              <h1>{selectedItem.category}</h1>
              <div className="btn-s">
                <input type="number" />
                <button>Add to card</button>
              </div>
              <span>Size Guide</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OneProductPage;
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
              <h1>{selectedItem.name}</h1>
              <p>{selectedItem.about}</p>
              <ul>
                <li>SKU: <span>{selectedItem.sku}</span></li>
                <li>Categories: <span>{selectedItem.category}</span></li>
                <li>Tags: <span>{selectedItem.tags}</span></li>
              </ul>
              <h1 className="price">${selectedItem.price}</h1>
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
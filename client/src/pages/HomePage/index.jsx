import Nav from "../../components/Nav";
import "./style.scss";

import p1_1 from '../../assets/products/p1/img1.jpg'
import p1_2 from '../../assets/products/p1/img2.jpg'
import p2_1 from '../../assets/products/p2/img1.jpg'
import p2_2 from '../../assets/products/p2/img2.jpg'


const HomePage = () => {
  return (
    <div>
      <Nav />
      <div className="productsPage">
        <h2>New Arrivals</h2>
        <p>Latest From our store</p>
        <div className="container">
          <div className="card">
            <img src={p1_1} alt="" />
            <div className="txt">
              <h2>Broken T shirt</h2>
              <h2>$9</h2>
            </div>
            <button>Men, T shirts</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

import Nav from "../../components/Nav";
import "./style.scss";
import { productsJson } from '../../Data/products'
import p1_1 from "../../assets/products/p1/img1.jpg";
import p1_2 from "../../assets/products/p1/img2.jpg";
import ProductCard from "../../components/ProductCard";
import girl from "../../assets/home/home_slider_2.png"
import men from "../../assets/categories/men.png"
import cap from "../../assets/categories/cap.png"
import women from "../../assets/categories/women.png"
import img1 from "../../assets/news/1.jpg"
import img2 from "../../assets/news/2.jpg"
import img3 from "../../assets/news/3.jpg"
import img4 from "../../assets/news/4.jpg"
import "../../fonts/Fontspring-DEMO-functionpro-book.otf"
import "../../fonts/Fontspring-DEMO-functionpro-light.otf"

const HomePage = () => {
  return (
    <div className="cont">
      <div className="intro">
        <Nav />
        <img className="girl" src={girl} alt="" />
        <h1>Monochrome <br /> Collection</h1>
      </div>
      <section className="productsPage">
        <h2>New Arrivals</h2>
        <p>Latest From our Store</p>
        <div className="container">
          {
            productsJson.map(item => {
              return (
                <ProductCard key={item.id} item={item} />
              );
            })
          }
        </div>
      </section>
      <div className="end">
        <h1 className="more">Show More</h1>
        <div className="cate">
          <div className="w">
            <h1>Women</h1>
            <img src={women} alt="" />
          </div>
          <div className="m">
            <h1>Men</h1>
            <img src={men} alt="" />
          </div>
          <div className="a">
            <h1>Accessories</h1>
            <img src={cap} alt="" />
          </div>
        </div>
        <div className="new">
          <div className="idea">
            <h1>Latest News</h1>
            <p>News, press releases and multimedia</p>
          </div>
          <div className="cards">
            <div className="card">
              <img src={img4} alt="" />
              <p>OCTOBER 22, 2016</p>
              <h1>“Summer Is Not Over Yet” Show</h1>
            </div>
            <div className="card">
              <img src={img3} alt="" />
              <p>SEPTEMBER 12, 2016</p>
              <h1>New York Fashion Show, Looks and More</h1>
            </div>
            <div className="card">
              <img src={img2} alt="" />
              <p>OCTOBER 3, 2016</p>
              <h1>Kids Winter Collection</h1>
            </div>
            <div className="card">
              <img src={img1} alt="" />
              <p>OCTOBER 27, 2016</p>
              <h1>“Want My Look” gymwear editorial</h1>
            </div>
          </div>
        </div>
        <div className="letter">
          <div className="sol">
            <h1>Newsletter</h1>
            <p>Subscribe to our weekly newsletter.</p>
          </div>
          <div className="sag">
            <input placeholder="Type your e-mail..." type="email" />
            <button>Send</button>
          </div>
        </div>
        <div className="shorts">
          
        </div>
      </div>
    </div >
  );
}

export default HomePage
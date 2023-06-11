import Nav from "../../components/Nav";
import "./style.scss";
import {productsJson} from '../../Data/products'
import p1_1 from "../../assets/products/p1/img1.jpg";
import p1_2 from "../../assets/products/p1/img2.jpg";
import ProductCard from "../../components/ProductCard";

const HomePage = () => {
  return (
    <div>
      <Nav />
      <section className="productsPage">
        <h2>New Arrivals</h2>
        <p>Latest From our Store</p>
        <div className="container">
          {
            productsJson.map(item=>{
              return (
                <ProductCard key={item.id} item={item}/>
              );
            })
          }
        </div>
      </section>
    </div>
  );
}

export default HomePage
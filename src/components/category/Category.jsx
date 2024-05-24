import React from "react";
import Image from "next/image";
import Icon1 from "@/assets/Icon1.png";
import Icon2 from "@/assets/Icon2.png";
import Icon3 from "@/assets/Icon3.png";
import Icon4 from "@/assets/Icon4.png";
import "./Category.css";

const Category = () => {
  return (
    <div>
      <section className="category">
        <div className="container">
          <h2 className="category-title">Choose A Catagory</h2>
          <div className="category-cards">
            <div className="category-card">
              <Image src={Icon1} width={48} height={46} alt="category-img" />
              <h3 className="category-text">Business</h3>
              <p className="category-par">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              </p>
            </div>
            <div className="category-card card2">
              <div className="card-img2">
                <Image
                  className="category-img2"
                  src={Icon2}
                  width={23}
                  height={22}
                  alt="category-img"
                />
              </div>
              <h3 className="category-text">Startup</h3>
              <p className="category-par">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              </p>
            </div>
            <div className="category-card">
              <Image src={Icon3} width={48} height={46} alt="category-img" />
              <h3 className="category-text">Economy</h3>
              <p className="category-par">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              </p>
            </div>
            <div className="category-card">
              <Image src={Icon4} width={48} height={46} alt="category-img" />
              <h3 className="category-text">Technology</h3>
              <p className="category-par">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Category;

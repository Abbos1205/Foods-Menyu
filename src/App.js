import React, { Component } from "react";
import Foods from "./components/Foods";

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="">
          <div className="d-flex">
            <img
              className="logo"
              src="https://www.afisha.uz/ui/catalog/2021/06/0078179.jpeg"
              alt=""
            />
            <h1>Bla Bla Bar MENYU</h1>
          </div>
          <input type="text" className="pt-3 mb-4" placeholder="" />
          <button className="btn btn-danger">Search</button>
        </div>
        <div className="wrapper">
          <Foods
            image="https://cdn.tasteatlas.com//images/toplistarticles/08c818739e4b48ce96d319c16f4cc0ca.jpg?w=375&h=280"
            titel="Burgers"
            discription=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.Impus"
          />
          <Foods
            image="https://gloria-club.com/wp-content/uploads/2019/07/sibas1-299x200.jpg"
            titel="Fish"
            discription=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.Impus"
          />
          <Foods
            image="https://flavorverse.com/wp-content/uploads/2019/04/Brazilian-Drinks-299x200.jpg"
            titel="Juice"
            discription=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.Impus"
          />
          <Foods
            image="https://www.news-medical.net/images/Article_Images/ImageForArticle_22117_16448530819589531.jpg"
            titel="Sausage"
            discription=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.Impus"
          />
          <Foods
            image="https://images.medicinenet.com/images/article/main_image/which-foods-are-the-easiest-to-digest.jpg"
            titel="Fruits"
            discription=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.Impus"
          />
          <Foods
            image="https://www.foodnavigator.com/var/wrbm_gb_food_pharma/storage/images/_aliases/wrbm_large/publications/food-beverage-nutrition/foodnavigator.com/news/market-trends/ultra-processing-foods-for-health-and-sustainability-whether-you-like-it-or-not-processed-food-is-here-to-stay/13222691-1-eng-GB/Ultra-processing-foods-for-health-and-sustainability-Whether-you-like-it-or-not-processed-food-is-here-to-stay.jpg"
            titel="Barbique"
            discription=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.Impus"
          />
        </div>
      </div>
    );
  }
}

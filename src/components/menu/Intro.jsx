import React, {Component} from 'react'
import intro from "../../images/intro.jpg";


export default class Intro extends Component {

  render() {
    return (
      <article
        id="intro"
        className={`${this.props.article === 'intro' ? 'active' : ''} ${
          this.props.articleTimeout ? 'timeout' : ''
          }`}
        style={{display: 'none'}}
      >
        <h2 className="major">Intro</h2>

        <p>
          China Beach Restaurant is a Chinese restaurant with full license and can also serve BYO wine. Our restaurant is located on paraparaumu beach.
          You can appreciate the charming sea sunset while dining.
          Our restaurant has been committing to operating a variety of flavors Chinese foods, including Cantgonese-style steam dim sims and barbecued meat,
          traditional Peking duck and silzzling plate dishes, as well as Sichuan-style poached beef and boiled fish, etc.
          to provide you with different dining options.
        </p>
        <p>
          China Beach Restaurant 是一家拥有全牌照、并可以做BYO Wine的中餐厅。餐厅位于paraparaumu beach海边小镇，您可以在用餐的同时领略到迷人的海上日落。
          China Beach 一直致力于经营多种口味的中式餐饮，既有广式的点心、各式烧腊，也有传统的北京烤鸭、铁板菜式，同时还提供四川口味的水煮牛、水煮鱼等等，
          为您提供不同的餐饮选择。
        </p>
        <span className="image main">
            <img src={intro} alt=""/>
        </span>
      </article>
    )
  }

}
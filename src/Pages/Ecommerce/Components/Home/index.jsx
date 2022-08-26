import React, { Component } from "react";
import { ProductList } from "../ProductList";

export default class Home extends Component {
  // state = {
  //   count: 0,
  //   numsList: [],
  // };

  // increment = () => {
  //   this.setState((prevState) => ({
  //     count: prevState.count + 1,
  //     numsList: [...prevState.numsList, 5],
  //   }));
  // };

  render() {
    return (
      // 'rendering Product List' //

      <div>
        <ProductList />
      </div>
    );
  }
}

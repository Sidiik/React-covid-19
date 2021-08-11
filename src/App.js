import Cards from "./components/Card/Cards";
import React, { Component } from "react";
import { fetchData } from "./api";
import CountryPicker from "./components/CountryPicker/CountryPicker";
import Loading from "./components/Loading";

class App extends Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data: data });
  }

  handleChangeCountry = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData });
  };

  render() {
    const { data } = this.state;
    return (
      <div className="app">
        {!data.confirmed || data.confirmed == undefined ? (
          <Loading />
        ) : (
          <>
            <Cards data={data} />
            <CountryPicker handleChangeCountry={this.handleChangeCountry} />
          </>
        )}
      </div>
    );
  }
}

export default App;

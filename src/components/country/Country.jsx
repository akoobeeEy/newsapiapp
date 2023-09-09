import React, { Component } from "react";
import request from "../../api";
import CountryCard from "../cards/CountryCard";
import Loading from "../loading/Loading";

export class Country extends Component {
  state = {
    country: [],
    loading: false,
  };
  async getApi() {
    try {
      this.setState({ loading: true });
      let { data } = await request(
        "?country=us&apiKey=0d4ab5cbc5c44296829e13100a5d155f"
      );
      this.setState({ country: data.articles });
    } catch (err) {
      console.log(err);
    } finally {
      this.setState({ loading: false });
    }
  }
  componentDidMount() {
    this.getApi();
  }
  render() {
    const { country, loading } = this.state;
    console.log(country);
    return (
      <section>
        <h1 className="mt-10 mb-10 text-5xl font-bold">Our Latest Posts</h1>

        <div className="grid grid-cols-3 gap-10">
          {loading ? (
            <Loading />
          ) : (
            country.map((el, i) => (
              <CountryCard
                urlToImage={el.urlToImage}
                title={el.title}
                description={el.description}
                author={el.author}
                publishedAt={el.publishedAt}
                content={el.content}
                url={el.url}
                key={i}
              />
            ))
          )}
        </div>
      </section>
    );
  }
}

export default Country;

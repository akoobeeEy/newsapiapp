import React, { Component } from "react";
import request from "../../api";
import CountryCard from "../../components/cards/CountryCard";
import Loading from "../../components/loading/Loading";

export class Science extends Component {
  state = {
    science: [],
    loading: false,
  };
  async getScience() {
    try {
      this.setState({ loading: true });
      let { data } = await request(
        "?country=us&category=science&apiKey=1a34246c796c44588372bdb92542f6f8"
      );
      this.setState({ science: data.articles });
    } catch (err) {
      console.log(err);
    } finally {
      this.setState({ loading: false });
    }
  }
  componentDidMount() {
    this.getScience();
  }
  render() {
    const { science, loading } = this.state;
    return (
      <section>
        <h1 className="mt-10 mb-10 text-5xl font-bold">Science</h1>

        <div className="grid grid-cols-3 gap-10">
          {loading ? (
            <Loading />
          ) : (
            science.map((el, i) => (
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

export default Science;

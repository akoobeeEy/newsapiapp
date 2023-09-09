import React, { Component } from 'react'
import request from '../../api';
import CountryCard from '../../components/cards/CountryCard';

export class Sports extends Component {
  state= {
    sports:[],
    loading: false,
  };
  async getSports(){
    try{
      let {data} = await request("?country=us&category=sports&apiKey=0d4ab5cbc5c44296829e13100a5d155f");
      this.setState({sports: data.articles});
    }catch (err){
      console.log(err);
    }
  }
  componentDidMount() {
    this.getSports();
  }
  render() {
    const { sports} = this.state;
    return (
      
      <section>
        <h1 className="mt-10 mb-10 text-5xl font-bold">Sports</h1>

        <div className="grid grid-cols-3 gap-10">
          {sports.map((el, i)=>(
            <CountryCard 
            urlToImage={el.urlToImage}
            title={el.title}
            description={el.description}
            author={el.author}
            publishedAt={el.publishedAt}
            content={el.content}
            url={el.url}
           
            key={i}/> 
          
              
           
          ))}
        </div>
      </section>
    )
  }
}

export default Sports
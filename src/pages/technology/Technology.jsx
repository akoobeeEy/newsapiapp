import React, { Component } from 'react'
import request from '../../api';
import CountryCard from '../../components/cards/CountryCard';
import Loading from '../../components/loading/Loading';

export class Technology extends Component {
  state= {
    technology:[],
    loading: false,
  };
  async getTechnology(){
    try{
      this.setState({loading:true})
      let {data} = await request("?country=us&category=technology&apiKey=0d4ab5cbc5c44296829e13100a5d155f");
      this.setState({technology: data.articles});
    }catch (err){
      console.log(err);
    }finally{
      this.setState({loading:false})
    }
  }
  componentDidMount() {
    this.getTechnology();
  }
  render() {
    const { technology,loading} = this.state;
    return (
      
      <section>
        <h1 className="mt-10 mb-10 text-5xl font-bold">Technology</h1>

        <div className="grid grid-cols-3 gap-10">
          {loading ? (<Loading/>) : technology.map((el, i)=>(
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

export default Technology
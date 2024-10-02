import React,{Component} from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner.js';
import InfiniteScroll from 'react-infinite-scroll-component';

export default class News extends Component{

    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

        static defaultProps ={
            country: 'in',
            pagesize:10,
            category:'general'

        }
    
    
    constructor(){
        super();
        
        this.state={
            articles: [],
            page: 1,
            loading: false,
            totalResults:0
        }
        
    }

    newsUpdate=async()=>{
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3807b3b4bdba43aa8b1f6fc9e0f30932&page=${this.state.page}&pageSize=${this.props.pagesize}`;
       // this.setState({loading:true});
        let data=await fetch(url);
        let parsedData=await data.json();
        this.setState({articles:parsedData.articles,totalResults:parsedData.totalResults,loading:false});
    }
     async componentDidMount(props){
        
       this.newsUpdate();
    }

    // handleNextClick = async ()=>{
    //     if(!(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pagesize))){
    //         let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3807b3b4bdba43aa8b1f6fc9e0f30932&page=${this.state.page+1}&pageSize=${this.props.pagesize}`;
    //         this.setState({loading:false});
    //         let data=await fetch(url);
    //         let parsedData=await data.json();
    //         console.log("data parsed");
    //         this.setState({
    //                         page:this.state.page+1,
    //                         articles:parsedData.articles,
    //                         loading:false
    //         });

    //     }
    //     else{
    //         this.setState({loading:true});
           
    // }

    // }
//     handlePrevClick=async ()=>{
//         let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3807b3b4bdba43aa8b1f6fc9e0f30932&pageSize=${this.props.pagesize}`;
//         this.setState({loading:true});
//         let data=await fetch(url);
//         let parsedData=await data.json();
//         // console.log("data parsed");
//         this.setState({
//                         page:this.state.page-1,
//                         articles:parsedData.articles,
//                         loading:false,
//                         totalResults:0
//         });
// }

fetchMoreData = async () => {   
    
    this.setState({page:this.state.page+1})
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3807b3b4bdba43aa8b1f6fc9e0f30932&page=${this.state.page+1}&pageSize=${this.props.pagesize}`;
    // this.setState({loading:true});
    let data=await fetch(url);
    let parsedData=await data.json();
    this.setState({
        articles:this.state.articles.concat(parsedData.articles),
        totalResults:parsedData.articles.totalResults
            });

    
  };

    render(){
        
        return(
            <>
            <div className="container" style={{marginTop:"65px"}}>
                
                <h3 className="my-4 text-center">{this.capitalizeFirstLetter(this.props.category)} - News Headings</h3>
               {this.state.loading && <Spinner/>}
              
              
               <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.totalResults}
                    loader={<Spinner/>}
                > 
                    <div className="container">
                       <div className="row">
                         
                        { this.state.articles.map((element)=>{
                            return <div className="col-md-4 my-3" key={element.url}>
                                        <NewsItem title={element.title?element.title:""} discription={element.description?element.description.slice(0,90):""} imgUrl={element.urlToImage} newsUrl={element.url} author={element.author?element.author:"Unknown"} date={element.publishedAt} source={element.source.name?element.source.name:"..."}/>
                                    </div>
                        })}
                        </div>
                    </div> 
                </InfiniteScroll>
              
              
              
              
              
              {/* <div className="row">
              {!this.state.loading && this.state.articles.map((element)=>{
                   return <div className="col-md-4 my-3" key={element.url}>
                        <NewsItem title={element.title?element.title:""} discription={element.description?element.description.slice(0,90):""} imgUrl={element.urlToImage} newsUrl={element.url} author={element.author?element.author:"Unknown"} date={element.publishedAt} source={element.source.name?element.source.name:"..."}/>
                    </div>
                })}
              </div> */}

                {/* scrollBar */}


                {/* next and Previous Buttons */}
              {/* <div className="d-flex justify-content-between my-5">
                <button disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handlePrevClick}>Previous</button>
                <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pagesize)}className="btn btn-dark" onClick={this.handleNextClick}>Next</button>
              </div> */}
            </div>
            </>
            
        )
    }
}
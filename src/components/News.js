import React, { useEffect,useState } from 'react'
import NewsItems from './NewsItems'
import Spinn from './Spinn';
import InfiniteScroll from 'react-infinite-scroll-component';

const News =(props)=> {

 
     const [page, setpage] = useState(1);
     const [articles, setarticles] = useState([]);
     const [totalResults, settotalResults] = useState(0);
     const [loading, setloading] = useState(false);
     

    
    
    const updateNews= async() =>{
       props.setProgress(10)
       let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
      setloading(true)
       let data = await fetch (url);
      //  props.setProgress(40)
       let parseData = await data.json()
       props.setProgress(60)
       console.log(parseData.articles)
      setarticles(parseData.articles)
      settotalResults(parseData.totalResults)
      setloading(false)
   props.setProgress(100)

    }
    useEffect(() => {
      document.title = `${props.category}-NewsHub`
        updateNews();
        // eslint-disable-next-line      
    },[])

    const fetchMoreData = async () => {
    
              const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
              setpage(page+1)
        let data = await fetch (url);
        let parseData = await data.json()
       //  console.log(parseData)
       setarticles(articles.concat(parseData.articles))
       settotalResults(parseData.totalResults)
      //  setloading(false)
     
    };

    return (
       
      <> 
        <h1 className='text-center' style={{margin:'30px 0px', marginTop:'90px'}}>NewsHub:Top {props.category.toUpperCase()}- Headline</h1>
       {loading && <Spinn/>}
       <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinn/>}
          >
           <div className="container">
        <div className="row">
        { articles.map((element)=>{  
          return  <div className="col-md-4" key={element.url}>
            <NewsItems newsUrl={element.url} target="_blank" title={element.title?element.title.slice(0,50):""} description={element.description?element.description.slice(0,90):""} imageUrl={element.urlToImage} publishedAt={element.publishedAt} author={element.author} source={element.source.name} /> </div>
        })}   
        </div>
        </div>
        </InfiniteScroll>

      </>
    )
  
}

export default News
 // constructor(props){
    //     super(props);
    //     this.state={
    //       page: 1 ,
    //     articles:[],
    //   totalResults:0,
    //     loading:false
    //     }
    //     document.title = `${this.props.category}-NewsHub`
    // }


  //  async componentDidMount(){
        // console.log("cmm")

      //   let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bfceae2ff32444a6a8d6da75dcf5d8ef&page=1&pageSize=${this.props.pageSize}`;
      //   this.setState({loading:true})
      //   let data = await fetch (url);
      //   let parseData = await data.json()
      //   // console.log(parseData)
      //  this.setState({ articles:parseData.articles,
      //                  totalResults:parseData.totalResults,
      //                  loading:false
      // })
    //   this.updateNews();
    // }
    
      // handleNextClick=async()=>{
        // if(this.state.page+1 > 3)  {
         
        // } 
        // else{

          // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bfceae2ff32444a6a8d6da75dcf5d8ef&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
          // this.setState({loading:true})
          // let data = await fetch (url);
          // let parseData = await data.json()
          // // console.log(parseData)
          // this.setState({
          //  page:this.state.page + 1,
          //  articles:parseData.articles,
          //  loading:false

          // })
        // }   
    //     this.setState({
    //       page:this.state.page + 1
    //     })

    //     this.updateNews()

    // }
    // handlePreviousClick=async ()=>{
      // console.log("this is next")
      // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bfceae2ff32444a6a8d6da75dcf5d8ef&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
      // let data = await fetch (url);
      // this.setState({loading:true})
      // let parseData = await data.json()
      // // console.log(parseData)
      // this.setState({
      //  page:this.state.page - 1,
      //  articles:parseData.articles,
      //  loading:false
      // })
    //   this.setState({
    //     page:this.state.page + 1
    //   })
    //   this.updateNews();
    // }
    

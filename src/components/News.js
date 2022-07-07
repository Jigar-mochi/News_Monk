import React, { useState } from 'react'
import Lodding from './Lodding';
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect } from 'react';


const News = (props) => {
    const [articles, setArticles] = useState([])
    const [lodding, setLodding] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)


    const update = async () => {
        props.setProgress(0)
        let url = `https://newsapi.org/v2/top-headlines?category=${props.category}&country=${props.country}&apiKey=${props.apik}&page=${page}&pagesize=${props.pagesize}`;
        console.log(url)
        setLodding(true)
        let data = await fetch(url);
        // props.setProgress(50)
        let parsedata = await data.json();
        setArticles(parsedata.articles)
        setTotalResults(parsedata.totalResults)
        setLodding(false)
        props.setProgress(100)
    }
    useEffect(() => {
        console.log("123")
        update()
        // eslint-disable-next-line
    }, [])

    const fetchMoreData = async () => {
        
        
        console.log(page+1)
        let url = `https://newsapi.org/v2/top-headlines?category=${props.category}&country=${props.country}&apiKey=${props.apik}&page=${page+1}&pagesize=${props.pagesize}`;
        setPage(page + 1)
        let data = await fetch(url);
        let parsedata = await data.json();
        setArticles(articles.concat(parsedata.articles))
        setTotalResults(parsedata.totalResults)

    };
    return (
        <div className='container my-4' style={{ height: "5rem" }}>
            <h1 className='text-center' style={{marginTop:"6rem"}}>Top News of {props.category} category</h1>

            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Lodding />}
            >
                {lodding && <Lodding />}
                <div className="container">
                    <div className="row" >

                        {articles.map((element, index) => {
                            return <div className="col-md-4 " key={element.url}>
                                <div key={element.index}>
                                    <NewsItem title={element.title ? element.title.slice(0, 45) : ""}
                                        description={element.description ? element.description.slice(0, 45) : ""}
                                        imageurl={element.urlToImage ? element.urlToImage : ""}
                                        newsurl={element.url ? element.url : ""}
                                        author={element.author} time={element.publishedAt} />
                                </div>

                            </div>
                        })
                        }
                    </div>
                </div>
            </InfiniteScroll>

        </div>
    )

}
News.defaultProps = {
    country: 'in',
    category: 'general',
    pagesize: 8
}
News.propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    pagesize: PropTypes.number
}
export default News

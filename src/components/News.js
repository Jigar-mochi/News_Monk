import React, { Component } from 'react'
import Lodding from './Lodding';
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


export default class News extends Component {
    static defaultProps = {
        country: 'in',
        category: 'general',
        pagesize: 8
    }
    static propTypes = {

        country: PropTypes.string,
        category: PropTypes.string,
        pagesize: PropTypes.number
    }

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: true,
            page: 1,
            totalResults: 0
        }
    }
    async update() {
        this.props.setProgress(0)
        let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=${this.props.apik}&page=${this.state.page}&pagesize=${this.props.pagesize}`;
        let data = await fetch(url);
        this.setState({ lodding: true });
        let parsedata = await data.json();
        this.setState({
            articles: parsedata.articles,
            totalResults: parsedata.totalResults,
            lodding: false
        })
        this.props.setProgress(100)
    }
    async componentDidMount() {
        this.setState({
            page: this.state.page
        })
        this.update()
    }

    fetchMoreData = async () => {
        this.state.page = this.state.page + 1
        let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=${this.props.apik}&page=${this.state.page}&pagesize=${this.props.pagesize}`;
        let data = await fetch(url);
        let parsedata = await data.json();
        this.setState({
            articles: this.state.articles.concat(parsedata.articles),
            totalResults: parsedata.totalResults
        })
        console.log(this.state.articles.length !== this.state.totalResults)
    };

    render() {
        return (
            <div className='container my-4' style={{ height: "5rem" }}>
                <h1 className='text-center'>Top News of {this.props.category} category</h1>

                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Lodding />}
                >
                    {this.state.lodding && <Lodding />}
                    <div className="container">
                        <div className="row" >
                            
                            {this.state.articles.map((element) => {
                                return <div className="col-md-4 " key={element.url}>
                                    <NewsItem title={element.title ? element.title.slice(0, 45) : ""}
                                        description={element.description ? element.description.slice(0, 45) : ""}
                                        imageurl={element.urlToImage ? element.urlToImage : ""}
                                        newsurl={element.url ? element.url : ""}
                                        author={element.author} time={element.publishedAt} />
                                </div>
                            })
                            }
                        </div>
                    </div>
                </InfiniteScroll>

            </div>
        )
    }
}


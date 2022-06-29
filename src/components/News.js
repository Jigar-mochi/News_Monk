import React, { Component } from 'react'
import Lodding from './Lodding';
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'

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
            loading: false,
            page: 1
        }
    }
    async update() {
        let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=836a9df728d14ea086a846885f4fd185&page=${this.state.page}&pagesize=${this.props.pagesize}`;
        let data = await fetch(url);
        this.setState({ lodding: true });
        let parsedata = await data.json();
        this.setState({
            articles: parsedata.articles,
            totalResults: parsedata.totalResults,
            lodding: false
        })
    }
    async componentDidMount() {
        this.setState({
            page: this.state.page
        })
        this.update()
    }
    handleprevious = async () => {
        this.setState({
            page: this.state.page - 1
        })
        this.update(this.state.page)

    }
    handlenext = async () => {
        this.setState({
            page: this.state.page + 1
        })
        this.update(this.state.page)
    }

    render() {
        return (
            <div className='container my-4' style={{ height: "5rem" }}>
                <h1 className='text-center'>Top News of {this.props.category}</h1>
                {this.state.lodding && <Lodding />}
                <div className="container">
                    <div className="row" >
                        {!this.state.lodding && this.state.articles.map((element) => {
                            return <div className="col-md-4 " key={element.url}>
                                <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 45) : ""} imageurl={element.urlToImage ? element.urlToImage : ""} newsurl={element.url ? element.url : ""} author={element.author} time={element.publishedAt}/>
                            </div>

                        })
                        }</div>
                </div>
                <div className='d-flex justify-content-between'>
                    <button type="button" disabled={this.state.page <= 1} onClick={this.handleprevious} className="btn btn-primary">&#8592; Privious</button>
                    <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pagesize)} onClick={this.handlenext} className="btn btn-primary">Next &#8594;</button>
                </div>

            </div>
        )
    }

}


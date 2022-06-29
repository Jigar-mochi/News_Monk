import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        let {title, description, imageurl, newsurl, author, time } = this.props;

        return (
            <div>
                <div className="card my-3 shadow p-3 mb-5 bg-body rounded" style={{width: "19rem",margin:"auto"}}>
                    <img src={imageurl?imageurl:"https://www.greatandhra.com/newphotos10/naga_sam11656402879.jpg"} style={{height: "14rem"}} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date(time).toGMTString()}</small></p>
                        <a href={newsurl} rel="noreferrer" target="_blank" className="btn btn-sm btn-primary">Readmore</a>
                    </div>
                </div>

            </div>
        )
    }
}

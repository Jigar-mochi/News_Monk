import React from 'react'
import image from './No_image.jpg'

const NewsItem = (props) => {
    let { title, description, imageurl, newsurl, author, time } = props;

    return (
        <div>
            <div className="card my-3 shadow p-3 mb-5 bg-body rounded" >
                <img src={imageurl ? imageurl : image} style={{ height: "14rem" }} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(time).toGMTString()}</small></p>
                    <a href={newsurl} rel="noreferrer" target="_blank" className="btn btn-sm btn-primary">Readmore</a>
                </div>
            </div>

        </div>
    )

}
export default NewsItem
// style={{ width: "22rem", margin: "auto" }}
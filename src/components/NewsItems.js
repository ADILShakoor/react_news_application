import React from "react";

const NewsItems =(props)=> {

    let { title, description, imageUrl, newsUrl, author, publishedAt, source } = props;
    return (
      <div className="my-3">
        <div className="card">
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              right: "0",
              position: "absolute",
            }}
          >
            <span className=" badge rounded-pill bg-danger">
              {source.slice(0, 12)}{" "}
            </span>
          </div>
          <img
            // style={{ width: "413px", height: "232px" }}
            src={
              !imageUrl
                ? "https://img.freepik.com/free-psd/3d-rendering-disability-icon_23-2150276240.jpg?w=740&t=st=1695102329~exp=1695102929~hmac=810199142cb13bae0960df5165d58c727bffe5c019b9d6c5dd81982c0ee23e15"
                : imageUrl
            }
            className="card-img-top"
            alt="news"
          />
          <div className="card-body">
            <h5 className="card-title">
              {title}...<span className="badge rounded-pill bg-dark">New</span>
            </h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-muted">
                Last update by {author ? author : "Unknown"}, At{" "}
                {new Date(publishedAt).toGMTString()}
              </small>
            </p>
            <a rel="noreferrer" href={newsUrl} className="btn btn-sm btn-dark">
              Read News
            </a>
          </div>
        </div>
      </div>
    );
  
}

export default NewsItems;

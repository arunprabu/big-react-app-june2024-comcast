import { useState } from "react";
import { IVideo } from "../../models/IVideo";

const TrendingShowList = () => {
  /* States 
    * updateable data in a React Component 
    * you have to update the state using setState
    * whenever we update the state, the component re-renders to show the updates in UI
  */
  const [resolution, setResolution] = useState<string>("4K"); // initial State value

  const [shows] = useState<IVideo[]>([
    {
      id: 1,
      trendingRank: 1,
      title: "Man Vs Wild",
      thumnailUrl: "https://placehold.co/300x200/0000ff/FFFFFF/png",
      category: "Infotainment",
      publishedOn: "2 days ago",
      description: "Man Vs Wild is an wild adventure show by Bear Grylls.",
      views: "800K",
    },
    {
      id: 2,
      trendingRank: 2,
      title: "Planet Earth III",
      thumnailUrl: "https://placehold.co/300x200/ff00ff/FFFFFF/png",
      category: "Infotainment",
      publishedOn: "2 days ago",
      description:
        "Planet Earth III - produced BBC Earth, narrated by David Attenborough.",
      views: "500K",
    },
  ]);

  const handleChangeResolution = () => {
    setResolution("2K");
  };

  return (
    <>
      <h3>
        Enjoy watching the Trending shows in {resolution}
        <button className="btn btn-info ms-3" onClick={handleChangeResolution}>
          Change Resolution
        </button>
      </h3>

      <div className="row">
        <div className="col-md-3">
          <div className="card">
            <img
              src={shows[0].thumnailUrl}
              className="card-img-top"
            />
            <div className="card-body">
              <h4 className="card-title">
                #{shows[0].trendingRank}. {shows[0].title}
              </h4>
              <span className="badge text-bg-secondary">
                {shows[0].category}
              </span>
              <span className="badge text-bg-secondary ms-2">
                {shows[0].publishedOn}
              </span>
              <br />
              <span className="badge text-bg-secondary">
                {shows[0].views} Views
              </span>
              <p className="card-text mt-3">{shows[0].description}</p>
              <button className="btn btn-primary">Watch Now</button>
              <button className="ms-2 btn btn-success">Add to watchlist</button>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card">
            <img
              src={shows[1].thumnailUrl}
              className="card-img-top"
            />
            <div className="card-body">
              <h4 className="card-title">
                #{shows[1].trendingRank}. {shows[1].title}
              </h4>
              <span className="badge text-bg-secondary">
                {shows[1].category}
              </span>
              <span className="badge text-bg-secondary ms-2">
                {shows[1].publishedOn}
              </span>
              <br />
              <span className="badge text-bg-secondary">
                {shows[1].views} Views
              </span>
              <p className="card-text mt-3">{shows[1].description}</p>
              <button className="btn btn-primary">Watch Now</button>
              <button className="ms-2 btn btn-success">Add to watchlist</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrendingShowList;

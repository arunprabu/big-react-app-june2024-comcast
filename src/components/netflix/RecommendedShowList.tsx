import { useState } from "react";
import { IVideo } from "../../models/IVideo";

const RecommendedShowList = () => {
  const [shows, setShows] = useState<IVideo[]>([
    {
      id: 34567890568,
      title: "The Godfather (1972)",
      thumnailUrl: "https://placehold.co/300x200/ffff00/FFFFFF/png",
      category: "Movies",
      publishedOn: "1 week ago",
      description: "The Godfather - Directed by Francis Ford Coppola. Released in 1972",
      views: "2M",
      isInWatchlist: true,
    },
    {
      id: 7986543265,
      title: "The Good, the Bad and The Ugly",
      thumnailUrl: "https://placehold.co/300x200/f0f0f0/FFFFFF/png",
      category: "Movies",
      publishedOn: "2 weeks ago",
      description:
        "The Good, the Bad and The Ugly - Music By Ennio Morricone - Directed by Sergio Leone.",
      views: "2.5M",
      isInWatchlist: false,
    },
    {
      id: 8980765432,
      title: "The Shashank Redemption (1994)",
      thumnailUrl: "https://placehold.co/300x200/dddddd/000000/png",
      category: "Movies",
      publishedOn: "3 weeks ago",
      description: "The Shashank Redemption - Directed by Frank Darabont.",
      views: "1.5M",
      isInWatchlist: false,
    },
  ]);

  // Conditional Rendering outside JSX
  if (shows && shows?.length === 0) {
    return (
      <div className="alert alert-warning">
        No Shows Found. Please watch more videos to get recommendations
      </div>
    );
  }

  const handleManageWatchlist = (index: number) => {
    console.log(index);
    // Logic to manage watchlist
    // Immutable state update
    const newShows = [
      ...shows,
    ]
    newShows[index].isInWatchlist = !newShows[index].isInWatchlist;
    console.log(newShows);

    setShows(newShows);
  }

  return (
    <>
      <h3>Based on your watch history here are the recommended videos</h3>

      <div className="row">
        {/* Lists and Keys */}
        { 
          shows?.map((show, index) => {
            return (
              <div className="col-md-4" key={show.id}>
                <div className="card">
                  <img
                    src={show.thumnailUrl}
                    className="card-img-top"
                    alt={show.title}
                  />
                  <div className="card-body">
                    <h4 className="card-title">{show.title}</h4>
                    <span className="badge text-bg-secondary">
                      {show.category}
                    </span>
                    <span className="badge text-bg-secondary ms-2">
                      {show.publishedOn}
                    </span>
                    <br />
                    <span className="badge text-bg-secondary">
                      {show.views}
                    </span>
                    <p className="card-text mt-3"> {show.description}</p>
                    <button className="btn btn-primary">Watch Now</button>
                    <button
                      className="ms-2 btn btn-success"
                      onClick={() => handleManageWatchlist(index)}
                    >
                      {/* Conditional Rendering inside JSX */}
                      {show.isInWatchlist ? "In Watchlist" : "Add to Watchlist"}
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        }
        

      </div>
    </>
  );
};

export default RecommendedShowList;

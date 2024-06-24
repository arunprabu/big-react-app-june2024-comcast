import LatestShow from "../components/netflix/LatestShow";
import RecommendedShowList from "../components/netflix/RecommendedShowList";
import TrendingShowList from "../components/netflix/TrendingShowList";

const NetflixPage = () => {
  // TODO: create an array of objects and pass it as props
  const latestShows = [
    {
      id: 1,
      title: "Money Heist",
      thumnailUrl: "https://placehold.co/300x200/ff0000/FFFFFF/png",
      category: "Thriller",
      publishedOn: "2 days ago",
      description: "Money heist is a Thriller movie from 2017 by David Fincher. It was released on 21 November 2017. It is directed by F. Gary Gray."
    }
  ]

  return (
    <div>
      <h1>Netflix Style of App!</h1>

      <h2>Latest Shows | Props Demo</h2>
      <div className="row">
        <div className="col-md-4">
          <LatestShow
            title={latestShows[0].title}
            thumnailUrl={latestShows[0].thumnailUrl}
            category={latestShows[0].category}
            publishedOn={latestShows[0].publishedOn}
          >
            {latestShows[0].description}
          </LatestShow>
        </div>
        <div className="col-md-4">
          <LatestShow
            title="Berlin"
            thumnailUrl="https://placehold.co/300x200/0a0dff/FFFFFF/png"
            category="Suspense"
            publishedOn="3 days ago"
          >
            Berlin is a Suspense movie from 2017 by Berlin. It was released on
            21 November 2017. It is directed by F. Gary Gray.
          </LatestShow>
        </div>
        <div className="col-md-4">
          <LatestShow
            title="Korean Show 1"
            thumnailUrl="https://placehold.co/300x200/ffff00/000000/png"
            category="Drama"
            publishedOn="4 days ago"
          >
            Korean Show 1 is a Drama movie from 2017 by Korean. It was released
            on 21 November 2017. It is directed by F. Gary Gray.
          </LatestShow>
        </div>
      </div>

      <hr />
      <h2>Trending Shows | States, Events Demo</h2>
      <div>
        <TrendingShowList />
      </div>

      <hr />
      <h2>Recommended Shows | States, Events, Lists & Keys, Conditional Rendering Demo</h2>
      <RecommendedShowList />
    </div>
  );
};

export default NetflixPage;

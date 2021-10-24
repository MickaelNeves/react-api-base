import ShowGrid from "./ShowGrid";

import useFetch from "../hooks/useFetch";

const Home = ({ searchQuery }) => {
  const url = `https://api.tvmaze.com/search/shows?q=${searchQuery}`;
  const { shows, isLoading, error } = useFetch(url);

  return (
    <div className="home">
      <ShowGrid isLoading={isLoading} shows={shows} query={""} error={error} />
    </div>
  );
};

export default Home;

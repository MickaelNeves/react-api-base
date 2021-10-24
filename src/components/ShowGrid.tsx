import ShowItem from "./ShowItem";
import Results from "./Results";

const ShowGrid = ({
  shows,
  isLoading,
  query,
  error,
}: {
  shows: any;
  isLoading: any;
  query: any;
  error: any;
}) => {
  if (isLoading && query) return <h2>Loading...</h2>;
  if (error) return <h2>Ooops something went wrong...</h2>;

  return (
    <main>
      <Results shows={shows} query={query} />
      <section className="results-meta"></section>
      <section className="show-list ">
        {shows.map((show: any) => (
          <ShowItem key={show.show.id} show={show} />
        ))}
      </section>
    </main>
  );
};

export default ShowGrid;

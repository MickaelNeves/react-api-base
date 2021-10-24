const Results = ({ query, shows }: { query: any; shows: any }) => {
  //Created a separate "Results" component. The component accounts for non-existent titles in the database and returns "No results" to aid user experience.
  //Further added dynamic rendering for one title "result", for more than one title returns "results" in the plural form.
  return query ? (
    shows.length > 0 ? (
      <div className="results-meta">
        {shows.length === 1
          ? `Result for "${query}"`
          : `Results for "${query}"`}
      </div>
    ) : (
      <div className="results-meta results-none center">
        {`No results for "${query}". Please try another title!`}
      </div>
    )
  ) : null;
};

export default Results;

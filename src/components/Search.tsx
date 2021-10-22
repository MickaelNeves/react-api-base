import { useState, useEffect } from "react";
import { useRef } from "react"
import { useLocation, useNavigate } from "react-router-dom"


function useQuery() {
  // Use the URLSearchParams API to extract the query parameters
  // useLocation().search will have the query parameters eg: ?foo=bar&a=b
  return new URLSearchParams(useLocation().search)
}


const Search = ({ getQuery,}: { getQuery: any }) => {
  const [text, setText] = useState("");
  
  const query = useQuery()

  const term = query.get("term")

  const inputRef = useRef(null)
  const navigate = useNavigate()


  const handleChange = (e: any) => {
    setText(e.target.value);
  };
 
  const handleSubmit = (e: any) => {
    e.preventDefault();
    getQuery(text);
    const searchValue = text
    navigate(`?term=${searchValue}`)
  };
  const handleKeypress = (e: any) => {
    if (e.keyCode === 13) {
      handleSubmit(e);
    }
  }; 

  

  return (
  
    <section className="center search"> 
  
      <form>
        <input
          type="text"
          name="term"
          className="searchbox"
          placeholder="Enter a TV show..."
          onChange={handleChange}
          onKeyPress={handleKeypress}
          value={text}
          ref={inputRef}
          autoFocus
        />
        <button onClick={handleSubmit } type="submit">
          Go!
        </button>
      </form>
    </section>
  
  );
};

export default Search;

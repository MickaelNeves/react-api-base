import { useState, useRef } from "react";
import { withRouter } from "react-router-dom";

const Search = (props) => {
  const { history, handleSearchQuery } = props;
  const [text, setText] = useState("");
  const inputRef = useRef(null);

  const handleChange = (e: any) => {
    setText(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    history.push("/");

    handleSearchQuery(text);
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
        <button onClick={handleSubmit} type="submit">
          Go!
        </button>
      </form>
    </section>
  );
};

export default withRouter(Search);

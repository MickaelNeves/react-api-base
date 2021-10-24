import imgUnavailable from "../img/image-unavailable.jpg";

import { Link } from "react-router-dom";

//Separate ShowItem component for each individual show card after the user enters a query.
//It is not updated with a fallback image if no image exists in the database for an individual title, which was previously throwing an error.
//Previously there was no alt text for the poster image. It is now updated with dynamic rendering of text + the movie title.
//For better resultion of image, now fetching image.original rather than image.medium which was pixilated.

const ShowItem = ({ show }: { show: any }) => {
  return (
    <Link to={`${show.show.id}`}>
      {
        <div className="show-preview">
          <img
            src={show.show.image ? show.show.image.original : imgUnavailable}
            alt={`Poster for ${show.show.name}`}
          />
          <h1>{show.show.name}</h1>
        </div>
      }
    </Link>
  );
};

export default ShowItem;

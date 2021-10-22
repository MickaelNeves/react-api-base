import imgUnavailable from '../img/image-unavailable.jpg'
import useFetch from "../hooks/useFetch";
import {Link} from "react-router-dom"
import {useParams} from "react-router-dom"


interface Person {
    name: string;
    image: any;
    id: number;
}

interface Character {
    name: any;
}

interface Cast {
  person: Person;
  character: Character;
}


interface IShows {
 
tvshows: {
  id: any;
  image?:  any;
  language?:  any;
  name?:  any;
  summary?:any;
  genres? : any;
  premiered?:any;
  _embedded: {
    cast: Cast;
  }
}
}
const Show: React.FC<{tvshows:any;}> = ({children}) => {
   
  const { showId }: {showId: any}= useParams()
  const url = `https://api.tvmaze.com/shows/${showId}?embed=cast`
  const { shows, isLoading, error }=  useFetch<IShows[]>(url)
  // let history = useNavigate();

  //Function as an alternative to dangerouslySetInnerHTML which could potentially cause security issues for large scale applications and setting data from an external API.
  const removeTags = (text: any) => {
    if (text === null || text === ""){
      return false;
    }else {
      text = text.toString()
    }
    return text.replace(/(<([^>]+)>)/gi, "");
  }
    
 
  // console.log(shows._embedded.cast[0])
  // const cast = shows._embedded.cast;
 
  if(isLoading) return <h2>Loading...</h2>
  if(error) return <h2>Ooops something went wrong...</h2>
  
    return ( 
    
    <>
  
  <Link to={"/Search"}><button>GO back</button>
 </Link>
     {/* <Link to={`?term=${searchValue}`
  }>Settings</Link> */}
     <div className="show">
    <div className="show-image">
    <img src={shows.image? shows.image.original : imgUnavailable} alt={`Poster for ${shows.name}`}/>
    </div>
    <div className="show-details">
    <div className="show-meta">
    <h1>{shows.name}</h1>
    
                  <span>{shows.premiered ? `Premiered ${shows.premiered}`
                    : "Yet to premiere"}</span> 
                
                
    <p> {removeTags(shows.summary)}</p>
    </div>
    <div>
    </div>
  <div className="cast-container">
  <h3>Cast</h3>
      <div className="cast-cards">
            <ul className="cast">
              {shows._embedded.cast.map((member: any ) => {
                return (
                  
                  <li key={member.person.id}>
              <div className="cast-member">
                    
                      <div className="cast-member-image">
                        {member.person.image && (
                          <img src={member.person.image.medium} alt={"Portrait: "+ member.person.name}/>
                        )}
                      </div>
                      <div>
                      <h3><strong>{member.person.name}</strong></h3>
                      </div>
                     
                      <p>{member.character.name}</p>
                      
                      </div>
                  </li>
                  
                 );
              })}
            </ul>
            </div>
            </div>
              </div>
              </div>
    </>
    )
}

export default Show
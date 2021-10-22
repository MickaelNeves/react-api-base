
// // import axios from 'axios';
import Header from './components/Header'
import Home from './components/Home'
// import ShowGrid from './components/shows/ShowGrid'
// import Search from "./components/ui/Search";
import Show from "./components/Show"
import ShowGrid from "./components/ShowGrid"
// import useFetch from "./hooks/useFetch";
import "./App.css";

//Routing 
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import { useParams } from "react-router";
import Search from './components/Search';


// import useFetch from './hooks/useFetch'; 

// onSearchClick() {
  //     //add on enter functionality here 
  //     this.setState(
  //       {
  //         query: this.input.value,
  //         isLoading: true,
  //         shows: [],;.//yh
  //         selectedShow: null,
  //       },
  //       () => {
  //         fetch("https://api.tvmaze.com/search/shows?q=" + this.state.query)
  //           .then((r: any) => r.json())
  //           .then((json: any) => {
  //             this.setState({
  //               isLoading: false,
  //               shows: json.map((r: any) => r.show),
  //             });
  //           });
  //       }
  //     );
  //     this.input.value = "";
  //   }
const App = () => {
 
  
  return (
    <div className="app">
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}>
        <Route path="/Search" element={<Search getQuery/>}/>
        </Route>
        
        <Route path="/:showId" element={<Show tvshows/>}></Route>
      </Routes>
      
    </Router>
    </div>
 
  )}

  // useEffect(() => {


  //   const fetchShows = async () => {
    
  //       setError(false)
  //       setIsLoading(true)
       
      
  //     await axios(`https://api.tvmaze.com/search/shows?q=${query}`).then((result) => {
  //       if(result.data != query){
  //         console.log(result)
  //       }
  //       console.log(result.data)
  //       setShows(result.data)
  //       setIsLoading(false)
    
  //     }).catch((error) => {
  //       setError(true)
  //       console.log(error)
  //     })
  //   }
  //   fetchShows()
  // }, [query])

  // const handleInput = (e: any) => {
  //    let query = e.target.value;

  //    setState(prevState => {
  //      return { ...prevState, query: query }
  //    })

  //    console.log(state.query)
  // }


  

      // {/* <main> */}
      //   {/* <Search handleInput={handleInput} search={search}/> */}
    
     
      //       {/* <div className="search">
      //       <input
      //       autoFocus
      //       ref={(el) => (input = el)}
      //       placeholder="Enter the name of a TV show..."
      //     />
      //     <button onClick={onSearchClick}>Search</button>
      //       </div> */}
      // {/* </main> */}
   


// export default class App extends React.Component<any, any> {
//   input: any;

//   constructor(props: any) {
//     super(props);

//     this.state = {
//       query: "",
//       isLoading: false,
//       shows: [],
//       selectedShow: null,
//     };

//     //break these into 3 states, 1 for the search, and 1 for the show list and another for the selected show instead. 

//     this.onSearchClick = this.onSearchClick.bind(this);
//     this.onShowClick = this.onShowClick.bind(this);
//     this.renderShowIndex = this.renderShowIndex.bind(this);
//   }

//   onSearchClick() {
//     //add on enter functionality here 
//     this.setState(
//       {
//         query: this.input.value,
//         isLoading: true,
//         shows: [],
//         selectedShow: null,
//       },
//       () => {
//         fetch("https://api.tvmaze.com/search/shows?q=" + this.state.query)
//           .then((r: any) => r.json())
//           .then((json: any) => {
//             this.setState({
//               isLoading: false,
//               shows: json.map((r: any) => r.show),
//             });
//           });
//       }
//     );
//     this.input.value = "";
//   }

//   onShowClick(show: any) {
//     this.setState({
//       isLoading: true,
//     });
//     fetch("https://api.tvmaze.com/shows/" + show.id + "?embed=cast")
//       .then((r: any) => r.json())
//       .then((json: any) => {
//         this.setState({
//           isLoading: false,
//           selectedShow: json,
//         });
//       });
//   }

//   renderShowIndex() {
//     return (
//       <div>
//         {this.state.query && (
//           <div className="results-meta">
//             {
//                this.state.shows.length === 1 ? `Result for ${this.state.query}` 
//               : "Results for"
//             } 
//           </div>
//           // edit for only 1 result, delete "s"
//         )}

//         <div className="show-list">
//           {this.state.shows.map((show: any) => {
//             return (
//               <div
//                 className="show-preview"
//                 onClick={() => this.onShowClick(show)}
//               >
//                 {show.image && <img src={show.image.medium} alt={"Poster image for "+ show.name} />}
//                 <span>{show.name}</span>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     )
//   }

//   renderShow() {
//     const show = this.state.selectedShow;
//     const cast = show._embedded.cast;

//     return (
//       <>
//         <div className="show-back">
//           <button onClick={() => this.setState({ selectedShow: null })}>Back to list</button>
//         </div>
//         <div className="show">
//           <div className="show-image">
//             {show.image && <img src={show.image.original} alt={"Poster image for "+ show.name} />}
//           </div>
//           <div className="show-details">
//             <h2>{show.name}</h2>
//             <div className="show-meta">
//               {show.premiered
//                 ? "Premiered " + show.premiered
//                 : "Yet to premiere"}
//             </div>
//             <div dangerouslySetInnerHTML={{ __html: show.summary }} />
            // <h3>Cast</h3>
            // <ul className="cast">
            //   {cast.map((member: any) => {
            //     return (
            //       <li>
            //         <div className="cast-member">
            //           <div className="cast-member-image">
            //             {member.person.image && (
            //               <img src={member.person.image.medium} alt={"Portrait: "+ member.person.name}/>
            //             )}
            //           </div>
            //           <strong>{member.person.name}</strong>&nbsp;as&nbsp;
            //           {member.character.name}
            //         </div>
            //       </li>
            //     );
            //   })}
            // </ul>
          // </div>
//         </div>
//       </>
//     );
//   }

//   render() {
//     return (
//       <div className="app">
//         <h1>TV Database</h1>
//         <div className="search">
//           <input
//             autoFocus
//             ref={(el) => (this.input = el)}
//             placeholder="Enter the name of a TV show..."
//           />
//           <button onClick={this.onSearchClick}>Search</button>
//         </div>
//         <div>
//           <Loading isLoading={this.state.isLoading}>
//             {this.state.selectedShow ? this.renderShow() : this.renderShowIndex()}
//           </Loading>
//         </div>
//       </div>
//     );
//   }
// }

// function Loading({ isLoading, children }: any) {
//   return isLoading ? <div>Loading...</div> : children;
// }

export default App;


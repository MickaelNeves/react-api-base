import { useState } from 'react';
import ShowGrid from './ShowGrid'
import Search from "./Search";
import useFetch from "../hooks/useFetch";

const Home = () => {

  const [query, setQuery] = useState("")

  const url =`https://api.tvmaze.com/search/shows?q=${query}`
  const { shows, isLoading, error } = useFetch(url) 
  

  return (
    <div className="home">
      <Search  getQuery={(q: any) => setQuery(q)}/>
      <ShowGrid isLoading={isLoading} shows={shows} query={query} error={error}/>
      
      </div>
      
  )
}

export default Home

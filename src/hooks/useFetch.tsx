import { useEffect, useState, useRef} from "react";
import axios from "axios";
// import { useIsMount } from './useIsMount';


 interface State<T> {
 
  shows?: any;
  error?: any;
  isLoading?: any;
 } 
  // network?:  any;
  // officialSite?:  any;
  // premiered?:  any;
  // rating?:  any;
  // runtime?:  any;
  // schedule?:  any;
  // status?:  any;
  // summary?:  any;
  // type?: any;
  // updated?:  any;
  // url?:  any;
  // webChannel?:  any;
  // weight?: any;
  // _links?: any;
  
export function useFetch<T = unknown>(url: any): State<T> {

 

    const [shows, setShows] =  useState<State<T> | []>([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(false)
    // const isMount = useIsMount();
    // const first = useRef(true);

        useEffect(() => {
          const source = axios.CancelToken.source()
          // if(first.current){
          //   first.current = false;
          //   return;
          // }
            const fetchShows = async () => {
            
                setError(false)
                setIsLoading(true)
               
              
             const result = await axios(url, {
              cancelToken: source.token,
          }) 
                try{
                console.log(result.data)
                setShows(result.data)
                setIsLoading(false)
                }
                catch(error)  {
                  if (axios.isCancel(error)) {
                  } else {
                setError(true)
                console.log(error)
                  }
              }
            }
            fetchShows()
            return () => {
              source.cancel()
          }
          }, [url])
          return {shows, isLoading, error } 
}


export default useFetch

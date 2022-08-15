
// npm i axios 설치
// axios: http request를 만드는 것.

import defaultAxios from "axios";
import { useEffect, useState } from "react";

const useAxios = (opts, axiosInstance = defaultAxios )=>{
    const [state, setState] = useState({
        loading :true,
        error:null,
        data:null,
    });

    const [trigger, setTrigger]= useState(0);

    const refetch = ()=>{
        setState({
            ...state,
            loading: true
        });
        setTrigger(Date.now());   
    }

    useEffect(()=>{
        axiosInstance(opts).then(data=>{
            setState({
                ...state,
                loading:false,
                data
            });
        }).catch(error=>{
            setState({...state, loading:false, error})
        });
    }, [trigger]);

    return {...state, refetch};
    
};


export default useAxios;






// function App() {
//   const {loading, data,error, refetch} = useAxios({
//     url : "https://yts.mx/api/v2/list_movies.json"
//   });

//   return (
//     <div  className='App' style={{height:"1000vh"}}>
//       <h1>{data && data.status}</h1>
//       <h2>{loading&&"Loading"}</h2>
//       <h2>{error && "Error"}</h2>
//       <button onClick={refetch}>Refetch</button>
//     </div>

//   );
// }





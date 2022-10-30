import axios from "axios";
import {
  useEffect,
  useReducer,
  createContext,
  useContext,
  useRef,
} from "react";

export const Store = createContext();

const initialState = {
  user: {},
  loading: true,
  error: undefined,
};

const Actions = {
    LOADING: "LOADING",
    FETCHED_USER: "GET_USER",
    GET_ERROR: "ERROR",
}

const reducer = (state, { type, payload }) => {
  switch (type) {
    case Actions.LOADING:
          return { ...state, loading: true };
      
    case Actions.FETCHED_USER:
      return { ...initialState, user: payload, loading: false };

    case Actions.GET_ERROR:
      return { ...initialState, error: payload, loading: false };
    default:
      return state;
  }
};

export const UseStoreContext = () => {
  return useContext(Store);
};

export const StoreContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { loading } = state;
  const cache = useRef({});
  const cancelRequest = useRef(false);

  function FetchUser() {
    const url = "https://api.github.com/users/adepejustephen";

    // Used to prevent state update if the component is unmounted

    useEffect(() => {
      // Do nothing if the url is not given
      if (!url) return;

      cancelRequest.current = false;

      const fetchData = async () => {
        dispatch({ type: Actions.LOADING });

        // If a cache exists for this url, return it
        if (cache.current[url]) {
          dispatch({ type: Actions.FETCHED_USER, payload: cache.current[url] });
          return;
        }

        try {
          const {data} = await axios.get(url);
         

          // const data = await response.json();

          cache.current[url] = data;
          if (cancelRequest.current) return;

          dispatch({ type: Actions.FETCHED_USER, payload: data });
        } catch (error) {
          if (cancelRequest.current) return;

          dispatch({ type: Actions.GET_ERROR, payload: error });
        }
      };

      fetchData();

      return () => {
        cancelRequest.current = true;
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url]);

    return state;
  }

  return (
    <Store.Provider value={{ FetchUser, loading }}>{children}</Store.Provider>
  );
};

// export const StoreContextProvider = ({children}) => {
//     const [state, dispatch] = useReducer(reducer, initialState);
//     const {loading} = state
//     const cache = useRef({});
//     const cancelRequest = useRef(false);

//   function FetchUser() {
      
//       const url = "https://api.github.com/users/adepejustephen";

//     // Used to prevent state update if the component is unmounted
    

//     useEffect(() => {
//       // Do nothing if the url is not given
//       if (!url) return;

//       cancelRequest.current = false;

//       const fetchData = async () => {
//         dispatch({ type: Actions.LOADING });

//         // If a cache exists for this url, return it
//         if (cache.current[url]) {
//           dispatch({ type: Actions.FETCHED_USER, payload: cache.current[url] });
//           return;
//         }

//         try {
//           const response = await fetch(url);
//           if (!response.ok) {
//             throw new Error(response.statusText);
//           }

//           const data = await response.json();

//           cache.current[url] = data;
//           if (cancelRequest.current) return;

//           dispatch({ type: Actions.FETCHED_USER, payload: data });
//         } catch (error) {
//           if (cancelRequest.current) return;

//           dispatch({ type: Actions.GET_ERROR, payload: error });
//         }
//       };

//       fetchData();

//       return () => {
//         cancelRequest.current = true;
//       };
//       // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, [url]);

//     return state;
//     }

//     return (
//         <Store.Provider value={{ FetchUser, loading }}>
//         {children}
//       </Store.Provider>
//     );
    
// };

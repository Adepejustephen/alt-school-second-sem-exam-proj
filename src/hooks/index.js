import axios from "axios";
import { useEffect, useReducer } from "react";

const initialState = {
  user: {},
  repos: [],
  loading: true,
  error: undefined,
};

const Actions = {
  FETCHED_USER: "GET_USER",
  FETCHED_REPOS: "FETCHED_REPOS",
  GET_ERROR: "ERROR",
};

const reducer = (state, { type, payload }) => {
  switch (type) {
  

    case Actions.FETCHED_USER:
      return { ...initialState, user: payload, loading: false };

    case Actions.FETCHED_REPOS:
      return { ...initialState, repos: payload, loading: false };

    case Actions.GET_ERROR:
      return { ...initialState, error: payload, loading: false };
    default:
      return state;
  }
};

const url = "https://api.github.com/users/adepejustephen";

export function FetchUser() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
     

      try {
        const { data } = await axios.get(url);

        dispatch({ type: Actions.FETCHED_USER, payload: data });
      } catch (error) {
        dispatch({ type: Actions.GET_ERROR, payload: error });
      }
    };

    fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return state;
}

export function FetchRepos() {
  const [state, dispatch] = useReducer(reducer, initialState);

  

  useEffect(() => {
    if (!url) return;

    const fetchData = async () => {
      dispatch({ type: Actions.LOADING });

      try {
        const { data } = await axios.get(url + "/repos");

        dispatch({ type: Actions.FETCHED_REPOS, payload: data });
      } catch (error) {
        dispatch({ type: Actions.GET_ERROR, payload: error });
      }
    };

    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  return state;
}


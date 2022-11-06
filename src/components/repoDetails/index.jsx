import React from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "../../helpers";
import { FetchRepos } from "../../hooks";
import { Spinner } from "../generalComponents";
import "./repodetails.css";


export const RepoUI = () => {
  const { id } = useParams();
  const { repos, error, loading } = FetchRepos();

  const repo = repos.find((repo) => repo.name === id);
 
  if (!loading && error) {
    return <p>{error}</p>;
  }
  return (
    <>
      {loading ? (
        <Spinner />
        ) : (
          <div className="repoDetails">
          <Helmet title={repo.name} desc={`main lang : ${repo.language}`} />
          <h4 className="repoDetails__title">{repo.name}</h4>

          {repo.language !== null && (
            <p className="repoDetails__lang">
              Language:
              <span
                className={
                  repo.language === "TypeScript"
                    ? "circle__blue"
                    : repo.language === "JavaScript"
                    ? "circle__yellow"
                    : "circle__purple"
                }
              ></span>
              <span>{repo.language}</span>
            </p>
          )}

          <p>
            Main Branch:
            <span>{repo.default_branch} </span>
          </p>
          <p>
            Visibility: <span>{repo.visibility}</span>
          </p>

          <p>
            Created At:
            <span> {new Date(repo.created_at).toLocaleDateString()}</span>{" "}
          </p>
          <p>
            Push at:{" "}
            <span>{new Date(repo.pushed_at).toLocaleDateString()} </span>
          </p>
        </div>
      )}
    </>
  );
};

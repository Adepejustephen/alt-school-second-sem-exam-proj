import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Spinner } from "../generalComponents";
import { RepoCard } from "./repoCard";
import "./repos.css"

export const ReposUi = ({ repos, error, loading }) => {

  const [page, setPage] = useState(1);
  const PER_PAGE = 6;
  const skip = page * PER_PAGE;
  const indexOfFirstRepo = skip - PER_PAGE;
  const currentRepos = repos.slice(indexOfFirstRepo, skip);
  const pages = repos.length / PER_PAGE;

if (!loading && error) {
  return <p>{error}</p>;
}

  return (
    <div className="repos">
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className="repos__container">
            <div className="repos__list">
              {currentRepos.map((item) => {
                return (
                  <RepoCard key={item.id} name={item.name} id={item.name} />
                );
              })}
            </div>
            <div className="btns">
              <button
                disabled={page <= 1}
                onClick={() => setPage((prev) => prev - 1)}
              >
                prev
              </button>
              {Array.from({ length: pages }, (value, index) => index + 1).map(
                (each, id) => (
                  <button
                    onClick={() => setPage(each)}
                    key={id}
                    disabled={page === each}
                  >
                    {each}
                  </button>
                )
              )}
              {
                <button
                  disabled={page >= pages}
                  aria-disabled={page >= pages}
                  onClick={() => setPage((prev) => prev + 1)}
                >
                  next
                </button>
              }
            </div>
          </div>
        </>
      )}
      <Outlet />
    </div>
  );
};

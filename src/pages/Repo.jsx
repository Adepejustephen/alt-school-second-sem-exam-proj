import React from 'react'
import { RepoUI } from '../components'
import { FetchRepos } from '../hooks';

export const SingleRepo = () => {
    const { repos, error, loading } = FetchRepos();
  return (
    <div><RepoUI repos={repos}/></div>
  )
}

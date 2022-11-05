import React from 'react'
import { ReposUi } from '../components'
import { FetchRepos } from '../hooks';

export const Repos = () => {
    const { repos, error, loading } = FetchRepos();
  return (
    <ReposUi repos={repos} error={error}  loading={loading}/>
  )
}

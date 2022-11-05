import React from 'react'
import { useParams } from 'react-router-dom'

export const RepoUI = ({repos}) => {
    const { id } = useParams()
    console.log(id)
    const repo = repos.find((repo) => repo.name === id);
    console.log(repo)
  return (
    <div>index</div>
  )
  
}

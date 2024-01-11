import P from 'prop-types'
import React from 'react'

import './styles.css'
import { PostCard } from '../PostCard'

const Posts = ({ posts = [] }) => {
  return (
    <div className='posts'>
      {posts.map((post) => (
        <PostCard
          title={post.title}
          body={post.body}
          id={post.id}
          cover={post.cover}
          key={post.id}
        />
      ))}
    </div>
  )
}
Posts.defaultProps = {
  posts: [],
}
Posts.propTypes = {
  posts: P.arrayOf(
    P.shape({
      title: P.string.isRequired,
      cover: P.string.isRequired,
      body: P.string.isRequired,
    })
  ),
}
export default Posts

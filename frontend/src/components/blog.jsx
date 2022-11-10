import React from 'react'

const Blog = ({blogs}) => {
  return (
    <div>
        <div>
            <h2>{blogs.title}</h2>
            <p>
                <strong>snippet</strong>
                {blogs.snippet}
            </p>
            <p>
                <strong>snippet</strong>
                {blogs.body}
            </p>
        </div>
    </div>
  )
}

export default Blog
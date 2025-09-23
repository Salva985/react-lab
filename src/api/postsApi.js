import { client } from './client.js'

// READ
export function getPosts() {
  return client('/posts')
}

// CREATE
export function createPost(post) {
  return client('/posts', {
    method: 'POST',
    body: JSON.stringify(post),
  })
}

// UPDATE
export function updatePost(id, post) {
  return client(`/posts/${id}`, {
    method: 'PATCH',
    //body: JSON.stringify(post),
    body: JSON.stringify({ ...post, id }),
  })
}

// DELETE
export function deletePost(id) {
  return client(`/posts/${id}`, {
    method: 'DELETE',
  })
}
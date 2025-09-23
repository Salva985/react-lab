import { useEffect, useState } from 'react'
import { getPosts, createPost, updatePost, deletePost } from '../api/postsApi.js'
import './Posts.css'

export default function Posts() {
  const [posts, setPosts] = useState([])
  const [form, setForm] = useState({ id: null, title: '', body: '' })

  // READ on mount
  useEffect(() => {
    async function loadPosts() {
      try {
        const data = await getPosts()
        setPosts(data.slice(0, 10)) // limit to 10
      } catch (error) {
        console.error(error)
      }
    }
    loadPosts()
  }, [])

  function handleChange(e) {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  async function handleCreate(e) {
    e.preventDefault()
    if (!form.title || !form.body) return
    try {
      const apiPost = await createPost({ title: form.title, body: form.body, userId: 1 })
      console.log('created:', apiPost) 
      //setPosts([newPost, ...posts])
      const normalized = { ...apiPost, id: Number(apiPost.id ?? Date.now()) }
      setPosts(prev => [normalized, ...prev])
      setForm({ id: null, title: '', body: '' })
    } catch (error) {
      console.error(error)
    }
  }

  async function handleUpdate(e) {
    e.preventDefault()
    if (!form.id) return alert('Select a post to update')
    try {
      const updated = await updatePost(form.id, { title: form.title, body: form.body, userId: 1 })
      console.log('updated:', updated)
      //setPosts(posts.map(p => (p.id === form.id ? updated : p)))
      const normalized = { ...updated, id: Number(form.id) }
      setPosts(prev => prev.map(p => (Number(p.id) === Number(form.id) ? normalized : p)))
      setForm({ id: null, title: '', body: '' })
    } catch (error) {
      console.error(error)
    }
  }

  async function handleDelete(id) {
    if (!confirm('Are you sure you want to delete this post?')) return
    try {
      await deletePost(id)
      //setPosts(posts.filter(p => p.id !== id))
      setPosts(prev => prev.filter(p => Number(p.id) !== Number(id)))
      setForm(f => (Number(f.id) === Number(id) ? { id: null, title: '', body: '' } : f))
    } catch (error) {
      console.error(error)
    }
  }

  function handleSelect(post) {
    setForm({ id: Number(post.id), title: post.title, body: post.body })
  }

  return (
    <main className="container">
      <h2>Posts (CRUD)</h2>

      <form className="post-form" onSubmit={form.id ? handleUpdate : handleCreate}>
        <label>
          Title
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Body
          <textarea
            name="body"
            rows="3"
            value={form.body}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">{form.id ? 'Update' : 'Create'}</button>
        {form.id && <button type="button" onClick={() => setForm({ id: null, title: '', body: '' })}>Cancel</button>}
      </form>

      <ul className="posts-list">
        {posts.map(p => (
          <li key={p.id} className="post-card">
            <h4>{p.title}</h4>
            <p>{p.body}</p>
            <button type="button" onClick={() => handleSelect(p)}>Edit</button>
            <button type="button" onClick={() => handleDelete(p.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </main>
  )
}
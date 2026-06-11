import { useState } from "react"

/**
 * Form for creating a new director.
 *
 * Updates application state and redirects users to the
 * newly created director page after submission.
 */
function DirectorForm() {
  const [name, setName] = useState("")
  const [bio, setBio] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    const newDirector = { name, bio, movies: [] }
    fetch("http://localhost:4000/directors", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newDirector)
    })
      .then(r => {
        if (!r.ok) { throw new Error("failed to add director") }
        return r.json()
      })
      .then(data => {
        console.log(data)
        // handle context/state changes
        // navigate to newly created director page
      })
      .catch(console.log)
  }

  return (
    <div>
      <h2>Add New Director</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Director's Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <textarea
          placeholder="Director's Bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          required
        />
        <button type="submit">Add Director</button>
      </form>
    </div>
  )
}

export default DirectorForm

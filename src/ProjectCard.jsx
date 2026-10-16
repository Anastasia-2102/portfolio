    import { useState } from 'react'

function ProjectCard({ project }) {
const storageKey = project.name === "National Parks Capstone"
    ? "capstone-likes"
    : `${project.name.toLowerCase().replaceAll(" ", "-")}-likes`

const [likes, setLikes] = useState(
    Number(localStorage.getItem(storageKey) || 0)
)
const [open, setOpen] = useState(false)

const addLike = () => {
const next = likes + 1
    setLikes(next)
    localStorage.setItem(storageKey, next)
}

const toggleOpen = () => {
    setOpen(!open)
}

const removeLike = () => {
    if (likes > 0) {
const next = likes - 1
    setLikes(next)
    localStorage.setItem(storageKey, next)
    }
}

const resetLikes = () => {
    setLikes(0)
    localStorage.setItem(storageKey, 0)
}

let text = project.description
let label = "Show More"

if (open) {
    text = `${project.description} ${project.details}`
    label = "Show Less"
}

return (
    <article className="card-jade">
    <h2>{project.name}</h2>
    <p>{text}</p>

    <div className="description-control">
        <button onClick={toggleOpen}>{label}</button>
    </div>

    <div className="card-buttons">
        <a className="project-link" href={project.liveUrl} role="button">
        See it live
        </a>

        <a className="project-link outline" href={project.repoUrl} role="button">
        Read the code
        </a>

        <div className="like-controls">
        <button className="small-button" onClick={addLike}>
            Like {likes}
        </button>
        <button className="small-button" onClick={removeLike}>
            Unlike
        </button>
        <button className="small-button" onClick={resetLikes}>
            Reset
        </button>
        </div>
    </div>
    </article>
)
}

export default ProjectCard
import React, { PropTypes } from 'react'

const Todo = ({ onClick, completed, deleted, text, onDelete }) => (
  <span>
  <li
    className="cursor-pointer"
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none',
      color: deleted ? 'red' : 'black',
      visibility: deleted ? 'hidden' : 'visible'
    }}
  >
    {text}
  </li>
  <a onClick={onDelete} style={{visibility: deleted ? 'hidden' : 'visible'}} href="#" className="margin-left-50">X</a>
  </span>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo

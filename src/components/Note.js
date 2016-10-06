/**
 * Created by samuel on 26/09/16.
 */
import React, { PropTypes } from 'react'

const Note = ({ onClick, title, text, color, date}) => (
  <div className="note-square" style={{backgroundColor: color}}>
      <p>{date}</p>
      <h1 className="">{title}</h1>
      <p className="">{ text }</p>
  </div>
);

Note.propTypes = {
    text: PropTypes.string.isRequired,
};

export default Note
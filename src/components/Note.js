/**
 * Created by samuel on 26/09/16.
 */
import React, { PropTypes } from 'react'

const Note = ({ onClick, title, text }) => (
  <div className="note-square">
      <h1 className="">{title}</h1>
      <p className="">{ text }</p>
  </div>
);

Note.propTypes = {
    text: PropTypes.string.isRequired,
};

export default Note
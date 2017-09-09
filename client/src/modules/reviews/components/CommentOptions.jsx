import React from 'react';

const CommentOptions = ({ id, actions }) => (
        <div>
            <span className="remove" onClick={ actions.setEditableComment.bind(null, id) }>Ред.</span>
            <span className="remove" onClick={ actions.DeleteComment.bind(null, id) }>Х</span>
        </div>);

export default CommentOptions;
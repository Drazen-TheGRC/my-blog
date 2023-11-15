import axios from 'axios';
import { useState } from 'react';
import useUser from '../hooks/useUser';

const AddCommentForm = ({ articleName, onArticleUpdate }) => {
  const [name, setName] = useState('');
  const [commentText, setCommentText] = useState('');
  const { user } = useUser();

  const addComment = async () => {
    const token = user && (await user.getIdToken());
    const headers = token ? { authtoken: token } : {};
    const response = await axios.post(
      `/api/articles/${articleName}/comments`,
      {
        postedBy: name,
        text: commentText,
      },
      { headers }
    );
    const updatedArticle = response.data;
    onArticleUpdate(updatedArticle);
    setName('');
    setCommentText('');
  };

  return (
    <div className='add-comment-form'>
      <h3>Add a Comment</h3>
      <label htmlFor=''>
        Name:{' '}
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label htmlFor=''>
        Comment:
        <textarea
          name=''
          id=''
          cols='50'
          rows='4'
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        ></textarea>
      </label>
      <button onClick={addComment}>Add Comment</button>
    </div>
  );
};

export default AddCommentForm;

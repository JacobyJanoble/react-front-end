import React from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import DeleteReview from './DeleteReview';


function ReviewFeed({ reviews }) {
    const navigate = useNavigate();
    const { id } = useParams();

    function handleDelete(e) {
        e.preventDefault();

        fetch(`http://localhost:9292/reviews/${reviews.id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        }).then((resp) => {
            if(resp.ok) {
                  navigate(`/characters/${id}/reviews`);
            } else {
                  resp.json()
            }
        });
    }

  return (
    <div className='comment'>
        <ol className='comment-body'>
            {reviews.map((review) =>
            <li className='card'>
                <h3>User:</h3>
                <p className='div-feed'>{review.text}</p>
                <p><strong>Rating: </strong>{review.rating}</p>
                <DeleteReview reviews_id={review.id} handleDelete={handleDelete}/>
            </li>
            )}
        </ol>
    </div>
  )
}

export default ReviewFeed
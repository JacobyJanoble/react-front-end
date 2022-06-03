
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import ReviewFeed from './ReviewFeed';
import NewReview from './NewReview';

const Character = () => {


const [char, setChar] = useState("")

    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:9292/character/${id}`)
            .then((r) => r.json())
            .then(setChar);
    }, []);

    const [reviews, setReviews] = useState([])

    const getProfile = async () => {
        const response = await fetch(`http://localhost:9292/character/${id}/reviews`);
        const data = await response.json();
        setReviews(data.reviews);
      };

    useEffect(() => {
        getProfile();
    }, []);

  return (
    <div>
      <div className='card'>
        <h1>{char.character}</h1>
        <p><strong>Stage: </strong> <em>{char.stage}</em></p>
        <p><strong>Quote: </strong> <em>{char.quote}</em></p>
        <p><strong>Signature Move:</strong> <em>{char.move}</em></p>
      </div>
      <div>
          <ReviewFeed reviews={reviews} />
      </div>
      <div className='comment-body'>
          <NewReview character_id={char.id} />
      </div>
    </div>
  )
}

export default Character
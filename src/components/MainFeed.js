import React from 'react'
import { Link } from 'react-router-dom';

const MainFeed = ( {characters} ) => {

return(
    <div>
      <ul style={{ display: "flex", flexWrap: "wrap" }}>
      {characters.length > 0 ? (
        characters.map((char) => (
          <div className='card'>
            <article>
              <h1>{char.character}</h1>
              <p><strong>Location:</strong> <em>{char.stage}</em></p>
              <p><strong>Signature Move:</strong> <em>{char.move}</em></p>
            </article>
            <Link className='btn' to={`/character/${char.id}`}>View</Link>
          </div>
        ))
      ) : (
        <>
        <p>Nothing here</p>
        </>
      )}
      </ul>
    </div>
  );
}

export default MainFeed
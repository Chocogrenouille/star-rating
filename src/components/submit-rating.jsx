import { useState } from "react"
import star from './icon-star.svg'

export default function SubmitRating (props) {
  const ratings = [1,2,3,4,5]
  const [pickedRating, setPickRating] = useState(0)

  const handleSubmit = (event) => {
    event.preventDefault()
    props.setSubmittedRating(() => pickedRating)
  }

  return (
    <div className="card">
      <span className="star">
        <img src={star} alt="star" />
      </span>
      <h1>How did we do?</h1>
      <p>Please let us know how we did with your support request. 
        All feedback is appreciated to help us improve our offering!
      </p> 
      <div className="rating-buttons-container">
        {ratings.map((rating, index) => ( 
          <button 
            className="rating-button"
            key={index} 
            onClick={(event) => setPickRating(event.target.textContent)}
          >
            {rating}
          </button>
        ))}
      </div>
      <button
        className="submit-button"
        onClick={(event) => handleSubmit(event)}
      >
        Submit
      </button>
    </div>
  )
}
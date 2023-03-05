import './App.css';
import { useState } from 'react';
import SubmitRating from './components/submit-rating';
import SubmitFeedback from './components/submitFeedback';


function App() {
  const [submittedRating, setSubmittedRating] = useState(0)

  return (
      <div className="rating-container">
        {submittedRating === 0 ?
          <SubmitRating currentRating={submittedRating} setSubmittedRating={setSubmittedRating}/>
        :      
          <SubmitFeedback rating={submittedRating} />
      }
      </div>
  );
}

export default App;

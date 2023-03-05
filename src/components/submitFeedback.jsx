import ThankYou from './illustration-thank-you.svg'

export default function SubmitFeedback ({rating}) {
  return (
    <div className="card thank-you">
      <img src={ThankYou} alt="thank you for rating"/>
      <p className="tag">You selected {rating} out of 5</p> 
      <section className="">
        <h1>Thank you!</h1> 
        <p>We appreciate you taking the time to give a rating. 
          If you ever need more support, don’t hesitate to get in touch!
        </p>
      </section>
    </div>
  )
}

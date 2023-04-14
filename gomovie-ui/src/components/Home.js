import Ticket from './../images/movie_tickets.jpg';

const Home = () => {
  return(
    <>
    <div className="text-center">
      <h2>Find a movie to watch tonight!</h2>
      <hr/>
      <img src={Ticket} style={{ width: "90%" }} alt="Movie Tickets" />
    </div>
    </>
  )
}

export default Home;
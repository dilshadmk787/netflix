import './App.css';
import Banner from './components/Banner';
import requests from './components/Requests.js';
import Row from './components/Row';
import Nav from './components/Nav';


function App() {
  return (
    <div>
      <Nav/>
    <Banner fetchUrl={requests.fetchNetflixOriginals}/>
    <Row isposter={true} title="NetflixOriginals" fetchUrl={requests.fetchNetflixOriginals} />
    <Row title="Trending Movies" fetchUrl={requests.fetchTrending} />

    <Row title="TOP RATED" fetchUrl={requests.fetchTopRated} />

    <Row title="Action movie" fetchUrl={requests.fetchActionMovies} />
    <Row title="comedy Movie" fetchUrl={requests.fetchComedyMovies} />

    <Row title="Horror Movie" fetchUrl={requests.fetchHorrorMovies} />

    <Row title="Romance movie" fetchUrl={requests.fetchRomanceMovies} />

    <Row title="Documentries" fetchUrl={requests.fetchDocumentaries} />



        </div>
  )

};



export default App;

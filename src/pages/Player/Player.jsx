import React, { useEffect,useState } from 'react'
import {useNavigate, useParams } from 'react-router-dom';
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'


function Player() {
  
  const {id} = useParams();
  const navigate = useNavigate();
  const [apiData, setApiData] = useState({
     name:'',
     key:'',
     published_at:'',
     type:''

  });

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MjFmNTA4OTEzODE0Njg4NTNiZjg4ZmQxMDI5MzA4ZCIsInN1YiI6IjY2NzU1YjQ2MjMzZmM2NTU3YWIwNGJkNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pVhQXVg4IeowmT4sOFi_-6tBhv9TdHi92Lmqz5MiN68'
    }
  };

   useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results[0]))
    .catch(err => console.error(err));
   })

  return (
    <div className='player'>
      <img src={back_arrow_icon} alt="" onClick={()=>{navigate(-1)}} />
      <iframe width='90%' height='90%' src={`https://www.youtube.com/embed/${apiData.key}`}
      title='trailer' frameBorder='0' allowFullScreen> </iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player;

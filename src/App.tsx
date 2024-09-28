import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Box, Button, Typography } from '@mui/material'
import axios from 'axios'

const requests = {
  fetchRandomQuote: "https://api.quotable.io/random"

}

function App() {
  const [quote, setQuote] = useState<string>("Now Loading...");
  const [author, setAuthor] = useState<string>("Now Loading...");

  const setRandomQuote = () => {
    axios
    .get(requests.fetchRandomQuote)
    .then((response) => {
      const payload = response.data;
      // console.log(payload);
      setQuote(payload["content"])
      setAuthor(payload["author"])
    })
  };

  // 一番初めに一回呼ぶ。
  useEffect(() => {setRandomQuote()}, []);

  return (
    <div>
      <div className='quote-box'>
        <Box sx={{border: "1px solid gray", marginBottom: 3, height: "200px"}}>
          <h2 >Random Quote Generator</h2>
          <Typography sx={{margin: 2, fontWeight: "bold"}} fontStyle="italic">"{quote}"</Typography>
          {/* <Typography className='author-style' sx={{margin: 2}}><span style={{fontWeight: "bold"}}>Author: </span>{author}</Typography> */}
          <Typography className='author-style'><span style={{fontWeight: "bold"}}>Author: </span>{author}</Typography>
        </Box>
        <Button variant='contained' onClick={setRandomQuote}>Generate Quote</Button>
      </div>
    </div>
  )
}

export default App

import React, {useEffect} from 'react'

const App = () => {

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '7526a2abc4mshcaf8928adaea272p10cdfajsna4c956f56250',
      'X-RapidAPI-Host': 'animes5.p.rapidapi.com'
    }
  };

  const fetchData = async () => {
    try{
      const res = await fetch('https://animes5.p.rapidapi.com/', options)
      const data=await res.json()
      console.log(data)
    }
    catch(e) {
      console.log(e)
    }
}

useEffect(() => {
  fetchData();
}, []);


     
  
  return (
    <div>App</div>
  )
}

export default App
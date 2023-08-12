// "use client"
// import {useState} from "react"
import Movie from "./movie"

export default async function Home() {
  const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`)
  const res = await data.json()
  // console.log(res)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className=''>hello next</h1>
      {res.results.map((movie) => (
         <div className="grid gap-16 fluid"> 
          <Movie
          key={movie.id}
          id={movie.id}
          title={movie.title}
          poster_path={movie.poster_path}
          release_data={movie.release_data}
          />
          </div>
      ))}
      
    </main>
  )
}
// export default async function Home() {
  
//     const fetch = require('node-fetch');

// const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer 15ce395c2cf85bd6719ca717948f3290'
//   }
// };

// fetch{
//   return;
// }(url, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error('error:' + err));
  
// }

import React, { useState, useEffect } from "react";



function useCountMovies () {
  //сколько рядов
  const [numberMovies,  setNumberMovies] = useState(0);
  //сколько если нажать еще
  const [numberMoviesExtra, setNumberMoviesExtra] = useState(0)

  const widthScreen = window.innerWidth
useEffect(()=>{
  if (widthScreen>=1001) {
    setNumberMovies(16)
    setNumberMoviesExtra(4)
  }
  else {
    if (widthScreen>=769) {
      setNumberMovies(12)
    setNumberMoviesExtra(3)
    }
    else {
      if (widthScreen>=466) {
        setNumberMovies(8)
        setNumberMoviesExtra(2)
      }
      else {
        setNumberMovies(5)
        setNumberMoviesExtra(2)
      }
    }
  }
}
)
return({numberMovies, numberMoviesExtra, widthScreen})
}


export default useCountMovies


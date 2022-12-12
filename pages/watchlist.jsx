import React from "react";
import { useSelector,useDispatch } from 'react-redux';

import { deleteWatch } from '../redux/action';

const Watchlist = () => {
  const watchlist = useSelector((store) => store.addWatchlist.watchlist);
  const dispatch = useDispatch();
  return (
    <div>
          {
              watchlist.map((movie)=>(
                <div>
                    <h1>{movie.Title}</h1>
                    <img src={movie.Images[0]} />
                    <h1>{movie.Plot}</h1>
                    <button onClick={() => dispatch(deleteWatch(movie.id))}>Delete</button>
                </div>
              ))
            } 
    </div>
  )
}

export default Watchlist
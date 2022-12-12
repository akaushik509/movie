import React from 'react'
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { addWatch } from "../../redux/action";

const Page = ({movies}) => {
    const dispatch = useDispatch();
    const router = useRouter();
    console.log(movies);
    const {id,Title,Images,Plot} = movies[0];
  return (
    <div>
      <h1>
        Movie:{router.query.id}
      </h1>
      <img src={Images} alt="error" />
      <h1>{Title}</h1>
      <h1>{Plot}</h1>
      <button onClick={() => {
            dispatch(addWatch({Title,Images,id,Plot}));
          }}>Add To Watchlist</button>
      <h3 onClick={()=>router.back()}>Go Back</h3>
    </div>
  )
}

export async function getStaticPaths(){
    let res = await fetch("http://localhost:8080/movies");
    let data = await res.json();
    return {
      paths:data.map((movie)=>({params:{id:movie.id.toString()}})),
      fallback:false,
    };
  }
  
  export async function getStaticProps(context) {
    console.log("context", context);
    const {
      params:{id},
    } = context;
    let res = await fetch(`http://localhost:8080/movies/?id=${id}`);
    let data = await res.json();
    return {
      props:{
        movies:data,
      },
    }
  }

export default Page 


/* import React from 'react'

const Page = () => {
  return (
    <div>Page</div>
  )
}

export default Page */
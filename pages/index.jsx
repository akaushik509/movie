import React from 'react'
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image"

const Page = ({movies}) => {
    const router = useRouter();
    
  const handleClick = (id) =>{
    console.log("visiting page", id)
    router.push(`/movies/${id}`);
  
  }
  return (
    (
        <>
          <Head>
            <title>Blog Page</title>
            <meta title="description" content="Movies"></meta>
            <link rel="icon" href="/favicon.ico"/>
          </Head>
          <main>
            <h1>Movies: {movies.length}</h1>
            {
              movies.map((movie)=>(
                <div key={movie.id}>
                    <Image src={movie.Images[0]} alt="error" width="150" height="150" />
                  <h1 onClick={()=>handleClick(movie.id)}> {movie.Title} </h1>
                </div>
              ))
            }
          </main>
        </>
      )
  )
}

export async function getServerSideProps(){
    let res = await fetch("http://localhost:8080/movies");
    let data = await res.json();
    return {
      props:{
        movies:data,
      },
    }
  }

export default Page
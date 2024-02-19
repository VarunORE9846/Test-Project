import movies from './movies.json'
import '../Pages/styles.css'
export const Movielist=()=>{
return (
   <div className="Movlmain">
      <h1>this is list of Movies</h1>
      <div className="movie">
        {
            movies.map((e,i)=>{
                return(
                    <div className="movies" key={i}>
                      <img src={e?.posterUrl} alt="" />  
                      <p>Title:{e?.title}</p>
                      <p>Year:{e?.year}</p>
                      <p>Director:{e?.director}</p>
                    </div>
                )
            })
        }
      </div>
   </div> 
)
};
import { useState, useEffect } from "react";
import Input from "../layout/Input";
import Styles from './Home.module.css'
import Loading from "../layout/loading";
function Home() {
    const apiKey = '09a8965f5593e54dec8c5113506bc16a'
    const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=pt-BR`

    const [Filmes, setFilmes] = useState([])
    const [ProcurarFilmes, setProcurarFilmes] = useState()
    function SearchFilme(a) {
        setProcurarFilmes(a.target.value.trim() || null)
    }
    useEffect(() => {
        if (!ProcurarFilmes) {

            fetch(apiUrl, {
                method: "GET",
                headers: { "Content-Type": "application/json" }
            })
                .then((res) => res.json())
                .then((data) => setFilmes(data.results))
                .catch((err) => console.log(err))

        } else {
            fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=pt-BR&query=${ProcurarFilmes}&page=1&include_adult=false`, {
                method: "GET",
                headers: { "Content-Type": "application/json" }
            })
                .then((res) => res.json())
                .then((data) => setFilmes(data.results))
                .catch((err) => console.log(err))

        }
    }, [apiUrl, ProcurarFilmes, apiKey])

    return (
        <main className={Styles.home}>
            <Input placeholder="Pesquisar Filmes" filme={SearchFilme} />
            {
                Filmes.length > 0 ? (Filmes.map((a) =>
                    <div key={a.id}>

                        <img src={`https://image.tmdb.org/t/p/w500/${a.poster_path}`} alt={a.title} />

                        <article>
                            <h1>{a.title}</h1>
                            <p>{a.overview}</p>
                            <h4>Data de Lançamento: <span>{a.release_date}</span></h4>
                            <h4>Popularidade: <span>{a.popularity}</span></h4>
                            <h4>Nota média:<span> {a.vote_average}</span></h4>

                        </article>

                    </div>

                )


                ) : <Loading/>
            }

        </main >)
}
export default Home
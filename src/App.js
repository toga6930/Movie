import Movie from "./Movie";
import "./styles.css";
import { Movieapi } from "./Movieapi";

export default function App() {
  return (
    <div className="App">
      {Movieapi.results.map((item) => {
        return (
          <Movie
            poster_path={item.poster_path}
            title={item.title}
            vote_average={item.vote_average}
          />
        );
      })}
    </div>
  );
}

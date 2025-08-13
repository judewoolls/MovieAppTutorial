import "./App.css";
import MovieCard from "./components/MovieCard";

function App() {
  return (
    <>
     <MovieCard movie={{
        title: "Inception",
        release_date: "2010-07-16",
        url: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQovCe0H45fWwAtV31ajOdXRPTxSsMQgPIQ3lcZX_mAW0jXV3kH"
      }} />

    </>
  );
}



export default App;

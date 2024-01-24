import MapComponent from "./Components/MapComponent";
import UserCurrentGEOLocation from "./Components/UserCurrentGEOLocation";

function App() {
  return (
    <div className="App">
      <UserCurrentGEOLocation></UserCurrentGEOLocation>
      <MapComponent></MapComponent>
    </div>
  );
}

export default App;
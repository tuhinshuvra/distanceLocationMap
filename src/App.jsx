import MapComponent from "./MapComponent";
import { fromLonLat } from 'ol/proj';

function App() {
  const startPoint = { lat: 90.4231854666645, lng: 23.768211404952517 };
  const endPoint = { lat: 90.40164802769385, lng: 23.79180638226055 };


  // const startPoint = fromLonLat([22.5726, 88.3639]);
  // const endPoint = fromLonLat([23.8041, 90.4152]);


  return (
    <div>
      <MapComponent
        startPoint={startPoint}
        endPoint={endPoint}
      />
    </div>
  );
}

export default App;
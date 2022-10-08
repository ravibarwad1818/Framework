import WSPGallery from './components/WSPGallery';
import './App.css';

function App() {

  const galleryImages = [
    {
      img: "https://images.pexels.com/photos/1462011/pexels-photo-1462011.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      img: "https://images.pexels.com/photos/1266808/pexels-photo-1266808.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      img: "https://images.pexels.com/photos/1933239/pexels-photo-1933239.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      img: "https://images.pexels.com/photos/884788/pexels-photo-884788.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      img: "https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      img: "https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ]

  return (
    <div className="App">
      <br />
      <div>
        <strong>Image Gallery</strong>
      </div>
      <br /><br />

      <WSPGallery
        galleryImages={galleryImages}
      />
    </div>
  );
}

export default App;
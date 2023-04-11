import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import Footer from './components/footer';
import Main from './components/main';
import imageUrls from './image_urls.json';

function App() {
  return (
    <>
      <Header title="Beast Judge" />
      <Main heading="Make Your Beast Opinion Known" imageUrls={imageUrls} />
      <Footer message="Your opinion counts!" />
    </>
  );
}

export default App;

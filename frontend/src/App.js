import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import BootstrapCarousel from './components/BootstrapCarousel';
import HomeComponent from './components/HomeComponent';
import GalleryScreen from './screens/GalleryScreen';
import AboutLakGelScreen from './screens/AboutLakGelScreen';

function App() {
 return (
  <Router>
   <Header />
   <main>
    <Container>
     <Route path='/' component={HomeComponent} exact />
     <Route path='/' component={BootstrapCarousel} exact />
     <Route path='/gallery' component={GalleryScreen} />
     <Route path='/aboutlakgel' component={AboutLakGelScreen} />
    </Container>
   </main>
   <Footer />
  </Router>
 );
}

export default App;

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import Carousel from './components/Carousel';
import HomeScreen from './screens/HomeScreen';

function App() {
 return (
  <Router>
   <Header />
   <main>
    <Container>
     <Carousel />
     <Route path='/' component={HomeScreen} exact />
    </Container>
   </main>
   <Footer />
  </Router>
 );
}

export default App;

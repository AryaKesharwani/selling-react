// bootstrap css
// import './bootstrap/bootstrap.css'
// import './bootstrap/bootstrap-grid.css'
// import './bootstrap/bootstrap-reboot.css'


// css
import './css/bootstrap.min.css'
import './css/style.css'
import './css/aos.css'
import './css/bootstrap-datepicker.css'
import './css/jquery.fancybox.min.css'
import './css/owl.theme.default.min.css'
// import './css/owl.carousel.min.css'
// import './css/jquery-ui.css'


import Footer from './Component/Footer'
import Contact from './Component/Contact'
import Blog from './Component/Blog'
import TopBar from './Component/TopBar'
import Header from './Component/Header'
import Testimonals from './Component/Testimonals'
import LoadJS from './Component/LoadJS'

function App() {
  return (
    <>
      <TopBar/>
      <Header/>
      <Testimonals/>
      <Blog/>
      <Contact/>
      <Footer/>
      <LoadJS/>
    </>
  );
}

export default App;

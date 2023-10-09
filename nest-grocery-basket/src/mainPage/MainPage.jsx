import './MainPage.css';
import Header from '../components/header/Header';
import Footer from '../components/footer/footer';
import Main from '../components/main/Main';

const MainPage = () => {
    return (
        <div className="site-wrapper">
            <Header/>
            <Main/>
            <Footer/>
        </div>
    );
}

export default MainPage;


import logo from '../../logo.svg';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';

function Layout() {
  let titleMain = 'Titolo';
  return (
    <>
      <Header />
      <Main theme="light" title={titleMain} />
      <Footer> ciao sono il footer</Footer>
    </>
  );
}

export default Layout;

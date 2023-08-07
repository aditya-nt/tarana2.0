import { Outlet } from "react-router-dom";
import { Container, VStack } from "../AppStyles";
import Header from "../Header";
import Footer from "../Footer";

function Layout() {
  return (
    <VStack.colg2>
      <Header/>
      <Container>
      <Outlet />
      </Container>
      <Footer/>
    </VStack.colg2>
  );
}

export default Layout;

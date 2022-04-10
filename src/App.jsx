import { SnackbarProvider } from "notistack";
import Slide from "@material-ui/core/Slide";

import {
  About,
  Contact,
  Header,
  Experience,
  Footer,
  Navbar,
  Portfolio,
  Services,
  Testimonials,
} from "./components/partials";

const App = () => (
  <SnackbarProvider
    maxSnack={1}
    anchorOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    TransitionComponent={Slide}
    dense={false}
    autoHideDuration={3000}
  >
    <Header />
    <Navbar />
    <About />
    <Experience />
    <Services />
    <Portfolio />
    <Testimonials />
    <Contact />
    <Footer />
  </SnackbarProvider>
);

export default App;

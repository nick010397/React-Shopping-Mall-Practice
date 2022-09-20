import Header from "./component/Header";
import Orders from "./component/Orders";
import Prototypes from "./component/Prototypes";
import Footer from "./component/Footer";
import AppStateProvider from "./providers/AppStateProvider";

function App() {
  return (
    <AppStateProvider>
      <Header />
      <div className="container">
        <Prototypes />
        <Orders />
        <Footer />
      </div>
    </AppStateProvider>
  );
}

export default App;

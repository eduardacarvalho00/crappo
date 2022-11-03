import { Features } from './components/Features';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { StartMining } from './components/StartMining';
import { Trade } from './components/TradeSecurely';
import { WhyCrappo } from './components/WhyCrappo';

function App() {
  return (
    <>
      <Header />
      <WhyCrappo />
      <Trade />
      <Features />
      <StartMining />
      <Footer />
    </>
    
  );
}

export default App;

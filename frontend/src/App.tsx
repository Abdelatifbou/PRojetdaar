import { useEffect, useMemo, useRef, useState } from 'react';

import * as ethereum from '@/lib/ethereum';
import * as main from '@/lib/main';
import { Route, Routes } from 'react-router-dom';
import Accueil from './pages/Accueil';
import SetCards from './pages/SetCards';
import Sets from './pages/Sets';
import Transfert from './pages/Transfert';
import MyCards from './pages/MyCards';
import Sidebar from './components/Sidebar'; // Rename Sidebar to Navbar

type Canceler = () => void;
const useAffect = (
  asyncEffect: () => Promise<Canceler | void>,
  dependencies: any[] = []
) => {
  const cancelerRef = useRef<Canceler | void>();
  useEffect(() => {
    asyncEffect()
      .then(canceler => (cancelerRef.current = canceler))
      .catch(error => console.warn('Uncatched error', error));
    return () => {
      if (cancelerRef.current) {
        cancelerRef.current();
        cancelerRef.current = undefined;
      }
    };
  }, dependencies);
};

const useWallet = () => {
  const [details, setDetails] = useState<ethereum.Details>();
  const [contract, setContract] = useState<main.Main>();
  useAffect(async () => {
    const details_ = await ethereum.connect('silent');
    if (!details_) return;
    setDetails(details_);
    const contract_ = await main.init(details_);
    if (!contract_) return;
    setContract(contract_);
  }, []);
  return useMemo(() => {
    if (!details || !contract) return;
    return { details, contract };
  }, [details, contract]);
};

export const App = () => {
  const wallet = useWallet();
  const [selectedCards, setSelectedCards] = useState([]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <header className="w-full bg-gradient-to-r from-blue-600 to-purple-800 text-white shadow-lg">
        <Sidebar basketCount={selectedCards.length} />
      </header>

      {/* Main content area */}
      <main className="flex-1 p-6 bg-gray-100">
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/sets" element={<Sets />} />
          <Route
            path="/SetCards/:id"
            element={<SetCards selectedCards={selectedCards} setSelectedCards={setSelectedCards} />}
          />
          <Route
            path="/transfert"
            element={<Transfert selectedCards={selectedCards} setSelectedCards={setSelectedCards} />}
          />
          <Route path="/myCards" element={<MyCards />} />
        </Routes>
      </main>
    </div>
  );
};

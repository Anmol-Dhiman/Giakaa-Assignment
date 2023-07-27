import type { NextPage } from 'next';
import Header from "../src/components/header/Header"
import Info from "../src/components/info/Info"
import LargestSales from '../src/components/LargestSales';
import RecentTx from '../src/components/RecentTx';
import About from '../src/components/About';


const Home: NextPage = () => {
  return (
    <div className='flex flex-col ' >
      <Header />
      <LargestSales />
      <RecentTx />
      <Info />
      <About />
    </div>
  );
};

export default Home;

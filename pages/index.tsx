import type { NextPage } from 'next';
import Header from "../src/components/header/Header"
import Info from "../src/components/Info"
import LargestSales from '../src/components/LargestSales';
import RecentTx from '../src/components/RecentTx';


const Home: NextPage = () => {
  return (
    <div className='flex flex-col' >
      <Header />
      <LargestSales />
      <RecentTx />
      <Info />
    </div>
  );
};

export default Home;

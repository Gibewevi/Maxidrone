import Header from "./components/header/Header"
import dynamic from 'next/dynamic';

const DynamicMyMap = dynamic(
  () => import('./components/map/MyMap'),  // assurez-vous que ce chemin est correct
  { ssr: false }
);
export default function Home() {
  return (
    <div className="w-full h-full">
      <Header />
      <div className="w-full mt-[100px] mb-[20px]"></div>
      <DynamicMyMap />
    </div>
  )
}

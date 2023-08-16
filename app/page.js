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
      <div className="w-full h-[100px] flex gap-x-3 justify-center items-center text-slate-800 bg-[#F5FAFD] font-semibold text-lg">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="m16 24l-6.09-8.6A8.14 8.14 0 0 1 16 2a8.08 8.08 0 0 1 8 8.13a8.2 8.2 0 0 1-1.8 5.13Zm0-20a6.07 6.07 0 0 0-6 6.13a6.19 6.19 0 0 0 1.49 4L16 20.52L20.63 14A6.24 6.24 0 0 0 22 10.13A6.07 6.07 0 0 0 16 4Z" /><circle cx="16" cy="9" r="2" fill="currentColor" /><path fill="currentColor" d="M28 12h-2v2h2v14H4V14h2v-2H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V14a2 2 0 0 0-2-2Z" /></svg>
        <span>INTERACTIVES EXPLOITATIONS</span>
      </div>
      <DynamicMyMap />
    </div>
  )
}

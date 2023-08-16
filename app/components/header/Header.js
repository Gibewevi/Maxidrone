import Title from "./Title";

export default function Headers() {
    return (
        <div className="z-50 bg-white abolute top-0 fixed w-full h-[90px] p-4">
            <div className="bg-white max-w-6xl left-0 right-0 ml-auto mr-auto h-full flex flex-row gap-x-5 justify-between items-center">
                <img src="/images/MAXIDRONE-LOGO-OFFICIEL.png" alt="Maxidrone Logo" className=" h-[70px]" />
                <ul className="flex flex-row w-full justify-around text-sm">
                    <Title name="DEVIS" />
                    <Title name="CONTACT" />
                    <Title name="A PROPOS" />
                    <Title name="CONFIDENTIALITE" />
                    <button className="p-1 pr-2 pl-2 bg-[#03A9F4] text-white hover:bg-sky-500">COMPTE PRO</button>
                </ul>
            </div>
        </div>
    );
}

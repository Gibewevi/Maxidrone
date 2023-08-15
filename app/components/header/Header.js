import Title from "./Title";
export default function Headers() {
    return (
        <div className="max-w-5xl  mx-auto h-[90px] flex flex-row gap-x-5 justify-between items-center p-4">
            <img src="/images/MAXIDRONE-LOGO-OFFICIEL.png" alt="Maxidrone Logo" className=" h-[70px]" />
            <ul className="flex flex-row w-full justify-around text-sm">
                <Title name="DEVIS"/>
                <Title name="CONTACT"/>
                <Title name="A PROPOS"/>
                <Title name="CONFIDENTIALITE"/>
                <Title name="ESPACE PERSONNEL"/>
            </ul>
        </div>
    );
}

import heart from "../assets/navbar/heart.svg"
import boutonAdd from "../assets/favorite/bouton-ajouter.svg"

export default function CardFavorite(props: { src: string | undefined; name: string | undefined; }) {
    return <>
        <div className="group w-80 h-80 border border-gray-300 rounded-[12px] m-8 max-w-sm relative overflow-hidden">
            <img src={props.src} alt={props.name} className="w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105" />
            <button className="w-10 p-[0.55rem] bg-colorLight absolute top-0 rounded-full right-1 m-2 bg-opacity-80 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                <img src={heart} alt="heart" />
            </button>
            <button className="w-10 p-[0.55rem] bg-colorLight absolute top-12 rounded-full right-1 m-2 bg-opacity-80 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                <img src={boutonAdd} alt="add" />
            </button>
        </div>
    </>
}

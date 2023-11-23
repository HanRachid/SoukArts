import edit_icon from "../assets/favorite/edit.svg"
import search_icon from "../assets/favorite/search_icon.svg"

const HeaderFavorite = () => {
    return (
        <header className="flex flex-col mt-10">
            <div className="flex justify-between items-center p-4">
                <div className="flex space-x-4">

                    <div className='group flex items-center px-2 py-2 text-medium font-secondary hover:text-colorGold hover:scale-[1.02] transition-all duration-300 mr-6'>
                        <span className=' z-10'>
                            <button className="font-secondary text-xl">Favorites</button>
                            <span className='absolute bottom-0 left-0 w-full h-0.5 bg-colorGold transform scale-x-0 origin-left transition-transform group-hover:scale-x-100 duration-300'></span>
                        </span>
                    </div>
                    <div className='group flex items-center px-2 py-2 text-medium font-secondary hover:text-colorGold hover:scale-[1.02] transition-all duration-300'>
                        <span className=' z-10'>
                            <button className="font-secondary text-xl">My Collections</button>
                            <span className='absolute bottom-0 left-0 w-full h-0.5 bg-colorGold transform scale-x-0 origin-left transition-transform group-hover:scale-x-100 duration-300'></span>
                        </span>
                    </div>
                </div>
                <div className="relative">
                    <input
                        type="search"
                        placeholder="Search your favorites"
                        className="pl-10 pr-4 py-2 border rounded-full bg-colorBeigeLight outline-none placeholder:text-colorBlack"
                    />

                    <img src={search_icon} alt="search icon" className="w-5 h-5 absolute left-2 top-1/2 transform -translate-y-1/2 ml-2 mr-2" />
                </div>
            </div>
            <div className='w-full h-0.5 bg-colorGold mb-6 mt-6'></div>
            <div className="flex items-center p-4">
                <div className="rounded-full border p-2">
                    <img src={edit_icon} className="w-5 h-5" />
                </div>
                <div className="ml-2">
                    <div className="font-semibold">Name</div>
                    <button className="text-sm text-gray-600">Edit profile</button>
                </div>
            </div>
        </header>
    );
};

export default HeaderFavorite;

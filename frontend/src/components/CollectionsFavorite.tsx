
import { FiEdit2, FiTrash2, FiShare2, FiMoreVertical } from 'react-icons/fi';

const CollectionsFavorite = (props: { title: any; subtitle: any; imageUrl: any; onEdit: any; onDelete: any; onShare: any; onToggleDialog: any; onshowDialog: any }) => {
    const { title, subtitle, imageUrl, onEdit, onDelete, onShare, onToggleDialog, onshowDialog } = props;
    const dialogInitialClasses = "opacity-0 translate-y-2";

    // When visible, the dialog is fully opaque and translated to its final position (translate-y-0)
    const dialogVisibleClasses = "opacity-100 translate-y-0";

    // Define the transition you want to apply to the dialog
    const transitionClasses = "transition ease-out duration-300";

    //

    return (
        <div className='w-full max-w-xl m-12 relative'> {/* Added relative for positioning dialog */}

            <div className="rounded-lg overflow-hidden">
                <img src={imageUrl} alt={title} className="w-full h-full object-cover object-center" />
            </div>
            <div className='flex justify-between'>
                <div className="p-4">
                    <h3 className="font-secondary text-3xl">{title}</h3>
                    <p className="text-gray-600 font-secondary">{subtitle}</p>
                </div>
                <div className="flex items-center justify-between">
                    <button onClick={onToggleDialog}>
                        <FiMoreVertical className="text-gray-600 hover:text-gray-800 cursor-pointer w-8 h-8" />
                    </button>
                </div>

            </div>


            {/* Dialog */}
            {onshowDialog && (
                <div className={`absolute right-0 bottom-20 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl z-10 ${transitionClasses} ${onshowDialog ? dialogVisibleClasses : dialogInitialClasses}`}>
                    <ul className="text-gray-700">
                        <li className="cursor-pointer px-4 py-2 hover:bg-gray-100" onClick={onEdit}>
                            <FiEdit2 className="inline-block mr-2" />
                            Edit
                        </li>
                        <li className="cursor-pointer px-4 py-2 hover:bg-gray-100" onClick={onDelete}>
                            <FiTrash2 className="inline-block mr-2" />
                            Delete collection
                        </li>
                        <li className="cursor-pointer px-4 py-2 hover:bg-gray-100" onClick={onShare}>
                            <FiShare2 className="inline-block mr-2" />
                            Share
                        </li>
                    </ul>
                </div>
            )}


        </div>
    );
};

export default CollectionsFavorite;

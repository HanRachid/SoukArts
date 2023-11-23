import CardFavorite from "../components/CardFavorite";
import CollectionsFavorite from "../components/CollectionsFavorite";
import HeaderFavorite from "../components/HeaderFavorite";
import imgpath from "../assets/favorite/artisanat.png";
import { useState } from 'react';

const images = [
    { src: imgpath, name: 'Image 1', title: 'Rug', subtitle: '1 resource' },
    { src: imgpath, name: 'Image 2', title: 'Shoes', subtitle: '1 resource' },
    { src: imgpath, name: 'Image 1', title: 'Rug', subtitle: '1 resource' },
    { src: imgpath, name: 'Image 2', title: 'Shoes', subtitle: '1 resource' },
    { src: imgpath, name: 'Image 1', title: 'Rug', subtitle: '1 resource' },
    { src: imgpath, name: 'Image 2', title: 'Shoes', subtitle: '1 resource' },
];

export default function Favorite() {
    const handleEdit = () => {
        console.log('Edit clicked');
    };

    const handleDelete = () => {
        console.log('Delete clicked');
    };

    const handleShare = () => {
        console.log('Share clicked');
    };
    const [openDialogIndex, setOpenDialogIndex] = useState<null | number>(null);

    const handleToggleDialog = (index: number) => {
        setOpenDialogIndex(openDialogIndex === index ? null : index);
    };


    return (
        <>
            <HeaderFavorite />
            {/* Render CardFavorite components */}

            {/*<div className="w-screen px-24 grid lg:grid-cols-4 grid-cols-2 gap-x-8">
                {images.map((image, index) => (
                    <CardFavorite key={`card-${index}`} src={image.src} name={image.name} />
                ))}
            </div>*/}

            {/* Render CollectionsFavorite components */}
            <div className="mx-auto grid lg:grid-cols-2 grid-cols-1 gap-20">
                {images.map((image, index) => (
                    <CollectionsFavorite
                        key={`collection-${index}`}
                        imageUrl={image.src}
                        title={image.title}
                        subtitle={image.subtitle}
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                        onShare={handleShare}
                        onToggleDialog={() => handleToggleDialog(index)}
                        onshowDialog={openDialogIndex === index}
                    />
                ))}
            </div>
        </>
    );
}

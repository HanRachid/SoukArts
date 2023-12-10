
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import categoryRug from '../../assets/home/categoryRug.jpg';
import categoryLamp from '../../assets/home/categoryLamp.jpg';
import categoryPouf from '../../assets/home/categoryPouf.png';
import categoryPillow from '../../assets/home/categoryPillow.jpg';
import categoryShoes from '../../assets/home/categoryShoes.jpeg';
import categoryBag from '../../assets/home/categoryBag.jpeg';

const arrayCategories = [
  { id: 1, image: categoryRug, label: 'Rugs', path: '/categories/rugs' },
  { id: 2, image: categoryLamp, label: 'Lamps', path: '/categories/lamps' },
  { id: 3, image: categoryPouf, label: 'Poufs', path: '/categories/poufs' },
  { id: 4, image: categoryPillow, label: 'Pillows', path: '/categories/pillows' },
  { id: 5, image: categoryShoes, label: 'Shoes', path: '/categories/shoes' },
  { id: 6, image: categoryBag, label: 'Bags', path: '/categories/bags' },
];

const categoryVariants = {
  hidden: { y: -30, opacity: 0 },
  visible: { y: 0, opacity: 1 },
  hover: { scale: 1.05 },
};

const imageVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 2.5 } },
};

const Categories = () => {
  const responsiveSettings = [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 1,
         arrows:true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
         arrows:true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
         arrows:true,
      },
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: responsiveSettings,
    arrows:true,
  };

  return (
     <Slider {...sliderSettings}>
      {arrayCategories.map((category) => (
        <div key={category.id} >
          <Link to={category.path}>
            <motion.div
              variants={categoryVariants}
              whileHover="hover"
              className="flex justify-center items-center flex-col mt-12 overflow-x-auto transform transition-transform duration-200 ease-in-out"
            >
              <motion.div
                variants={imageVariants}
                initial="hidden"
                animate="visible"
                className="h-32 w-32 rounded-full border-2 overflow-hidden border-colorBlack"
              >
                <img
                  src={category.image}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <p className="text-colorBrown mt-4">{category.label}</p>
            </motion.div>
          </Link>
        </div>
      ))}
    </Slider>
  );
};

export default Categories;

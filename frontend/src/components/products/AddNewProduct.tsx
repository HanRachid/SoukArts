import { ChangeEvent, useEffect, useState } from "react";
import { Product } from "../../../types";
import { addProduct } from "../../api/products";
import { router } from "../../App";
import {
  Button,
  Input,
  Option,
  Select,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import { IoClose } from "react-icons/io5";

type Category = {
  name: string;
  Subcategories: string[];
};

export default function AddNewProduct() {
  const [productValues, setProductValues] = useState<Product>({
    title: "",
    description: "",
    category: "",
    price: 0,
    quantity: 0,
    images: [],
  });

  const [browsedImages, setBrowsedImages] = useState<string[]>([]);

  const handleFileUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target?.files;
    if (files) {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const image = new FormData();
        const localUrl = URL.createObjectURL(file);
        image.append("file", file);
        image.append("cloud_name", "dmgfba0uv");
        image.append("upload_preset", "olz6hm0s");

        setProductValues((prevState) => ({
          ...prevState,
          images: [...prevState.images, image],
        }));
        setBrowsedImages((prevState) => [...prevState, localUrl]);
      }
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setProductValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSelectCategory = (value: string) => {
    setProductValues((prevState) => ({
      ...prevState,
      category: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    addProduct(productValues);
    setProductValues({
      title: "",
      description: "",
      category: "",
      price: 0,
      quantity: 0,
      images: [],
    });
    setBrowsedImages([]);
    router.navigate("/Dashboard/Products");
  };

  const subcategoriesData: Category[] = [
    {
      name: "Rugs",
      Subcategories: [
        "Azilal Rug",
        "Boucherouite Rugs",
        "Kilim Rugs",
        "Taznakht Rugs",
        "Boujad Rugs",
        "Zanafi Rugs",
        "Beni Ourain Rugs",
      ],
    },
    {
      name: "Poufs",
      Subcategories: [
        "Round Leather Poufs",
        "Boucherouite Poufs",
        "Square Leather Poufs",
        "Kilim Berber Poufs",
      ],
    },
    {
      name: "Lamps",
      Subcategories: [
        "Pendant Lights",
        "Table Lamps",
        "Lampshades",
        "Floor Lamps",
        "Brass Lamps",
        "Rattan Lamps",
      ],
    },
    {
      name: "Pillows",
      Subcategories: [
        "Berber Pillows",
        "Beni Ourain Pillows",
        "Kilim Pillows",
        "Sahara Pillows",
        "Handira Pillows",
      ],
    },
    {
      name: "Shoes",
      Subcategories: [
        "Women Shoes",
        "Man Shoes",
        "Babouche",
        "Leather Sandals",
        "Rattan Shoes",
      ],
    },
    {
      name: "Bags",
      Subcategories: [
        "Leather Bags",
        "Kilim Bags",
        "Rattan Bags",
        "Straw Market Bag",
      ],
    },
    {
      name: "Jewelry",
      Subcategories: [
        "Earrings",
        "Necklaces",
        "Rings",
        "Bracelets",
        "Ankle Bracelet",
      ],
    },
  ];

  const findSubcategory = subcategoriesData.find(
    ({ name }) => name == productValues.category
  );

  return (
    <section className="flex flex-col z-0 relative">
      <div>
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Product details
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                This information will be displayed publicly so be careful what
                you share.
              </p>
            </div>
          </div>
          <div className="mt-5 md:col-span-2 md:mt-0">
            <div className="shadow sm:overflow-hidden sm:rounded-md">
              <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                <div className="flex flex-col gap-6">
                  <Input
                    label="Title"
                    onChange={handleChange}
                    value={productValues.title}
                    color="brown"
                    name="title"
                  />

                  <div>
                    <Textarea
                      label="Description"
                      name="description"
                      onChange={handleChange}
                      value={productValues.description}
                      color="brown"
                    />
                    <Typography variant="small" color="blue-gray">
                      Brief description for your Product.
                    </Typography>
                  </div>

                  <Select
                    label="Category"
                    name="category"
                    value={productValues.category}
                    onChange={handleSelectCategory}
                    color="brown"
                  >
                    <Option value="Rugs">Rugs</Option>
                    <Option value="Poufs">Poufs</Option>
                    <Option value="Lamps">Lamps</Option>
                    <Option value="Pillows">Pillows</Option>
                    <Option value="Shoes">Shoes</Option>
                    <Option value="Bags">Bags</Option>
                    <Option value="Jewelry">Jewelry</Option>
                  </Select>

                  {productValues.category && (
                    <Select
                      label="Subcategory"
                      name="subcategory"
                      value=""
                      onChange={() => {}}
                      color="brown"
                    >
                      {findSubcategory?.Subcategories.map((subcategory) => (
                        <Option key={subcategory} value={subcategory}>
                          {subcategory}
                        </Option>
                      ))}
                    </Select>
                  )}

                  <label className="block text-sm font-medium text-gray-700">
                    Photos
                  </label>
                  <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                    <div className="space-y-1 text-center">
                      <svg
                        className="mx-auto h-12 w-12 text-gray-400"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className="flex text-sm text-gray-600">
                        <label className="relative cursor-pointer rounded-md bg-white font-medium text-gold-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-gold-500 focus-within:ring-offset-2 hover:text-gold-500">
                          <span>Upload a file</span>
                          <input
                            type="file"
                            name="image"
                            className="sr-only"
                            multiple
                            onChange={handleFileUpload}
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                  {browsedImages.map((photo, index) => (
                    <div key={index} className="relative">
                      <div className="w-full overflow-hidden rounded-md">
                        <button
                          className="absolute -right-2 -top-2 rounded-full bg-gray-200 shadow-md h-8 w-8 flex items-center justify-center"
                          onClick={() => {
                            setProductValues({
                              ...productValues,
                              images: productValues.images.filter(
                                (_photo, indexPhoto) => indexPhoto !== index
                              ),
                            });
                            setBrowsedImages(
                              browsedImages.filter(
                                (_photo, indexPhoto) => indexPhoto !== index
                              )
                            );
                          }}
                        >
                          <IoClose />
                        </button>
                        <img
                          src={photo}
                          alt=""
                          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>

      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Inventory and pricing
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Please enter the inventory and pricing details.
              </p>
            </div>
          </div>
          <div className="mt-5 md:col-span-2 md:mt-0">
            <form onSubmit={handleSubmit}>
              <div className="overflow-hidden shadow sm:rounded-md">
                <div className="bg-white px-4 py-5 sm:p-6">
                  <div className="flex flex-col gap-6">
                    <Input
                      label="Price"
                      name="price"
                      type="number"
                      onChange={handleChange}
                      value={productValues.price}
                    />

                    <Input
                      label="Quantity"
                      name="quantity"
                      onChange={handleChange}
                      value={productValues.quantity}
                    />
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                  <Button type="submit" color="brown">
                    Save
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

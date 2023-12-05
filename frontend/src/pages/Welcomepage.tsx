import { useState } from "react";
import { Link } from "react-router-dom";

function Welcomepage() {
    const handlesubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        console.log("Form Data:", formData);
    }

    const [formData, setFormData] = useState({
        email: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }
    return (
        <section>
            <div className="mt-10 mb-20">

                <h2 className='text-center font-primary text-large mb-10 lg:text-extraLarge'>
                    Welcome back!
                </h2>
                <h1 className="text-center font-secondary">Become a seller, Let’s grow your business together!</h1>
                <h1 className="text-center font-secondary">Enter your business email to get started.</h1>
                <br />
                <br />
                <div>
                    <form className='max-w-md mx-auto mt-4 px-4 sm:px-0'
                        onSubmit={handlesubmit}
                        autoComplete="on"
                    >
                        <div className="mb-4">

                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Confirmer Your Email"
                                className="w-full py-2 px-3 border-2 border-colorBeige/80 rounded-bl-xl rounded-tr-xl bg-gray-50"
                                required
                            />

                        </div>

                        <div className="mt-4">
                            <button
                                type="submit"
                                className="w-full bg-colorGold py-2.5 rounded-bl-xl rounded-tr-xl text-gray-50 font-semibold font-secondary hover:scale-[1.02] transition-all duration-100 hover:bg-opacity-90"
                                aria-label="Submit Form"
                            >
                                <Link to="/shop">Next </Link>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Welcomepage;

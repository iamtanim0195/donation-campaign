import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const DetailCard = ({ detail }) => {

    const { id, picture, title, description, category, category_bg_color, card_bg_color, text_button_bg_color, price } = detail || {};

    const handleAddToDetails = () => {

        const addedDonationArry = [];


        const donationItem = JSON.parse(localStorage.getItem('donationItem'));

        if (!donationItem) {
            addedDonationArry.push(detail);
            localStorage.setItem('donationItem', JSON.stringify(addedDonationArry));
        } else {

            const isExist = donationItem.find(detail => detail.id == id)

            if (!isExist) {
                addedDonationArry.push(...donationItem, detail);
                localStorage.setItem('donationItem', JSON.stringify(addedDonationArry));
                toast.success('Donation is successful', {
                    position: toast.POSITION.TOP_RIGHT,
                });
            } else {
                toast.error('Donation failed!', {
                    position: toast.POSITION.TOP_RIGHT,
                });
            }

        }

    }

    return (
        <div>
            <div className="relative">
                <img src={picture} alt="Image" className="w-full h-[70vh]" />
                <div className="absolute  left-0 right-0 flex items-center bottom-0 bg-black bg-opacity-50 py-5 ">
                    
                        <button onClick={handleAddToDetails} style={{ backgroundColor: text_button_bg_color }} className="relative left-5 right-2  hover:bg-red-600 text-white font-bold py-2 px-4 rounded">Donate $ {price}</button>
                    
                </div>
            </div>
            <div className="py-10">
                <h1 className="text-2xl font-bold">{title}</h1>
                <p>{description}</p>
            </div>
        </div>
    );
};


export default DetailCard;
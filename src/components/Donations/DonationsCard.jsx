import { Link, } from "react-router-dom";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const DonationsCard = ({ donation }) => {

    const { id, picture, title, description, category, category_bg_color, card_bg_color, text_button_bg_color, } = donation || {};

    const handleAddToDetails = () => {

        const addedDonationArry = [];


        const donationItem = JSON.parse(localStorage.getItem('donationItem'));

        if (!donationItem) {
            addedDonationArry.push(donation);
            localStorage.setItem('donationItem', JSON.stringify(addedDonationArry));
        } else {

            const isExist = donationItem.find(donation => donation.id == id)

            if (!isExist) {
                addedDonationArry.push(...donationItem, donation);
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
            <Link onClick={handleAddToDetails}>

                <div className="relative flex max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                    <div className=" relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
                        <img
                            className="w-full"
                            src={picture}
                            alt={title}
                        />
                    </div>
                    <div className={`p-6`} style={{backgroundColor:card_bg_color}}>
                        <h4 style={{backgroundColor:category_bg_color, color:text_button_bg_color}} className="btn ">
                            {category}
                        </h4>
                        <p style={{color:text_button_bg_color}} className=" mt-3 block font-sans text-xl font-normal leading-relaxed text-gray-700 antialiased">
                            {title}
                        </p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default DonationsCard;
import { Link } from "react-router-dom";

const DonateCard = ({ donation }) => {

    const { id, price, picture, title, description, category, category_bg_color, card_bg_color, text_button_bg_color, } = donation || {};

    return (
        <div>
            <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                    <img
                        src={picture}
                        alt={title}
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="p-6 flex flex-col gap-3">
                    <h4 className="btn ">
                        {category}
                    </h4>
                    <p className="mt-3 block font-sans text-xl font-normal leading-relaxed text-gray-700 antialiased">
                        {title}
                    </p>
                    <p>{price}</p>
                    <Link to={`/donation_details/${id}`}>
                        <button className="btn">
                            View Details
                        </button>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default DonateCard;
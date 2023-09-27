import { Link } from "react-router-dom";

const DonateCard = ({ donation }) => {

    const { id, price, picture, title, description, category, category_bg_color, card_bg_color, text_button_bg_color, } = donation || {};

    return (
        <div>
            <div style={{backgroundColor:card_bg_color}} className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div  className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                    <img
                        src={picture}
                        alt={title}
                        className="h-full w-full object-cover"
                    />
                </div>
                <div  className="p-6 flex flex-col gap-3">
                    <h4 style={{backgroundColor:category_bg_color, color:text_button_bg_color}} className="btn ">
                        {category}
                    </h4>
                    <p style={{color:text_button_bg_color}} className="mt-3 block font-sans text-xl font-normal leading-relaxed text-gray-700 antialiased">
                        {title}
                    </p>
                    <p style={{color:text_button_bg_color}}> {price}</p>

                    <button style={{backgroundColor:text_button_bg_color}}  className="btn text-white">
                        View Details
                    </button>

                </div>
            </div>

        </div>
    )
}

export default DonateCard;
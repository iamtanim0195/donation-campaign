import { Link, } from "react-router-dom";


const DonationsCard = ({ donation }) => {

    const { id, picture, title, description, category, category_bg_color, card_bg_color, text_button_bg_color, } = donation || {};

    

    return (
        <div>
            
            <Link to={`/donation_details/${id}`} >

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
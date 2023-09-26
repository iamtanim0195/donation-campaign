
const DonationsCard = ({ donation }) => {

    const { picture, title, description, category, category_bg_color, card_bg_color, text_button_bg_color, } = donation || {};

    return (
        <div>
            <div className="relative flex max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className=" relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
                    <img
                        className="w-full"
                        src={picture}
                        alt={title}
                    />
                </div>
                <div className={`${card_bg_color} p-6 `}>

                    <h4 className="btn ">
                        {category}
                    </h4>
                    <p className="mt-3 block font-sans text-xl font-normal leading-relaxed text-gray-700 antialiased">
                        {title}
                    </p>
                </div>
            </div>

        </div>
    )
}

export default DonationsCard;

const DetailCard = ({detail}) => {

    const { id, picture, title, description, category, category_bg_color, card_bg_color, text_button_bg_color,price } = detail || {};
    return (
        <div>
            <div className="relative">
                <img src={picture} alt="Image" className="w-full h-[70vh]" />
                <div className="absolute  left-0 right-0 flex items-center bottom-0 bg-black bg-opacity-50 py-5 ">
                    <button className="relative left-5 right-2 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">Donate {price}</button>
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
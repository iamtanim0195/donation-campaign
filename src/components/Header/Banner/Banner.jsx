
const Banner = () => {
    return (
        <div className="h-[70vh] bg-black-opacity-5  bg-[url('https://i.ibb.co/Wk9FjjQ/image.png')] flex flex-col justify-center items-center">

            <h1 className="text-2xl font-bold">I Grow By Helping People In Need</h1>

            <div className="mb-3 w-full  flex justify-center items-center">
                <div className="relative flex w-1/2 flex-wrap items-stretch bg-white">
                    <input
                        type="search"
                        className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                        placeholder="Search here..."
                        aria-label="Search"
                        aria-describedby="button-addon1"
                    />
                    {/*Search button*/}
                    <button
                        className="bg-red-500 relative z-[2] flex items-center rounded-r  px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg"
                        type="button"
                        id="button-addon1"
                        data-te-ripple-init=""
                        data-te-ripple-color="light"
                    >
                        Search
                    </button>
                </div>
            </div>


        </div>

    )
}

export default Banner;
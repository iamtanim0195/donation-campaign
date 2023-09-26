import DonationsCard from "./DonationsCard";

const Donations = ({donations}) => {

    return (
        <div>
            <h1 className="text-2xl text-center">Donations</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {             
                    donations?.map((donation)=> <DonationsCard key={donation.id} donation={donation} ></DonationsCard>)
                }
            </div>
        </div>
    );
};

export default Donations;
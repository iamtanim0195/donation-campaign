import DonationsCard from "./DonationsCard";

const Donations = ({donations}) => {

    return (
        <div>
            <div className="grid grid-cols-1 pt-10 md:grid-cols-2 lg:grid-cols-4 gap-3">
                {             
                    donations?.map((donation)=> <DonationsCard key={donation.id} donation={donation} ></DonationsCard>)
                }
            </div>
        </div>
    );
};

export default Donations;
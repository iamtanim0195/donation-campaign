import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import DonationsCard from "../../components/Donations/DonationsCard";
import DonateCard from "./donateCard";


const Donation = () => {

  const [donate, setDonate] = useState([]);
  const [notFound, setNotFound] = useState("");
  const [isShow, setIsShow] = useState(false);
  const [totalDonations, setTotalDonations] = useState(0)


  useEffect(() => {
    const donationItem = JSON.parse(localStorage.getItem('donationItem'));
    if (donationItem) {
      setDonate(donationItem)
      const total = donationItem.reduce((preValue, currentItem) => preValue + parseFloat(currentItem.price), 0);
      setTotalDonations(total);
      console.log(totalDonations);
    } else {

      setNotFound('no data found')
      toast.error('No data found', {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  }, []);

  return (
    <div>
      {notFound ? <p>{notFound}</p> : <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-5">
          {
            isShow ? donate?.map((donation) => <DonateCard key={donation.id} donation={donation} ></DonateCard>)
              :
              donate.slice(0, 4).map((donation) => <DonateCard key={donation.id} donation={donation} ></DonateCard>)

          }
        </div>
        {donate.length > 4 && <button onClick={() => setIsShow(!isShow)} className="btn block mx-auto">
          {isShow ? 'See less' : 'See All'}
        </button>}
      </div>}
    </div>
  )
}

export default Donation;
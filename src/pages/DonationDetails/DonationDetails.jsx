import { useEffect, useState } from "react"
import { useLoaderData, useParams } from "react-router-dom"
import DetailCard from "./DetailCard"

const DonationDetails = () => {
    const [detail, setDetail] = useState()

    const { id } = useParams()
    const details = useLoaderData()
    useEffect(() => {
        const findDetail = details?.find(detail => detail.id == id)

        setDetail(findDetail)

    }, [id, details])

    return (
        <DetailCard detail={detail}></DetailCard>
    )
}

export default DonationDetails
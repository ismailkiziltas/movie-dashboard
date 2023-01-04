import { GrSend } from 'react-icons/gr'
import { IoMdDownload } from 'react-icons/io'
import { HiMailOpen } from 'react-icons/hi'


const ActivityData = [
    {
        id: 1,
        hour: "12:03AM",
        date: "11-02-2018",
        icon: <GrSend className='blue' />,
        title: "Invoice Sent",
        desc: "Invoice #0076 of amount $1300 has been emailed to email@address.com, email2@address.com "
    },
    {
        id: 2,
        hour: "02:41PM",
        date: "08-02-2018",
        icon: <GrSend className='blue' />,
        title: "Invoice Sent",
        desc: "Invoice #0075 of amount $2000 has been emailed to email@address.com"
    },
    {
        id: 3,
        hour: "02:57PM",
        date: "11-01-2018",
        icon: <IoMdDownload className='green' />,
        title: "Payment Received",
        desc: "Invoice #0072 of amount $1300 has been paid and added to your account."
    },
    {
        id: 4,
        hour: "09:49AM",
        date: "04-01-2018",
        icon: <HiMailOpen className='orange' />,
        title: "Invoice Generated",
        desc: "Invoice #0076 of amount $1300 has been generated and is ready to be sent. Send now"
    },
    {
        id: 5,
        hour: "03:54PM",
        date: "10-12-2017",
        icon: <IoMdDownload className='green' />,
        title: "Payment Received",
        desc: "Invoice #0070 of amount $900 has been paid and added to your account."
    },
    {
        id: 6,
        hour: "02:06PM",
        date: "11-11-2017",
        icon: <HiMailOpen className='orange' />,
        title: "Invoice Generated",
        desc: "Invoice #0075 of amount $2000 has been generated and is ready to be sent. Send now"
    },
]

export default ActivityData
import { AiOutlineHome } from 'react-icons/ai'
import { HiDocumentDuplicate } from 'react-icons/hi'
import { BsPeopleFill } from 'react-icons/bs'
import { TbBadge } from 'react-icons/tb'

const Navigation = [
    {
        id: 1,
        name: "Home",
        icon: <AiOutlineHome />,
        path: "/"
    },
    {
        id: 2,
        name: "Users",
        icon: <BsPeopleFill />,
        path: "/users"
    },
    {
        id: 3,
        name: "Reports",
        icon: <HiDocumentDuplicate />,
        path: "/reports"
    },
    {
        id: 4,
        name: "Badges",
        icon: <TbBadge />,
        path: "/badges"
    }
]

export default Navigation
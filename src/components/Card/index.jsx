import React from 'react'
import { CardWrapper, CardHeader, CardTitle, CardHeaderContent } from './Card.styled'

const Card = ({ content, header, title }) => {
    return (
        <CardWrapper>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardHeaderContent>{header}</CardHeaderContent>
            </CardHeader>
            {content}
        </CardWrapper>
    )
}

export default Card
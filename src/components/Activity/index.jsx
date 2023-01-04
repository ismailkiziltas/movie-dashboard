import React from 'react'
import ActivityData from '../../__mocks__/activity'
import { ActivityWrapper, ActivityItemStyled, ActivityDate, ActivityIcon, ActivityDesc } from './Activity.styled'

const Activity = () => {

    return (
        <ActivityWrapper>
            {
                ActivityData?.map((item) => (
                    <ActivityItemStyled key={item.id}>
                        <ActivityDate>
                            <p>{item.hour}</p> <p>{item.date}</p>
                        </ActivityDate>
                        <ActivityIcon>
                            <i>{item.icon}</i>
                        </ActivityIcon>
                        <ActivityDesc>
                            <h4>{item.title}</h4>
                            <p>{item.desc}</p>
                        </ActivityDesc>
                    </ActivityItemStyled>
                ))
            }
        </ActivityWrapper>
    )
}

export default Activity
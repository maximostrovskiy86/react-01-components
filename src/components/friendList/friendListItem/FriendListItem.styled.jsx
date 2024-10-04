import styled from '@emotion/styled';


export const FriendItem = styled.li`
    display: flex;
    align-items: center;
    width: 300px;
    padding: 10px;
    margin-top: 10px;
    box-shadow: 0 1px 3px rgb(0 0 0 / 12%),
    0 1px 1px rgb(0 0 0 / 14%),
    0 2px 1px rgb(0 0 0 / 20%);

    :first-child {
        margin-top: 0;
    }

    & > * + * {
        margin-left: 5px;
    }

    p.name {
        font-size: 26px
    }
`

export const Status = styled.span`
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => (props.isOnline ? 'green' : 'red')};
    /*background-color: //${({isOnline}) => (isOnline ? 'green' : 'red')}; second variant*/
`


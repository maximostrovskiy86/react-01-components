import styled from "@emotion/styled";

export const TableHEad  = styled.tr`
    height: 35px;
    background-color: #00bcd5;
    color: #fff;
`


export const TransactionHistoryWrapper = styled.div`
    width: 600px;
    margin-left: 50px;
`

export const RowTransaction = styled.tr`
    height: 30px;
    text-align: left;
    background-color: #fff;
    :nth-of-type(even) {
        background-color: #ecf1f4;
    }
`
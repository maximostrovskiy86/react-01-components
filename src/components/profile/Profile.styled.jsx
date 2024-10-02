import styled from "@emotion/styled";

export const Container = styled.div`
    width: 350px;
    margin: 20px;
    padding: 50px;
    background-color: #e7ecf2;
`;

export const Description = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    border-radius: 10px;
    margin: -1px;

    img {
        width: 50%;
        padding: 15px;
        object-fit: contain;
    }

    h1 {
        margin: 0;
        text-align: center;
    }
`;

export const Stats = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    box-sizing: border-box;

    li {
        padding: 20px;
        display: flex;
        flex-basis: calc(100% / 3);
        flex-direction: column;
        justify-content: space-around;
        background: #f3f6f9;
        border: 1px solid #dee5ed;

        &:first-of-type{
            border-bottom-left-radius: 10px;
        }

        &:last-of-type {
            border-bottom-right-radius: 10px;
        }
    }
`;

export const Quantity = styled.span`
    color: #1f3349;
    font-size: 24px;
    font-weight: 700;
`;

export const Label = styled.span`
    margin-bottom: 5px;
    color: #bbc3cb;
`;


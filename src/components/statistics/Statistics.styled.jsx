import styled from "@emotion/styled";


const Stat = styled.section`
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    h2 {
        font-size: 32px;
        font-weight: bold;
    }
`;

const List =  styled.ul`
    list-style: none;
    display: flex;

    li {
        width: 100px;
        height: 100px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

export {Stat, List}
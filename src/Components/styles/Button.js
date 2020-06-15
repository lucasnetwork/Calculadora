import styled from 'styled-components'

const Button = styled.button`
    background-color:#fff;
    box-shadow: 1px 1px 2px 1px rgba(0,0,0,0.2);
    &.number{
        height:60px;    
    }
    outline:none;
    width:50px;
    height:36px;
    text-align:center;
    border:none;
    transition: filter 0.3s;
    :hover{
        filter:brightness(95%)
    };
    :active{
        filter:brightness(75%)
    }
`

export default Button
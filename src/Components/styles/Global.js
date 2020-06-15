import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }
    html,body,#root{
        height:100vh;
        width:100%;
    }
    .App{
        display:flex;
        justify-content:space-around;
        align-items:center;
        height:100%;
        .content{
            display:flex;
            flex-direction:column;
            width:255px
        }
    }
`

export default GlobalStyle
import { cursorTo } from "readline";

export const style = {
    appbar: {
        backgroundColor: 'white',
        position: 'static',

    },
    container: {
        maxWidth: "xl",

    },
    AdbIcon: {
        display: {
            xs: 'none',
            md: 'flex'
        }
        , mr: 1
    },
    logo: {
        width: '30px',
        height: 'auto',
    },
    logoText:
    {
        mr: 1,
        display: { xs: 'none', md: 'flex' },
        fontFamily: 'Montserrat',
        fontSize: '20px',

        fontWeight: "700",

        letterSpacing: '.1rem',
        lineheight: '41.45px',
        color: 'black',
        textDecoration: 'none',
        padding: '5px',

    },
    navText: {
        fontFamily: "Poppins",
        padding: '15px',
        
        // justifyContent:"space-between",
        fontSize: '16px',
        fontWeight: '500',
        lineHeight: '20px',
        // textAlign: "center",
        color: 'black',
        cursor:'pointer',
    },
    rightSideIcons:{
        color:"black",
    }




}


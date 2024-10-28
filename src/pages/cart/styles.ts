import { height, width } from '@mui/system';
export const style = {
    mainBox: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        paddingTop: '10px',
        // background: 'red',
        width: '100%'

    },
    leftBar: {
        display: { xl: 'flex', lg: 'flex', md: 'none', sm: 'none', xs: 'none' },
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height:'70px',
        background: '#F9F1E7',
        width: '100%',
        // padding: '10px',
    },
    barTitle: {
        fontFamily: 'Poppins',
        fontSize: '16px',
        fontWeight: '500',
        lineHeight: '2px',
        textAlign: 'left',


    },
    rightBar: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        // justifyContent: 'center',
        background: '#F9F1E7',
        width: '100%',
        height: '200px',
        marginBottom:"20px",


    },
    cartTitle: {
        fontFamily: 'Poppins',
        fontSize: '32px',
        fontWeight: '600',
        marginTop:'25px',
        lineHeight: '20px',
        textAlign: 'left',

    },
    boxSubTotal: {
        display: "flex",
        alignItems: 'center',
        width: '50%',
        justifyContent: "space-around",

    },
    cartSubTotal: {

        fontFamily: 'Poppins',
        fontSize: '16px',
        fontWeight: '450',
        lineHeight: '10px',
        marginTop:'20px',
        // textAlign: 'left',
    },
    subTotalPrice: {
        fontFamily: 'Poppins',
        fontSize: '16px',
        fontWeight: '400',
        lineHeight: '20px',
        color: '#9F9F9F',

    },
    totalPrice: {
        fontFamily: 'Poppins',
        fontSize: '20px',
        fontWeight: '500',
        lineHeight: '10px',
        marginTop:'20px',
        color: '#B88E2F',

    },


    productDetail: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        // padding: '2px 2px 0px 2px ',
    },
    productTitle: {
        color: 'black',
        fontFamily: 'Poppins',
        fontWeight: 600,
        fontSize: '18px',
        lineHeight: '22.8px',
        //   marginBottom: '4px',
    },
    productFeature: {
        color: '#A0A0A0',
        fontFamily: 'Poppins',
        fontWeight: 500,
        fontSize: '14px',
        marginTop: '5px',
        lineHeight: '15px',

    },
    priceContent: {
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        flexDirection: 'flex-start',
        justifyContent: "space-between",

    },

    productPrice: {
        fontFamily: 'Poppins',
        fontWeight: 600,
        fontSize: '18px',
        lineHeight: '20px',
        color: 'black',
        // marginRight: '10px'

    },
    productOldPrice: {
        fontFamily: 'Poppins',
        fontWeight: 600,
        fontSize: '16px',
        lineHeight: '24px',
        textDecoration: 'line-through',
        color: '#B0B0B0',
        // marginLeft: 'auto',
    },

    iconText: {
        fontFamily: 'Poppins',
        fontSize: '16px',
        fontWeight: '600',
        lineHeight: '24px',
        textAlign: 'left',
        color: 'white',

    },
    btnText: {
        fontFamily: 'Poppins',
        fontSize: '16px',
        fontWeight: '600',
        lineHeight: '24px',
        textAlign: 'left',
    },
    chekOutbutton: {
        fontFamily: 'Poppins',
        background: 'none',
        color: 'black',
        borderColor: "black",
        marginTop: '10px',
        marginBottom: '10px',

    }


}

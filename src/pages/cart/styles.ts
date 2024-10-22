import { maxWidth } from './../../../node_modules/@mui/system/sizing/sizing.d';
export const style = {
    mainBox: {
        display: 'flex',
        
        justifyContent: 'space-evenly',
        padding: '40px',
    },
    leftBar: {
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        background: '#F9F1E7',
        width: '60%',
        padding: '20px',
    },
    barTitle: {
        fontFamily: 'Poppins',
        fontSize: '16px',
        fontWeight: '500',
        lineHeight: '24px',
        textAlign: 'left',


    },
    rightBar: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#F9F1E7',
        width: '25%',
    },
    cartTitle: {
        fontFamily: 'Poppins',
        fontSize: '32px',
        fontWeight: '600',
        lineHeight: '48px',
        textAlign: 'left',

    },
    boxSubTotal: {
        display: "flex",
        justifyContent: "space-between",



    },
    cartSubTotal: {

        fontFamily: 'Poppins',
        fontSize: '16px',
        fontWeight: '500',
        lineHeight: '24px',
        // textAlign: 'left',
    },
    subTotalPrice: {
        fontFamily: 'Poppins',
        fontSize: '16px',
        fontWeight: '400',
        lineHeight: '24px',
        color: '#9F9F9F',

    },
    totalPrice: {
        fontFamily: 'Poppins',
        fontSize: '20px',
        fontWeight: '500',
        lineHeight: '30px',
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
        // flexGrow: 1,
        // background: 'red',
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
    }


}
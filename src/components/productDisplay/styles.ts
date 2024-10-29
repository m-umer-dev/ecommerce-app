import { borderRadius, display, height, padding, width } from '@mui/system';

export const style = {
    topBar: {

        width: '100%',
        display: 'flex',
        background: '#F9F1E7',
        padding: '30px',
        marginTop: '400px',
        alignItems: 'center'

    },
    navTitle: {
        color: '#9F9F9F',
        fontFamily: 'Poppins',
        fontSize: '16px',
        fontWeight: '400',
        lineHeight: '24px',
        marginRight: '10px',
        marginLeft: '10px',

        // textAlign: 'left',

    },
    mainBox: {
        width: '100%',
        // background: 'red',
        display: 'flex',
        flexWrap: 'wrap',
    },
    featureBox: {
        width: '20%',
        display:{xs:'none',sm:'none',md:'flex',lg:'flex',xl:'flex'},
        flexDirection:'column',
       
    },
    featureImages: {
        width: '100%',
        // background: 'green',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',

    },
    mainImageBox: {
        // width: '35%',
        width:{xs:"100%",sm:"100%",md:'35%',lg:'35%',xl:'35%'},
        // background: 'gray',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    featureImg: {
        background: '#F9F1E7',
        borderRadius: '10px',
    },
    mainImg: {

        background: '#F9F1E7',
        borderRadius: '10px',
        height: '650px',
        justifyContent:'center',
        alignItems:'center',
        display:'flex',
        

        width: '100%',
    },

    productDetail: {
        
        // width: '50%',
        width:{xs:"100%",sm:"100%",md:"50%",lg:'40%',xl:"40%"},
        padding: '20px',
    },
    productTitle: {
        fontFamily: 'Poppins',
        fontSize: '32px',
        fontWeight: '400',
        lineHeight: '63px',
        // textAlign: left;

    },
    productPrice: {
        fontFamily: 'Poppins',
        fontSize: '22px',
        fontWeight: '500',
        lineHeight: '26px',
        color: '#9F9F9F',
    },
    productShortDetail: {

        fontFamily: 'Poppins',
        fontSize: '13px',
        fontWeight: '400',
        lineHeight: '19.5px',
        marginTop: '10px',
        marginBottom: '10px',

    },
    sizeTitle: {

        fontFamily: 'Poppins',
        fontSize: '14px',
        fontWeight: '400',
        lineHeight: '21px',
        color: '#9F9F9F',

    },
    sizeButton: {

        width: '40%',
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '10px',
        marginBottom: '20px',

    },
    colorTitle: {

        fontFamily: 'Poppins',
        fontSize: '14px',
        fontWeight: '400',
        lineHeight: '21px',
        color: '#9F9F9F',

    },
    colorButton: {

        width: '30%',
        display: 'flex',
        justifyContent: 'space-around',

    },
    quantityBox: {
        marginTop: '20px',
        width: '15%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        border: '2.5px solid black',
        borderRadius: '5px',
        height: '40px',
        // background: 'white',
    },
    quntityBtn: {
        fontFamily: 'Poppins',
        fontSize: '16px',
        fontWeight: '400',
        lineHeight: '24px',
        // textAlign: 'left',

    },
    quantityInput: {
        width: '15px',
        fontFamily: 'Poppins',
        fontSize: '16px',
        fontWeight: '500',
        lineHeight: '24px',

    },
    socialIcons: {
        width: '100%',
        // background: 'gray',
        display: 'flex',
        marginTop: '20px',
        // justifyContent: 'flex-end',



    },
    leftSide: {
        // background: 'blue',
        display: 'flex', flexDirection: 'column'

    },
    StockDetail: {
        fontFamily: 'Poppins',
        fontSize: '16px',
        fontWeight: '400',
        lineHeight: '24px',
        color: '#9F9F9F',
        // textAlign: left;

    },
    rightSide: {
        // background: 'green',
        display: 'flex', flexDirection: 'column'
    },
    descriptionTitleActive: {

        fontFamily: 'Poppins',
        fontSize: '24px',
        fontWeight: '500',
        lineHeight: '36px',
        // textAlign: 'left',

    },
    descriptionTitle: {

        fontFamily: 'Poppins',
        fontSize: '24px',
        fontWeight: '500',
        lineHeight: '36px',
        // textAlign: 'left',
        color: '#9F9F9F',


    },
    productFullDetail: {
        fontFamily: 'Poppins',
        fontSize: '16px',
        fontWeight: '400',
        lineHeight: '24px',
        textAlign: 'justified',

        width:'100%',
        marginTop:'30px',
        display:'flex',
        padding:'50px',

        alignItems: "center",
        justifyContent: "space-around",

    },



}
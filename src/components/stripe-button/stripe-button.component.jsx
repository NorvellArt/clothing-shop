import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {

    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51JaFGWJWxgz8OGSUFBm9kwd98Qw6F0nmE4UiWjyiyuuLTx5homitk37j3EM3gUXYOipDLv6yQDEqOda357dUbx2r00PENnoN3h'
    const onToken = token =>{
        console.log(token);
        alert('Payment Successful');
    }

    return(
        <StripeCheckout
        label='Pay Now'
        name="Clothing Shop Ltd."
        billingAddress
        shippingAddress
        image='https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Double-barred_dollar_sign.svg/2048px-Double-barred_dollar_sign.svg.png'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        />
    )
};

export default StripeCheckoutButton
import React,{ useRef,useEffect} from 'react'

const Paypal = () => {

  const paypal = useRef()

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: "77.44",
                },
              },
            ],
          });
        },
        onApprove: (data, actions) => {
          return actions.order.capture().then(function (orderData) {
            console.log(
              "Capture result",
              orderData,
              JSON.stringify(orderData, null, 2)
            );
            const transaction =
              orderData.purchase_units[0].payments.captures[0];
            alert(
              `Transaction ${transaction.status}: ${transaction.id}\n\nSee console for all available details`
            );
          });
        },
        onError: (err) => {
          console.log(err);
        },
      })
      .render("#paypal-button-container");
  },[])
  return (
    <div>
      <div id="paypal-button-container"></div>
    </div>
  )
}

export default Paypal
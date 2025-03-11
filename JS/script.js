var stripe = Stripe('tu_clave_publica_de_stripe');

  var checkoutButton = document.getElementById('checkout-button');

  checkoutButton.addEventListener('click', function () {
    fetch('/create-checkout-session', {
      method: 'POST',
    })
    .then(function (response) {
      return response.json();
    })
    .then(function (sessionId) {
      return stripe.redirectToCheckout({ sessionId: sessionId });
    })
    .then(function (result) {
      if (result.error) {
        alert(result.error.message);
      }
    })
    .catch(function (error) {
      console.error('Error:', error);
    });
  });
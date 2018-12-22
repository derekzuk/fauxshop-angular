brainblocks.Button.render({

    // Pass in payment options

    payment: {
        destination: 'nano_164xaa1ojy6qmq9e8t94mz8izr4mkf1sojb6xrmstru5jsif48g5kegcqg7y',
        currency:    'rai',
        amount:      1000
    },

    // Handle successful payments

    onPayment: function(data) {
        console.log('Payment successful!', data.token);
    }

}, '#nano-button');
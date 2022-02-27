function fetchData(params, onSuccess, onError) {
    const req = new XMLHttpRequest();
    req.open(params.method, params.url, true);
    req.onreadystatechange = function (aEvt) {
        if (req.readyState === 4) {
            if(req.status === 200) {
                onSuccess(JSON.parse(req.responseText))
            } else {
                onError()
            }
        }
    };
    req.send(null);
}

function fetchProfile(userId, onSuccess, onError) {
    fetchData({ method: 'GET', url: `http://localhost:8080/app/profile/${userId}`}, onSuccess, onError)
}

function fetchPaymentDetails(userId, onSuccess, onError) {
    fetchData({ method: 'GET', url: `http://localhost:8080/app/payments/${userId}`}, onSuccess, onError)
}

var userProfile = null
var userId = 4

fetchProfile(userId, (profile) => {
    userProfile = profile
}, () => {
    window.alert('Cannot fetch profile!')
})

fetchPaymentDetails(userId, (payments) => {
    document.querySelector('#user-name').textContent = `User: ${userProfile.firstName} ${userProfile.lastName}`
    document.querySelector('#user-subscription').textContent = `Subscription: ${payments.subscriptionStatus}`
}, () => {
    window.alert('Cannot fetch payment details!')
})
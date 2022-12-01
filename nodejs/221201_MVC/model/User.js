exports.user = function() {
    return { id: "1", pw: "1234"};
}

var users =
`yeji//1234//서예지
codee//4321//코디`;

exports.user2 = function() {
    return users;
}
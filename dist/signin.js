



localStorage.setItem('users', JSON.stringify([
    { email: 'user1@example.com', password: 'password123', name: 'John Doe' },
    { email: 'user2@example.com', password: 'password456', name: 'Jane Smith' }
]));

document.getElementById('signinForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const email = document.getElementById('signinEmail').value;
    const password = document.getElementById('signinPassword').value;
    const users = JSON.parse(localStorage.getItem('users'));
    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
        localStorage.setItem('isSignedIn', true);
        localStorage.setItem('signedInUser', JSON.stringify({ name: user.name, email: user.email }));
        alert('Sign in successful !');
        window.location.href = 'dashboard.html';
    } else {
        alert('Incorrect email or password.');
    }
});
function generateRandomEmail() {
    return 'user' + Math.floor(Math.random() * 100000) + '@testnewqa.com';
}

function generateRandomPassword() {
    const length = 8; 
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?'; // Set of characters to choose from
    let password = '';

    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const specials = '!@#$%^&*()_+-=[]{}|;:,.<>?';

    password += lowercase.charAt(Math.floor(Math.random() * lowercase.length));
    password += uppercase.charAt(Math.floor(Math.random() * uppercase.length));
    password += numbers.charAt(Math.floor(Math.random() * numbers.length));
    password += specials.charAt(Math.floor(Math.random() * specials.length));

    for (let i = 4; i < length; i++) {
        password += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    password = password.split('').sort(() => Math.random() - 0.5).join('');

    return password;
}

module.exports = { generateRandomEmail, generateRandomPassword }
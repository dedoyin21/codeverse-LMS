const bcrypt = require('bcrypt')

async function hashPasswords() {
  const passwords = [
    'password123',
    'mypassword',
    'secret123',
    'qwerty123',
    'letmein',
  ]
  const hashedPasswords = await Promise.all(
    passwords.map((password) => bcrypt.hash(password, 10))
  )

  console.log(hashedPasswords)
}

hashPasswords()

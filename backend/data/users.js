import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Sm Hasnat',
    email: 'smhasnat@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Labib Tahsin',
    email: 'labib@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users

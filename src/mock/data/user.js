import Mock from 'mockjs'
const LoginUsers = [
  {
    id: 1,
    username: 'swz',
    password: 'swz123456',
    email: 'swz2012@qq.com',
    name: '孙文正'
  }
]

const Users = []
for (let i = 0; i < 68; i++) {
  Users.push(Mock.mock({
    id: Mock.Random.guid(),
    name: Mock.Random.cname(),
    addr: Mock.mock('@county(true)'),
    'age|18-60': 1,
    birth: Mock.Random.date(),
    sex: Mock.Random.integer(0, 1)
  }))
}

export {LoginUsers, Users}

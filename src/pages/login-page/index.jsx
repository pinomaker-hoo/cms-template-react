// ** Router Imports
import { useNavigate } from 'react-router-dom'

// ** Other View Import
import LoginPageView from 'pages/login-page/login-page'

// ** Otheer Imports
import useInput from 'hooks/useInput'
import { useDispatch } from 'react-redux'
import { updateUser } from 'store/app/auth'

const LoginPage = () => {
  const [user, setUser] = useInput({ username: 'admin', password: '1234' })

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleOnKeyPress = (e) => {
    if (e.key === 'Enter') {
      login()
    }
  }

  const login = () => {
    if (user.username === '') {
      alert('아이디를 입력해주세요.')

      return
    }

    if (user.password === '') {
      alert('패스워드를 입력해주세요.')

      return
    }

    if (user.username === 'admin' && user.password === '1234') {
      dispatch(
        updateUser({
          email: 'admin',
          name: '관리자',
          accessToken: '1234',
          refreshToken: '1234',
        }),
      )
      navigate('/')
    }
  }

  return (
    <LoginPageView
      user={user}
      setUser={setUser}
      login={login}
      handleOnKeyPress={handleOnKeyPress}
    />
  )
}

export default LoginPage

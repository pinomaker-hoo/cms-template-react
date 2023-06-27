import { styled } from '@mui/material'
import VerticalNavigation from './vertical'

const LayoutWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
})

const Header = styled('div')({
  color: '#fff',
  flexShrink: 0,
})

const MainContentWrapper = styled('div')({
  flexGrow: 1,
  display: 'flex',
})

const Content = styled('div')({
  flexGrow: 1,
  padding: '1rem',
})

const UseLayout = ({ children }) => {
  return (
    <LayoutWrapper>
      <Header>
        <h1>My Website</h1>
      </Header>
      <MainContentWrapper>
        <VerticalNavigation />
        <Content>{children}</Content>
      </MainContentWrapper>
    </LayoutWrapper>
  )
}

export default UseLayout

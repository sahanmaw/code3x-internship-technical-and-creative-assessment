import { Box } from '@mui/material'
import LoginForm from '../components/LoginForm'
import IllustrationPanel from '../components/IllustrationPanel'

function LoginPage() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
      }}
    >
      <Box
        sx={{
          width: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          px: 6,
        }}
      >
        <LoginForm />
      </Box>

      <Box
        sx={{
          width: '50%',
          display: 'flex',
          alignItems: 'center',
          pr: 4,
        }}
      >
        <IllustrationPanel />
      </Box>
    </Box>
  )
}

export default LoginPage
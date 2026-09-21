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
          width: {
            xs: '100%',
            md: '50%',
          },

          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',

          px: {
            xs: 3,
            sm: 6,
            md: 6,
          },

          py: {
            xs: 5,
            md: 0,
          },
        }}
      >
        <LoginForm />
      </Box>

      <Box
        sx={{
          width: '50%',

          display: {
            xs: 'none',
            md: 'flex',
          },

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
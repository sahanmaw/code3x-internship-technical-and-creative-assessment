import {
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth'

import { auth } from '../firebase/config'
import { useNavigate } from 'react-router-dom'
import { Box, IconButton } from '@mui/material'
import { Apple, FacebookRounded, Google} from '@mui/icons-material'

function GoogleLogin() {
  const navigate = useNavigate()

  const socialButtonStyle = {
    width: 55,
    height: 55,
    backgroundColor: '#000',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#222',
    },
  }

  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider()

      const result = await signInWithPopup(auth, provider)

      const credential = GoogleAuthProvider.credentialFromResult(result)
      const accessToken = credential?.accessToken

      if (accessToken) {
        navigate('/token', {
          state: { accessToken },
        })
      }
    } catch (error) {
      console.error('Google login failed:', error)
    }
  }

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        gap: 3,
      }}
    >
      <IconButton
        aria-label="Continue with Google"
        onClick={handleGoogleLogin}
        sx={socialButtonStyle}
      >
        <Google
          sx={{
            fontSize: 23,
          }}
        />
      </IconButton>

      <IconButton
        aria-label="Continue with Apple"
        sx={socialButtonStyle}
      >
        <Apple
          sx={{
            fontSize: 22,
          }}
        />
      </IconButton>

      <IconButton
        aria-label="Continue with Facebook"
        sx={socialButtonStyle}
      >
        < FacebookRounded
          sx={{
            fontSize: 25,
          }}
        />
      </IconButton>
    </Box>
  )
}

export default GoogleLogin
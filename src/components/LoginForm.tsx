import { useState } from 'react'
import {
  Box,
  Button,
  Divider,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material'
import {
  VisibilityOutlined,
  VisibilityOffOutlined,
} from '@mui/icons-material'

import GoogleLogin from './GoogleLogin'

const textFieldStyles = {
  '& .MuiOutlinedInput-root': {
    borderRadius: '30px',
    backgroundColor: '#fff',

    '& fieldset': {
      borderColor: '#606060',
    },

    '&.Mui-focused fieldset': {
      borderColor: '#606060',
      borderWidth: '1px',
    },
  },

  '& .MuiInputBase-input': {
    px: 4,
    py: 1.9,
    fontSize: '0.95rem',
  },
}

function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const validateForm = () => {
    let isValid = true

    setEmailError('')
    setPasswordError('')

    if (!email.trim()) {
      setEmailError('Email is required')
      isValid = false
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Please enter a valid email address')
      isValid = false
    }

    if (!password.trim()) {
      setPasswordError('Password is required')
      isValid = false
    }

    return isValid
  }

  return (
    <Box
      component="form"
      onSubmit={(event) => {
        event.preventDefault()
        validateForm()
      }}
      noValidate
      sx={{
        width: '100%',
        maxWidth: 400,
      }}
    >

      <Typography
        component="h1"
        sx={{
          fontWeight: 600,
          fontSize: '3rem',
          textAlign: 'center',
          lineHeight: 1.5,
          mb: 1,
        }}
      >
        Welcome back!
      </Typography>

      <Typography
        sx={{
          color: '#6c6c6c',
          fontSize: '0.95rem',
          fontWeight: 500,
          textAlign: 'center',
          lineHeight: 1.5,
        }}
      >
        Simplify your workflow and boost your productivity
        <br />
        with{' '}
        <Box component="span" sx={{ fontWeight: 600 }}>
          Tuga&apos;s App.
        </Box>{' '}
        Get started for free.
      </Typography>

      <TextField
        fullWidth
        type="email"
        placeholder="Email"
        autoComplete="email"
        value={email}
        onChange={(event) => {
          setEmail(event.target.value)
          setEmailError('')
        }}
        error={Boolean(emailError)}
        helperText={emailError}
        sx={{
          mt: 6,
          ...textFieldStyles,
        }}
      />

      <TextField
        fullWidth
        placeholder="Password"
        type={showPassword ? 'text' : 'password'}
        autoComplete="current-password"
        value={password}
        onChange={(event) => {
          setPassword(event.target.value)
          setPasswordError('')
        }}
        error={Boolean(passwordError)}
        helperText={passwordError}
        sx={{
          mt: 1.5,
          ...textFieldStyles,
        }}
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position="end" sx={{ mr: 1 }}>
                <IconButton
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                  sx={{
                    p: 1,
                    color: '#999',
                  }}
                >
                  {showPassword ? (
                    <VisibilityOffOutlined />
                  ) : (
                    <VisibilityOutlined />
                  )}
                </IconButton>
              </InputAdornment>
            ),
          },
        }}
      />

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          mt: 1.5,
          pr: 1,
        }}
      >
        <Typography
          component="button"
          type="button"
          sx={{
            border: 0,
            background: 'none',
            cursor: 'pointer',
            fontSize: '0.8rem',
            fontWeight: 500,
            pt: 0.4,
          }}
        >
          Forgot Password?
        </Typography>
      </Box>

      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{
          mt: 2.75,
          py: 1.5,
          borderRadius: '30px',
          backgroundColor: '#000',
          color: '#c8c3c3',
          textTransform: 'none',
          fontSize: '1rem',
          fontWeight: 400,
          boxShadow: 'none',
          '&:hover': {
            backgroundColor: '#222',
            boxShadow: 'none',
          },
        }}
      >
        Login
      </Button>

      <Divider
        sx={{
          my: 4,
          fontSize: '1rem',
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 500,
          color: 'text.secondary',
        }}
      >
        or continue with
      </Divider>

      <GoogleLogin />

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          mt: 15,
          gap: 0.5,
        }}
      >
        <Typography
          sx={{
            fontSize: '1rem',
            fontWeight: 500,
          }}
        >
          Not a member?
        </Typography>

        <Typography
          component="button"
          type="button"
          sx={{
            border: 0,
            background: 'none',
            p: 0,
            cursor: 'pointer',
            fontSize: '1rem',
            color: '#6b965e',
            fontWeight: 500,
          }}
        >
          Register now
        </Typography>
      </Box>


    </Box>
  )
}

export default LoginForm
import { Box, Button } from 'native-base'
import React, { useEffect, useState } from 'react'
import { View, Text, Animated, StyleSheet } from 'react-native'
import InputComponent from '../components/form/Input'
import { Card, PreFormText, PreFormWrapper, Title } from './styles/Home'
import { Formik } from 'formik'
import { SignInSchema } from '../components/form/validationSchemas/login'
import SignInWithGoogleButton from '../components/form/SignInGoogleButton/SignInGoogleButton'

const Home = () => {
  const [color] = useState(new Animated.Value(0))

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(color, {
          toValue: 1,
          duration: 10000,
          useNativeDriver: false,
        }),
        Animated.timing(color, {
          toValue: 0,
          duration: 10000,
          useNativeDriver: false,
        }),
      ])
    ).start()
  }, [])

  const backgroundColor = color.interpolate({
    inputRange: [0, 0.2, 0.4, 0.6, 0.8, 1],
    outputRange: [
      '#44A5F2',
      '#7247FC',
      '#4D52E6',
      '#477DFC',
      '#44A5F2',
      '#9D44F2',
    ],
  })
  return (
    <Animated.View style={[styles.container, { backgroundColor }]}>
      <Title>{'Stark'}</Title>
      <PreFormWrapper>
        <PreFormText>
          Please login or{' '}
          <Text style={{ borderBottomWidth: 1, height: 23 }}>create</Text> an
          account.
        </PreFormText>
      </PreFormWrapper>
      <Card>
        <Box
          padding={'25px'}
          height={'100%'}
          width={'100%'}
          style={{ gap: 10 }}
        >
          <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={(values) => console.log(values)}
            validationSchema={SignInSchema}
          >
            {({ handleChange, handleBlur, handleSubmit, values, errors, isValid }) => (
              <>
                <InputComponent
                  type='email'
                  withLabel
                  label='Email'
                  onChange={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  errorMessage={errors.email}
                  placeholder={'abcd@example.com'}
                />
                <InputComponent
                  withLabel
                  label='Password'
                  type='password'
                  onChange={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  errorMessage={errors.password}
                  placeholder={'*********'}
                />
                <Box flexDirection={'row'} justifyContent='space-between'>
                  <Text
                    style={{
                      color: '#000',
                      fontFamily: 'Inter_400Regular',
                      textAlign: 'center',
                      borderBottomWidth: 1,
                      height: 22,
                    }}
                  >
                    Create an account
                  </Text>
                  <Text
                    style={{
                      color: '#000',
                      fontFamily: 'Inter_400Regular',
                      textAlign: 'center',
                      borderBottomWidth: 1,
                      height: 22,
                      width: 120,
                    }}
                  >
                    Forgot Password?
                  </Text>
                </Box>
                <Button bgColor={'green.400'}  disabled={!isValid} onPress={()=>handleSubmit()}>Sign In</Button>
                <Text>Or continue with</Text>
                <SignInWithGoogleButton/>
              </>
            )}
          </Formik>
        </Box>
      </Card>
    </Animated.View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

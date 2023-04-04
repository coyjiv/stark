import { Input, Box, FormControl, WarningOutlineIcon } from 'native-base'
import React from 'react'
import { View, Text } from 'react-native'

interface InputProps {
  placeholder: string
  errorMessage?: string
  value: string
  onChange: any
  withLabel?: boolean
  label?: string,
  type?: 'text' | 'password' | 'email'
  onBlur: any
}

const InputComponent = ({
  placeholder,
  errorMessage,
  value,
  onChange,
  label,
  withLabel,
  type,
  onBlur,
}: InputProps) => {
  return (
    <Box alignItems='center' w={'100%'}>
      <FormControl isInvalid={Boolean(errorMessage && errorMessage?.length>0)} w='100%'>
        {withLabel && (
          <FormControl.Label>
            <Text
              style={{
                fontFamily: 'Inter_500Medium',
                color: '#000',
              }}
            >
              {label ?? ''}
            </Text>
          </FormControl.Label>
        )}
        <Input
          fontFamily={'Inter_400Regular'}
          color={'#000'}
          placeholder={placeholder}
          value={value}
          onChangeText={onChange}
          borderRadius={'10px'}
          fontSize={'15px'}
          onBlur={onBlur}
          _invalid={{
            borderColor: 'red.500',
          }}
          {...(type === 'password' && { secureTextEntry: true })}
        />
        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size='xs' />}>
          {errorMessage}
        </FormControl.ErrorMessage>
      </FormControl>
    </Box>
  )
}

export default InputComponent

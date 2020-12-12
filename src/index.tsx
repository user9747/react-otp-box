import React, { useEffect, useState, useRef, memo,Fragment } from 'react'
import styled from 'styled-components'

const IB = styled.input`
  border: none;
  outline: none;
  background: #dedede;
  border-radius: 10px;
  color: black;
  width: 30px;
  height: 30px;
  text-align: center;
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 0;
  }
  -moz-appearance: textfield;
`
const InputBox = memo(IB)

interface Props {
  autoFocus?: boolean
  n?: number
  gap?: string
  onChange: (e: string) => void
  inputStyle?: (n?: number) => React.CSSProperties
}

const ReactOtp = ({
  autoFocus = false,
  n = 3,
  gap = '10px',
  onChange,
  inputStyle
}: Props) => {
  const [otp, setOtp] = useState<Array<string>>(Array(n).fill(''))
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const keyListener = (e: any) => {
      var temp_otp = [...otp]
      if (ref.current === null) return

      const inputElements = ref.current.children
      if (!isNaN(e.key)) {
        for (let index = 0; index < inputElements.length; index++) {
          if (document.activeElement === inputElements[index]) {
            temp_otp[index] = e.key
            setOtp(temp_otp)
            if (index === otp.length - 1)
              // (inputElements[index] as HTMLInputElement).blur()
              (inputElements[index] as HTMLInputElement).focus()
            else (inputElements[index + 1] as HTMLInputElement).focus()
            break
          }
        }
      } else if (e.key === 'Backspace' && temp_otp.length !== 0) {
        for (let index = 0; index < inputElements.length; index++) {
          const element = inputElements[index]
          if (temp_otp[index] === '') {
            if (index !== 0)
              (inputElements[index - 1] as HTMLInputElement).focus()
            break
          }
          if (document.activeElement === element) {
            temp_otp[index] = ''
            setOtp(temp_otp)
            break
          }
        }
      }
    }
    console.log(otp)
    if (otp.join('').length === n) onChange(otp.join(''))
    document.addEventListener('keyup', keyListener)
    return () => {
      document.removeEventListener('keyup', keyListener)
    }
  }, [otp])

  return (
    <div
      ref={ref}
      style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
    >
      {otp.map((_item, index) =>
        index === 0 ? (
          <InputBox
            type='number'
            key={index}
            autoFocus={autoFocus}
            maxLength={1}
            value={otp[index] || ''}
            style={inputStyle ? inputStyle(index) : {}}
          />
        ) : (
          <Fragment>
            <div style={{ width: gap }} />
            <InputBox
              type='number'
              key={index}
              maxLength={1}
              value={otp[index] || ''}
              style={inputStyle ? inputStyle(index) : {}}
            />
          </Fragment>
        )
      )}
    </div>
  )
}

export default memo(ReactOtp)

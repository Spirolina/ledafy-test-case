import React , {useState} from 'react'
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";




interface Props {
  placeholder: string,
  InputIcon: import('react-icons').IconType,
  type: InputType,
  value?: string,
  onChange?: any
}

export enum InputType {
  text = 'text',
  email = 'email',
  password = 'password'
}

export default function InputField({ placeholder, InputIcon, type, value, onChange }: Props ) {
 const [showPassword, setShowPassword] = useState(false)

  return (
    <div className='relative mb-4'>
        <input
        required
        value={value}
        onChange={onChange}
        type={type === InputType.password ? 
          showPassword === true ? 
          InputType.text.toString() 
          : type.toString() 
          : type.toString()} 
          className='border-2 border-[#E0E2E9] rounded-lg w-full p-2 py-3 focus:outline-none focus:border-secondary ps-10' 
          placeholder={placeholder} 
          />
        
        <InputIcon 
        className='absolute top-3 left-2 left' 
        size={28} 
        color='#9CA3AF'
        />

        {type === InputType.password && (
          <div className='absolute top-3 right-2 cursor-pointer' 
          onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? 
            <IoMdEyeOff 
            size={28} 
            color='#9CA3AF'
            /> 
            : <IoMdEye 
            size={28} 
            color='#9CA3AF'
            />}
          </div>
        )}
    </div>
  )
}

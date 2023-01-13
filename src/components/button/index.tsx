import classNames from 'classnames'
import { FunctionComponent } from 'react'

interface ButtonProps {
  text: string
  type?: 'PRIMARY' | 'DEFAULT' | 'WARING' | 'DANGER'
  size: 'SMALL' | 'MEDIUM' | 'LARGE'
}

const Button: FunctionComponent<ButtonProps> = ({ text, type, size }) => (
  <button
    className={classNames([
      'rounded-sm bg-indigo-700',
      {
        'w-16 h-6 text-sm': size === 'SMALL',
        'w-20 h-8 text-m': size === 'MEDIUM',
        'w-24 h-12': size === 'MEDIUM',
      },
    ])}
  >
    {text}
  </button>
)

export default Button

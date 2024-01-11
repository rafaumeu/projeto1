import './styles.css'
import P from 'prop-types'

export const Button = ({ text, disabled, onClick }) => (
  <button disabled={disabled} className='button' onClick={onClick}>
    {text}
  </button>
)

Button.defaultProps = {
  disabled: false,
}
Button.propTypes = {
  text: P.string.isRequired,
  disabled: P.bool,
  onClick: P.func.isRequired,
}

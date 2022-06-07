/* eslint-disable react/require-default-props */
interface EmojiProps {
  label?: string
  symbol: string
}

function Emoji({ label, symbol }: EmojiProps) {
  return (
    <span
      className="emoji"
      role="img"
      aria-label={label || ''}
      aria-hidden={label ? 'false' : 'true'}
    >
      {symbol}
    </span>
  )
}

export default Emoji

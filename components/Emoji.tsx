interface Props {
  label?: string
  symbol: string
}

export function Emoji({ label, symbol }: Props) {
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

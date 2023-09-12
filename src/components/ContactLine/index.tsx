type Props = {
  label: string
  value: string
}

export const ContactLine = ({label, value}: Props) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(value)
      .then(() => {
        alert("coppied")
      })
      .catch(() => {alert("Problem")})
  }

  return (
    <div>{label}: <span onClick={copyToClipboard}>{value}</span></div>
  )
}
type Props = {
  text: string
}

export const Header = (props: Props) => (
  <h1 style={{ fontSize: '24px', color: 'darkblue'}}>{props.text}</h1>
)
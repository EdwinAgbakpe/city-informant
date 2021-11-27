interface Home{
  title: string;
}

export default function HomeView(props: Home){
  return(
    <div>
      Hello, this is the {props.title} page.
    </div>
  )
}
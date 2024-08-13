interface Button {
    name: string
}

function Button1({props}: {props: Button}) {
    return(
        <a href="#" className="border-2 border-orange-600 py-3.5 px-12 rounded-3xl">{ props.name }</a>
    )
}

export default Button1;
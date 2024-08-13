interface Button3 {
    name: string
}

function Button3({props}: {props: Button3}) {
    return(
        <a href="#" className="py-2 px-4 bg-zinc-500 rounded-2xl mt-6 inline-block">{ props.name }</a>
    )
}

export default Button3;
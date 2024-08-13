interface Button2 {
    name: string
}

function Button2({props} : {props: Button2}) {
    return(
        <a href="#" className="inline-block w-52 bg-orange-700 py-3 rounded-3xl">{ props.name }</a>
    )
}

export default Button2;
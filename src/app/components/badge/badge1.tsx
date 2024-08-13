interface Badge1 {
    price: string
}

function Badge1({props}: {props: Badge1}) {
    return (
        <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-red-600 w-36 py-4 bg-white rounded-t-xl">{ props.price }</span>
    )
}

export default Badge1;
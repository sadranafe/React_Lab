const Thumb = ({img , onSelectedImg , isActive}) => {
    const clickHandler = () => {
        onSelectedImg(img)
    }
    return(
        <>
            <div className = "w-56 m-2">
                <button className = {isActive ? "h-40 cursor-pointer -translate-y-8 transition-all" : "h-40 cursor-pointer -translate-y-0 transition-all"} onClick = {clickHandler}>
                    <img src = {img.src} alt = {img.src} className = "h-full rounded-xl" />
                </button>
            </div>
        </>
    )
}

export default Thumb;
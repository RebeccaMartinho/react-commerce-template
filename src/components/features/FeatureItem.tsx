
interface ImageText {
    image: string;
    size: string;

}
function CategorieIcon(props:ImageText){
    
    return(
        <div className="d-flex flex-column align-items-center gap-3 rounded p-2" style={{ width:props.size}}>
            <img src={require("../../public/"+props.image)} className="rounded" width="100%" alt="" />
            <span>Donec in arcu eget libero tristique fermentum. Maecenas nec posuere ligula.</span>
        </div>
    )
}

export default CategorieIcon
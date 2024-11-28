function Contain({onButtonClicked}){
    let ButtonComp = ['C', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8', '%', '9', '0', '=', '.'];
return (
    <>
    {ButtonComp.map((items) => <button className="buttons" onClick={() => onButtonClicked(items)} type="button">{items}</button>)}
    </>
)

}
export default Contain;
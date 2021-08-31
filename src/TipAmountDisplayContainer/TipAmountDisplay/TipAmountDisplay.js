const TipAmountDisplay = (props) => {

    const resetValues = () => {
        return props.resetValues
    }
    return (
        <div> 
            <div> Tip Amount <span> {props.individualCostIncludingTip} </span> </div>
            <div> / person </div>
            <div> Total <span> {props.individualTipAmount} </span> </div>
            <div> / person </div>
            <button type="reset" onClick={resetValues}> RESET </button>
        </div>
        
    )
}

export default TipAmountDisplay
import "./TipAmountDisplay.css"

const TipAmountDisplay = (props) => {

    const displayTipAmount = () => {
        return props.individualCostIncludingTip > 0 ? props.individualCostIncludingTip.toFixed(2) : "0.00"
    }

    const displayTotalAmount = () => {
        return props.individualTipAmount > 0 ? props.individualTipAmount.toFixed(2) : "0.00"
    }
    return (
        <div className="TipAndTotalAmountDisplayContainer"> 
            <div> 
                <div className="TipAmount"> Tip Amount <span className="span"> $ {displayTipAmount()} </span> </div>
                <div className="PerPerson"> /person </div>
            </div>
            <div> 
                <div className="TipAmount"> Total <span className="TotalSpan"> $ {displayTotalAmount()} </span> </div>
                <div className="PerPerson"> /person </div>
            </div>
            <button className="resetButton" type="reset"> RESET </button>
        </div>
        
    )
}

export default TipAmountDisplay
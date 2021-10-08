import "./TipAmountDisplay.css"

const TipAmountDisplay = (props) => {

    const displayTipAmount = () => {
        return props.individualCostIncludingTip > 0 ? props.individualCostIncludingTip.toFixed(2) : "0.00"
    }

    const displayTotalAmount = () => {
        return props.individualTipAmount > 0 ? props.individualTipAmount.toFixed(2) : "0.00"
    }
    return (
        <>
            <div className="TipAmountContainer"> 
                <div className="TipAmount"> Tip Amount </div>
                <div className="PerPerson"> /person </div>  
            </div>
            <span className="span"> $ {displayTotalAmount()}  </span> 
            <div className="TotalContainer"> 
                <div className="TipAmount"> Total </div>
                <div className="PerPerson"> /person </div>
            </div>
            <span className="TotalSpan"> $ {displayTipAmount()} </span> 

            <button className="resetButton" type="reset"> RESET </button> 
        </>
    )
}

export default TipAmountDisplay
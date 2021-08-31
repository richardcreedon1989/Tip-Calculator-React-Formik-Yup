import TipAmountDisplay from "./TipAmountDisplay/TipAmountDisplay"
import "./TipAmountDisplayContainer.css"


const TipAmountDisplayContainer = (props) => {
    const {bill, percentTip, numberOfPeople } = props.values

    const individualCostBeforeTip = bill / numberOfPeople
    const individualTipAmount = individualCostBeforeTip * percentTip / 100
    const individualCostIncludingTip = individualTipAmount + individualCostBeforeTip    

    const resetValues = () => {
        props.resetValues()
    }
    return (
        <div className="tipAmountDisplayContainer"> 
            <TipAmountDisplay individualCostIncludingTip={individualCostIncludingTip} individualTipAmount={individualTipAmount} resetValues={resetValues}/>
        </div>
    )
}

export default TipAmountDisplayContainer
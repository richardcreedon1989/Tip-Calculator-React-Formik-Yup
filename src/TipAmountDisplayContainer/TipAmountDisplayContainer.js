import TipAmountDisplay from "./TipAmountDisplay/TipAmountDisplay"
import "./TipAmountDisplayContainer.css"


const TipAmountDisplayContainer = (props) => {
    const {bill, percentTip, numberOfPeople } = props.values

    const individualCostBeforeTip = bill / numberOfPeople
    const individualTipAmount = bill && percentTip && numberOfPeople ? individualCostBeforeTip * percentTip / 100 : 0
    const individualCostIncludingTip = bill && percentTip && numberOfPeople ? individualTipAmount + individualCostBeforeTip : 0   

    return (
        <div className="tipAmountDisplayContainer"> 
            <TipAmountDisplay individualCostIncludingTip={individualCostIncludingTip} individualTipAmount={individualTipAmount}/>
        </div>
    )
}

export default TipAmountDisplayContainer
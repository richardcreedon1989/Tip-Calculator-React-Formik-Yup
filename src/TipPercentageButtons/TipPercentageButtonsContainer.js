
import { TipPercentageButton } from "./TipPercentageButton";
import { TipPercentageInput } from "./TipPercentageInput";
import "./TipPercentageButtonsContainer.css"

const percentage = {
    five: 5,
    ten: 10,
    fifteen: 15,
    twentyFive: 25,
    fifty: 50,
    custom: "custom"
}

const arrayOfTipInputComponents = [<TipPercentageButton percentage={percentage.five}/>,
    <TipPercentageButton percentage={percentage.ten} />,
    <TipPercentageButton percentage={percentage.fifteen} />,
    <TipPercentageButton percentage={percentage.twentyFive} />,
    <TipPercentageButton percentage={percentage.fifty} />,
    <TipPercentageInput percentage={percentage.custom} />]

export const TipPercentageButtonsContainer = (props) => {

    return (
        <div className="buttonsContainer"> 
        <h1 className="heading"> Select Tip %</h1>
        <div>{arrayOfTipInputComponents.map((component, index)=> {
                return <div key={index}> {component} </div>
            })} </div>
        </div>
    )
}

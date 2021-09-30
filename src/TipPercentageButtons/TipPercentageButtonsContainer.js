
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
    <TipPercentageInput percentage={percentage.custom} />
]

const displayTipPercentageButtons = () => {
    return arrayOfTipInputComponents.map((component, index)=> {
            return <div className="label" key={index}>  {component} </div>
        })
    }

export const TipPercentageButtonsContainer = (props) => {
    return (
        <> 
            <h1 className="heading"> Select Tip %</h1>
            <div className="buttonsContainer">{displayTipPercentageButtons()} </div>
        </>
    )
}

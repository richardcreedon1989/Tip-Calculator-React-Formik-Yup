
import { TipPercentageButton } from "./TipPercentageButton";
import { TipPercentageInput } from "./TipPercentageInput";
import "./TipPercentageButtonsContainer.css"

// TODO :     Made the button, now must properly style but also figure 
//out how to get the value of the radio button clicked. 
//Expecting onSubmit for radio button but need to do it with onClick instead

const percentage = {
    five: 5,
    ten: 10,
    fifteen: 15,
    twentyFive: 25,
    fifty: 50,
    custom: "custom"
}

let arrayOfTipInputComponents = [<TipPercentageButton percentage={percentage.five}/>,
    <TipPercentageButton percentage={percentage.ten} />,
    <TipPercentageButton percentage={percentage.fifteen} />,
    <TipPercentageButton percentage={percentage.twentyFive} />,
    <TipPercentageButton percentage={percentage.fifty} />,
    <TipPercentageInput percentage={percentage.custom} />]

export const TipPercentageButtonsContainer = () => {
    return (
        <div className="buttonsContainer"> 
        <h1 className="heading"> Select Tip %</h1>
            {arrayOfTipInputComponents.map((component)=> {
                return <> {component} </>
            })}
        </div>
    )
}

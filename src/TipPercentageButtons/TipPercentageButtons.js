import {useState}  from "react";
import {Formik, Form, Field, ErrorMessage} from "formik"
import * as Yup from "yup"
import { TipPercentageButton } from "./TipPercentageButton";
import { TipPercentageInput } from "./TipPercentageInput";
import "./TipPercentageButtons.css"

const initialValues={TipPercentage: ""}

// TODO :     Made the button, now must properly style but also figure 
//out how to get the value of the radio button clicked. 
//Expecting onSubmit for radio button but need to do it with onClick instead

const percentage = {
      five: "5%",
      ten: "10%",
      fifteen: "15%",
      twentyFive: "25%",
      fifty: "fifty",
      custom: "custom"
  }

let arrayOfTipInputComponents = [<TipPercentageButton percentage={percentage.five}/>,
    <TipPercentageButton percentage={percentage.ten} />,
    <TipPercentageButton percentage={percentage.fifteen} />,
    <TipPercentageButton percentage={percentage.twentyFive} />,
    <TipPercentageButton percentage={percentage.fifty} />,
    <TipPercentageInput percentage={percentage.custom} />]

export const TipPercentageButtons = () => {
    return (
        <> 
        {arrayOfTipInputComponents.map((component)=> {
            return <div>  {component} </div>
        })}
    </>
    )
       
}

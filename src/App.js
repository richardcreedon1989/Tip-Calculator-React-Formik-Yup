import './App.css';
import { BillInput} from './BillInput/BillInput';
import * as Yup from "yup"
import {Formik, Form, } from "formik"
import Header from "./Header/Header"
import TipAmountDisplayContainer from "./TipAmountDisplayContainer/TipAmountDisplayContainer"
import { TipPercentageButtonsContainer } from './TipPercentageButtons/TipPercentageButtonsContainer';

let initialValues = {
  bill: "",
  percentTip: "",
  numberOfPeople: "",
}

const validationSchema= Yup.object({
  billAmount: Yup.string().required("Required")
})

const onSubmit = values => {
  console.log("values", values)
}

function App(props) {

  const resetValues = () => {
    return initialValues = {
      bill: "",
      percentTip: "",
      numberOfPeople: "",
    }
  }
  

  return (
  <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
  > 
  {({values}) => ( 
  
  <Form> 
    <Header />      
    <div className="container"> 
      <BillInput values={values} label="Bill" value="bill"/>
      <TipPercentageButtonsContainer />
      <BillInput values={values} label="Number Of People" value="numberOfPeople"/>
      <TipAmountDisplayContainer values={values} resetValues={resetValues()}/>
    </div>
    {console.log("props", props)}
  </Form>
  )}  
                
  </Formik>
  )}


export default App;

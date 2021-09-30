import './App.css';
import { BillInput} from './BillInput/BillInput';
import * as Yup from "yup"
import {Formik, Form } from "formik"
import Header from "./Header/Header"
import TipAmountDisplayContainer from "./TipAmountDisplayContainer/TipAmountDisplayContainer"
import { TipPercentageButtonsContainer } from './TipPercentageButtons/TipPercentageButtonsContainer';

let initialValues = {
  bill: "",
  percentTip: "",
  numberOfPeople: "",
}

const validationSchema= Yup.object({
  bill: Yup.number().min(1, "Too Low").required("Required"),
  percentTip: Yup.string().required("Required"),
  numberOfPeople: Yup.number().min(1, "Too Low").required("Required")
})

function App(props) {

  return (
  <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
  
  > 
  {({values, errors, touched, handleBlur, handleReset}) => ( //Ctrl + Space brings up options ie initialValues 
  
  <Form> 
    <Header />         
    <div className="container"> 
        <div className="innerContainer"> 
          <div  style={{order: "1"}}>  
            <BillInput  touched={touched} errors={errors} value={values} name="bill" label="Bill" /> 
            <TipPercentageButtonsContainer touched={touched} errors={errors} />
            <BillInput touched={touched} value={values} name="numberOfPeople" label="Number Of People"/> 
          </div>
          <div style={{order: "2"}}> 
            <TipAmountDisplayContainer style={{order: "4"}}  values={values} />
          </div>
        </div>
    </div>
  </Form>
  )}  
                
  </Formik>
  )}


export default App;

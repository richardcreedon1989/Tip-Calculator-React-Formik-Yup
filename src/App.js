import './App.css';
import { BillInput} from './BillInput/BillInput';
import {TipPercentageButtons} from "./TipPercentageButtons/TipPercentageButtons"
import * as Yup from "yup"
import {Formik, Form, } from "formik"
import Header from "./Header/Header"

const initialValues = {
  billAmount: "",
  percentTip: ""

}

const validationSchema= Yup.object({
  billAmount: Yup.string().required("Required")
})

const onSubmit = values => {
  console.log("values", values)
}

function App() {
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
      <BillInput values={values} label="Bill"/>
        {console.log("values", values)}
      <TipPercentageButtons />
    </div>
  </Form>

  )}                
  </Formik>
  )}


export default App;

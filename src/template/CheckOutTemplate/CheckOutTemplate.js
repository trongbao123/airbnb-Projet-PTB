import { Fragment, useEffect } from "react";
import  {Redirect, Route}  from 'react-router-dom'
import { USER_LOGIN } from "../../util/setting/config";
import Footer from "../HomeTemplate/page/Footer/Footer";
import Header from "../HomeTemplate/page/Header/Header";






const CheckTemplates = (props) => { // path,exact,component
    const {Component,...restProps} = props;
    useEffect(() => {  
        window.scrollTo(0,0);
    })


    // if (!localStorage.getItem(USER_LOGIN)) {
    //     return <Redirect to="/login"/>
    // }

    if (!localStorage.getItem(USER_LOGIN)) {
        return <Redirect to="/login"></Redirect>
    }
    return <Route {...restProps} render={(propsRoute) => { //props.location.props.history.props.match
        // props.location 
        return <Fragment>
        <Header {...propsRoute}></Header>
         <Component {...propsRoute}/>
         <Footer {...propsRoute}/>
        </Fragment>
     }}/>
};
export default CheckTemplates;
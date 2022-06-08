import React from "react";
import './expense-list.css'
import Card from "./card";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';

const ExpenseList = () => {
    const {expenseList: list, query} = useSelector(state=>state.expenses);
    const filteredList = list.filter((item)=>item.title.includes(query))
    const notifySuccess=()=> toast.success("Expense deleted")
    return <div className="expense-list">
         <ToastContainer
                position="bottom-left"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                />
        {filteredList.length? filteredList.map(item=>(
            <Card item={item} notifySuccess={notifySuccess}/>
        )):<div className="empty-state">
            <img src={require('../../assets/images/empty.png').default} alt='Empty List' className="empty-image"/>
            <label>Oh no! Your expense list is empty :(</label>
            </div>}
    </div>
};

export default ExpenseList;
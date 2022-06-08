import './home.css'
import React from "react";
import ExpenseList from '../../components/expense-list';
import Topfold from '../../components/topfold';


export const Home = () => {
    return (
    <div className="home">
        <Topfold />
        <ExpenseList />
    </div>
    )
}



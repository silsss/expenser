import './add-expense.css'
import React from "react";
import Topfold from "../../components/topfold";
import {AddForm} from '../../components/add-form';


export const AddExpense = () => {
    return (
        <div className="add-expense">
            <Topfold />
            <AddForm />
        </div>
    )
}


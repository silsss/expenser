import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import './add-form.css'
import { categories } from '../../constants/add-expense';
import { useDispatch } from "react-redux";
import { addExpense } from "../../redux/actions/expenses";
import {SuccessModal} from './success-modal'


export const AddForm = () => {
    const cat = categories;
    const [categoryOpen, setCategoryOpen] = useState(false)
    const [title, setTitle] = useState("");
    const [amount,setAmount] = useState(0);
    const [category, setCategory] = useState();
    const [modalOpen, setModalOpen] = useState(false);
    const dispatch = useDispatch();


    const handleTitle=(e)=>{
        setTitle(e.target.value);
    }
    const handleAmount=(e)=>{
        const value = parseFloat(e.target.value);
        if(isNaN(value)){
            setAmount("")
            return;
        }
        setAmount(value);
    }
    const handleCategory=(category)=>{
        setCategory(category);
        setCategoryOpen(false);
    }

    const handleSubmit = () => {
    if(title===""||amount===""||!category){
        const notify = () => toast("Please enter valid data!");
        notify();
        return;
    }
    const data ={
        title,
        amount,
        category,
        createdAt: new Date()
    }
    dispatch(addExpense(data));
    setModalOpen(true);
    }

    return(
        <div className='add-form'>
            <ToastContainer
                position="bottom-left"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                />
            <SuccessModal modalOpen={modalOpen} setModalOpen={setModalOpen}/>
            <div className="form-item">
                <label>Title</label>
                <input placeholder='Enter expense title' value={title} onChange={(e) => handleTitle(e)}/>
            </div>
            <div className="form-item">
                <label>Amount £</label>
                <input placeholder='Enter amount' className="amount-input" value={amount} onChange={(e)=>handleAmount(e)}/>
            </div>
            <div className="category-container-p">
                <div className='category'>
                    <div 
                        className="category-dropdown" 
                        onClick={()=> setCategoryOpen(!categoryOpen)}>

                        <label>{category ? category.title: "Category"}</label>
                        <i class="fi fi-rs-angle-down"></i>
                    </div>
                    {categoryOpen && (
                    <div className="category-container"> 
                    {cat.map((category)=> ( 
                    <div 
                    className="category-item" 
                    style={{borderRight:`5px solid ${category.color}`}} 
                    key={category.id} 
                    onClick={()=> handleCategory(category)}>
                    <label>{category.title}</label>
                    <img src={category.icon.default} alt={category.title} />
                    </div>
                    ))}
                    </div>
                )}
                </div>
            </div>
            <div className="form-add-button">
                <div onClick={handleSubmit}>
                    <label>Add</label>
                    <i class="fi fi-rs-paper-plane"></i>
                </div>
            </div>
        </div>
    );
};

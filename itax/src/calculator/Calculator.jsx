import { Button } from "antd";
import React, { useState } from "react";
import { FaRupeeSign } from "react-icons/fa";
import "./calc.css";

const Calculator = () => {
  const [loan, setLoan] = useState("");
  const [Rate, setRate] = useState("");
  const [Years, setYears] = useState("");

  const [monthlyPayment, setMonthlyPayment] = useState([]);

  const [emi, setEmi] = useState();
  const [towards_loan, setTowardsLoan] = useState();
  const [towards_interest, setTowardsInterest] = useState();
  const [outstanding_loan, setOutstandingLoan] = useState();
  return (
    <div className="main-div">
      <div className="container">
        <div className="heading">
          <h4 className="h4">Emi Calculator</h4>
          <span className="span"></span>
        </div>
        <div className="child-container">
          <div className="child-container-a">
            <label className="text-label">Loan Amount</label>
            <input type="text" className="input" >
            {/* <FaRupeeSign size={20} /> */}
            </input>
    
          </div>
          <div className="child-container-a">
            <label className="text-label">Interest Rate</label>
            <input type="text" className="input" />
          </div>
          <div className="child-container-a">
            <label className="text-label">Loan Tenure</label>
            <input type="text" className="input" />
          </div>
        </div>
        <div className="button-div">
          <button className="btn1">calculate</button>
        </div>
      </div>
      <div className="container-div">
        second div
        <div className="container-div-child1">
          <div className="child-container-b">
            Loan Emi
            <input type="text" className="input" />
          </div>
          <div className="child-container-b">
            Total interest payable
            <input type="text" className="input" />
          </div>
          <div className="child-container-b">
            Total Amount
            <input type="text" className="input" />
          </div>
        </div>
        <span className="span2"></span>
        <div className="container-div-child1">child div </div>
      </div>
    </div>
  );
};

export default Calculator;

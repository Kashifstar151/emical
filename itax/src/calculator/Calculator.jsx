import { Button, Empty } from "antd";
import React, { useState } from "react";
import { Toast } from "react-bootstrap";
import { FaRupeeSign } from "react-icons/fa";
import "./calc.css";

const Calculator = () => {
  const [loan, setLoan] = useState("");
  const [Rate, setRate] = useState("");
  const [Years, setYears] = useState("");

  const [monthlyPayment, setMonthlyPayment] = useState([]);

  const [emi, setEmi] = useState();
  const [towards_loan, setTowardsLoan] = useState();
  const [totalInterest, settotalInterest] = useState();
  const [totalAmount, settotalAmount] = useState();

  const handleSubmit = () => {
    const interest = (loan * (Rate * 0.01)) / Years;
    const EMI = (loan / Years + interest).toFixed(2);
    setEmi(EMI);
    console.log("emi", emi);
    const Interest = EMI * Years - loan;
    settotalInterest(Interest);
    const Total = EMI * Years
    settotalAmount(Total);
  };

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
            <input
              type="number"
              className="input"
              onChange={(e) => setLoan(e.target.value)}
            >
              {/* <FaRupeeSign size={20} /> */}
            </input>
          </div>
          <div className="child-container-a">
            <label className="text-label">Interest Rate</label>
            <input
              type="number"
              className="input"
              onChange={(e) => setRate(e.target.value)}
            />
          </div>
          <div className="child-container-a">
            <label className="text-label">Loan Tenure</label>
            <input
              type="number"
              className="input"
              onChange={(e) => setYears(e.target.value)}
            />
          </div>
        </div>
        <div className="button-div">
          <button className="btn1" onClick={handleSubmit}>
            calculate
          </button>
        </div>
      </div>
      <div className="container-div">
        second div
        <div className="container-div-child1">
          <div className="child-container-b">
            Loan Emi
            <input type="text" className="input" value={emi} />
          </div>
          <div className="child-container-b">
            Total interest payable
            <input type="text" className="input" value={totalInterest} />
          </div>
          <div className="child-container-b">
            Total Amount
            <input type="text" className="input" value={totalAmount} />
          </div>
        </div>
        <span className="span2"></span>
        <div className="container-div-child1">child div </div>
      </div>
    </div>
  );
};

export default Calculator;

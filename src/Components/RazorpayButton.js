import React from 'react'
import { Link } from 'react-router-dom'

function RazorpayButton() {
  return (
    <div className="card mt-50 mb-50">
            <div className="card-title mx-auto">
                Sosta Dokan
            </div>
            <div className="nav">
                <ul className="mx-auto">
                    <li><a href="/">Account</a></li>
                    <li className="active"><a href="/">Payment</a></li>
                </ul>
            </div>
            <form>
                <span id="card-header">Saved cards:</span>
                <div className="row row-1">
                    <div className="col-2"><img className="img-fluid" src="https://img.icons8.com/color/48/000000/mastercard-logo.png"/></div>
                    <div className="col-7">
                        <input type="text" placeholder="**** **** **** 3193"/>
                    </div>
                    <div className="col-3 d-flex justify-content-center">
                        <a href="#">Remove card</a>
                    </div>
                </div>
                <div className="row row-1">
                    <div className="col-2"><img  className="img-fluid" src="https://img.icons8.com/color/48/000000/visa.png"/></div>
                    <div className="col-7">
                        <input type="text" placeholder="**** **** **** 4296"/>
                    </div>
                    <div className="col-3 d-flex justify-content-center">
                        <a href="#">Remove card</a>
                    </div>
                </div>
                <span id="card-header">Add new card:</span>
                <div className="row-1">
                    <div className="row row-2">
                        <span id="card-inner">Card holder name</span>
                    </div>
                    <div className="row row-2">
                        <input type="text" placeholder="Santanu Rajbhar"/>
                    </div>
                </div>
                <div className="row three">
                    <div className="col-7">
                        <div className="row-1">
                            <div className="row row-2">
                                <span id="card-inner">Card number</span>
                            </div>
                            <div classNameName="row row-2">
                                <input type="text" placeholder="5134-5264-4"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-2">
                        <input type="text" placeholder="Exp. date"/>
                    </div>
                    <div className="col-2">
                        <input type="text" placeholder="CVV"/>
                    </div>
                </div>
                <Link to = "/done"><button className="btn d-flex mx-auto aa"><b>Pay</b></button></Link>
            </form>
        </div>
  )
}

export default RazorpayButton

import React, { useState, useContext, useReducer, createContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBell, faBook, faChalkboardTeacher, faDoorClosed, faDoorOpen, faEarth, faEarthAfrica, faGear, faHandHoldingDollar, faMessage, faPlane, faPlaneArrival, faPlay, faSchool, faSearch, faStar, faUser, faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import Header from '../../Header/Header';





function addTransaction() {
    const [show, setShow] = useState(false);
    const [see, setSee] = useState(false);


    // reducer

    const red = (state, action) => {
        switch (action.type) {
            case 'DELETE_TRANSACTION':
                return {
                    ...state,
                    transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
                }
            case 'ADD_TRANSACTION':
                return {
                    ...state,
                    transactions: [action.payload, ...state.transactions]
                }
            default:
                return state;
        }
    }
    // Global State

    // Initial state
    const initialState = {
        transactions: []
    }

    // Create context
    const GlobalContext = createContext(initialState);

    // Provider component
     const GlobalProvider = ({ children }) => {
        const [state, dispatch] = useReducer(red, initialState);

        // Actions
        function deleteTransaction(id) {
            dispatch({
                type: 'DELETE_TRANSACTION',
                payload: id
            });
        }

        function addTransaction(transaction) {
            dispatch({
                type: 'ADD_TRANSACTION',
                payload: transaction
            });
        }

         return (<GlobalContext.Provider value={{
             transactions: state.transactions,
             deleteTransaction,
             addTransaction
         }}>
             {children}
         </GlobalContext.Provider>); 
     
    }
    
    // Add Transaction
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount
        }

        addTransaction(newTransaction);
    }
    // Money Formatter
    const { transactions } = useContext(GlobalContext);
    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((acc, item) => (acc += item), 0);


    const moneyFormatter = (num) => {
        let p = num.toFixed(2).split('.');
        return (
            'Fcfa ' + (p[0].split('')[0] === '-' ? '-' : '') +
            p[0]
                .split('')
                .reverse()
                .reduce(function (acc, num, i, orig) {
                    return num === '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc;
                }, '') +
            '.' +
            p[1]
        );

    };

    // income expense

    const income = amounts
        .filter(item => item > 0)
        .reduce((acc, item) => (acc += item), 0);

    const expense = (
        amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
        -1
    );
    // Transaction 
    const Transaction = ({ transaction }) => {
        const { deleteTransaction } = useContext(GlobalContext);
        const sign = transaction.amount < 0 ? '-' : '+';


    };

    // Transactions List


    return (
        <div>
            <header className="fixed z-10 py-4 bg-[#f2f2fc] border-b w-[100%]  mr-[70%] font-[andika]">
                <div

                    className="container flex items-center justify-between h-full px-36 mx-auto text-purple-600 dark:text-purple-300 ">
                    {/* <!-- Mobile hamburger --> */}

                    <button
                        className="p-1 mr-5 -ml-1 rounded-md md:hidden focus:outline-none focus:shadow-outline-purple">
                        <FontAwesomeIcon className="text-sm mr-[15px]" icon={faBars}></FontAwesomeIcon>
                    </button>
                    <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">
                        Paiements
                    </h2>
                    {/* <!-- Search input --> */}
                    <div className="flex justify-center flex-1 lg:mr-32">
                        <div
                            className="relative w-full max-w-xl mr-6 focus-within:text-purple-500">
                            <div className="absolute inset-y-0 flex items-center pl-2">
                                <FontAwesomeIcon className="text-sm mr-[15px] text-[#22b35e]" icon={faSearch}></FontAwesomeIcon>
                            </div>
                            <input
                                className="w-full pl-8  pr-2 text-sm placeholder-gray-600 bg-white border-0 h-9 rounded-md focus:outline-none text-black"
                                type="text"
                                placeholder="Recherchez ..." />
                        </div>
                    </div>
                    <ul className="flex items-center flex-shrink-0 space-x-6">
                        {/* <!-- Theme toggler --> */}
                        <li class="flex">
                            <button
                                className="rounded-md focus:outline-none focus:shadow-outline-purple"                                    >
                            </button>
                        </li>
                        {/* <!-- Notifications menu --> */}
                        <li class="relative">
                            <button onClick={() => setShow(!show)}
                                className="relative align-middle rounded-md focus:outline-none focus:shadow-outline-purple text-[#22b35e]">
                                <FontAwesomeIcon className="text-sm mr-[15px]" icon={faBell} ></FontAwesomeIcon>

                                {/* <!-- Notification badge --> */}
                                <span aria-hidden="true" className="absolute top-1 -right-[-12px] inline-block w-3 h-3 transform translate-x-1 -translate-y-1 bg-red-600 border-2 border-white rounded-full"></span>
                            </button>
                            {show ? <ul
                                className="absolute right-0 w-56 p-2 mt-2 space-y-2 text-gray-600 bg-white border border-gray-100 rounded-md shadow-md dark:border-gray-700 dark:text-gray-300 dark:bg-gray-700"
                            >
                                <li className="flex">
                                    <a
                                        className="inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                                        href="#"
                                    >
                                        <span>Messages</span>
                                    </a>
                                </li>
                                <li class="flex">
                                    <a
                                        class="inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                                        href="#"
                                    >

                                        <span>Alerts</span>
                                    </a>
                                </li>
                            </ul> : null}
                        </li>
                        {/* <!-- Profile menu --> */}
                        <li className="relative">
                            <button onClick={() => setSee(!see)}
                                className="align-middle rounded-full focus:shadow-outline-purple focus:outline-none"
                            >
                                <img
                                    class="object-cover w-8 h-8 rounded-full"
                                    src="IMG_5730.jpg"
                                    alt=""
                                />
                            </button>
                            {see ? <ul
                                className="absolute right-0 w-56 p-2 mt-2 space-y-2 text-gray-600 bg-white border border-gray-100 rounded-md shadow-md dark:border-gray-700 dark:text-gray-300 dark:bg-gray-700"
                            >
                                <li className="flex">
                                    <a
                                        className="inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                                        href="#"
                                    >
                                        <FontAwesomeIcon className="text-sm mr-[15px]" icon={faUser}></FontAwesomeIcon>
                                        <span>Profile</span>
                                    </a>
                                </li>
                                <li class="flex">
                                    <a
                                        class="inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                                        href="#"
                                    >
                                        <FontAwesomeIcon className="text-sm mr-[15px]" icon={faGear}></FontAwesomeIcon>

                                        <span>Settings</span>
                                    </a>
                                </li>
                                <li class="flex">
                                    <a
                                        class="inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                                        href="#"
                                    >
                                        <FontAwesomeIcon className="text-sm mr-[15px]" icon={faDoorOpen}></FontAwesomeIcon>
                                        <span>Log out</span>
                                    </a>
                                </li>
                            </ul> : null}
                        </li>
                    </ul>
                </div>
            </header>
            <Header />

            <main className="min-h-[100vh] block text-[#302e4d] bg-[#f2f2fc] opacity-1 p-[0_30px] font-[andika]">
                <div className="container pb-[40px] pt-[60px] max-w-[1500px] w-[35%] ml-[12%]" >
                </div>
                <div className="grid gap-2 mb-2 md:grid-cols-2 xl:grid-cols-4 ml-[15%] ">
                    <div className="flex flex-col h-[85vh] items-center w-[120%] p-[20px_0] flex-[30%] rounded-[30px] bg-[#fff] ">
                        <div className="header">
                            <h2 class="text-2xl font-bold">Transactions</h2>
                        </div>
                        <div className="balance p-[35px_0]">
                            <h4>Votre Balance</h4>
                            <h1 className="text-2xl font-bold"> {moneyFormatter(total)}</h1>
                        </div>
                        <div className="income-container flex flex-col items-center justify-center bg-[#cce3ff] rounded-[30px] mb-[10px] w-[300px] h-[100px] ">
                            <h4 className="inx-exp-heading">Revenus</h4>
                            <h1 id="money-plus" className="money plus text-2xl font-bold text-[#10c06e]">
                                {moneyFormatter(income)}
                            </h1>
                        </div>
                        <div className="expense-container flex flex-col items-center justify-center bg-[#cce9df] rounded-[30px] w-[300px] h-[100px] ">
                            <h4 className="inx-exp-heading">Frais</h4>
                            <h1 className="money minus text-2xl font-bold text-[#ff5e57]">                            {moneyFormatter(expense)}
                            </h1>
                        </div>

                        <h3 className="text-xl font-bold border-b pb-[10px] m-[40px_0]">Ajoutez transaction</h3>
                        <form onSubmit={onSubmit}>
                            <div className="form-control">
                                <label htmlFor="text" className="inline-block m-[10px_0] ">Texte</label>
                                <input
                                    type="text"
                                    value={text}
                                    onChange={(e) => setText(e.target.value)}
                                    placeholder="Entrez texte..."
                                    className="border rounded-sm block text-md p-[10px] w-[100%] focus:border focus:border-blue-800"
                                />
                            </div>
                            <div className="form-control">
                                <label htmlFor="amount" className="inline-block m-[10px_0]">
                                    Montant <br />
                                    (négative - frais, positive - revenus)
                                </label>
                                <input
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                    type="number"
                                    className="border rounded-sm block text-md p-[10px] w-[100%] focus:border focus:border-blue-800 "
                                    placeholder="Entrez montant..."
                                />
                            </div>
                            <button className="BTN cursor-pointer bg-[#575fcf] text-[#fff] block text-md m-[25px_0] p-[10px] w-[100%] rounded-md">Ajoutez transaction</button>
                        </form>

                    </div>
                    <div className="block w-[70rem] ">
                        <h3 className="text-xl font-bold border-b pb-[10px] mt-[40px] ml-[15%] text-center">Historique</h3>
                        <ul className="list list-none p-0 mb-[40px]">
                            <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
                                {transaction.text} <span>{sign}{moneyFormatter(transaction.amount)}</span><button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default addTransaction
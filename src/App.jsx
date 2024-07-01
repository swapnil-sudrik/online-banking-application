import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import AccountDetails from './components/AccountDetails'
import Dashboard from './components/Dashboard'
import Navbar from './components/Navbar'
import Registration from './components/Registration'
import TransactionHistory from './components/TransactionHistory'
import BillPayment from './components/BillPayment'
import CustomerSupport from './components/CustomerSupport'
import Login from './components/Login'
import FundTransfer from './components/FundTransfer'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/navbar' element={<Navbar/>}/>
          <Route path='/registration' element={<Registration/>}/>
          <Route path='/transaction-history' element={<TransactionHistory/>}/>
          <Route path='/fund-transfer' element={<FundTransfer/>}/>
          <Route path='/bill-payments' element={<BillPayment/>}/>
          <Route path='/account-details' element={<AccountDetails/>}/>
          <Route path='/customer-support' element={<CustomerSupport/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App

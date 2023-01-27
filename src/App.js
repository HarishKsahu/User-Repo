import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

function App() {
  return (
    <div className='wrapper bg-dark d-flex align-item-center justify-content-center w-100'>
      <div className='login'>
        <h3 className='mb-3'>User Account Manager</h3>
        <form className='needs-validation'>
          <div className='form-group was-validated mb-2'>
            <lebal htmlFor='name' className='form-label'>User Name</lebal>
            <input type="name" className='form-control' required></input>
          </div>
          <table>
            <th>
              <div className='form-group was-validated mb-2'>
                <lebal htmlFor='password' className='form-label'>Password</lebal>
                <input type="password" className='form-control' required></input>
              </div>
            </th>
            <th>
              <div className='form-group was-validated mb-2'>
                <lebal htmlFor='c-password' className='form-label'>Confirm Password</lebal>
                <input type="password" className='form-control' required></input>
              </div>
            </th>
          </table>
          <div className='form-group was-validated mb-2'>
            <lebal htmlFor='name' className='form-label'>Name</lebal>
            <input type="text" className='form-control' required></input>
          </div>
          <div className='form-group was-validated mb-2'>
            <lebal htmlFor='email' className='form-label'>Email</lebal>
            <input type="email" className='form-control' required></input>
          </div>
          <div className='form-group was-validated mb-2'>
            <lebal htmlFor='role' className='form-label'>Role</lebal>
            <select>
              <option>
                Engineer
              </option>
              <option>
                Administrator
              </option>
            </select>
          </div>
          <div className='form-group was-validated mb-2'>
            <lebal htmlFor='d-reg' className='form-label'>Date Reg</lebal>
            <input type="date" className='form-control' required></input>
          </div>
          <div className='form-group form-check mb-2'>
            <input type="checkbox" className='form-check-input'></input>
            <lebal htmlFor='check' className='form-check-label'>Remember Me</lebal>
          </div>
          <table className='inpu'>
            <th><button type='submit' className='btn btn-success w-100 mt-2'>Submit</button></th>
            <th><button type='reset' className='btn btn-success w-100 mt-2'>Reset</button></th>
          </table>
        </form>
      </div>
    </div>
  );
}

export default App;

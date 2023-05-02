import React from "react";
import store from "../../redux/redux.index";
import { demoApiCall, actions } from '../../redux/features/first-apis'

export default function MyFirstRedux() {
  const data = store.getState()
  console.log('store data', data)
  const handleClick = () => {
    store.dispatch(demoApiCall())
  };
  const handleClickToAdd = () => {
    store.dispatch(actions.addvalue({val: 2}))
    console.log('store data', data)
  }
  return (
    <>
    <div>
    {data.second.map((elem: any) => {
      <ul>
        <li>{elem.id}</li>
        <li>{elem.value}</li>
      </ul>
    })}
    </div>
      <div>MyFirstRedux</div>
      <button onClick={handleClick}>Click</button>
      <button onClick={handleClickToAdd}>Click to Add</button>
    </>
  );
}

import React from "react";
import store from "../../redux/redux.index";
import { useSelector, useDispatch} from 'react-redux'
import { demoApiCall, addvaluenew } from '../../redux/features/first-apis'
import { newOneSlice } from '../../redux/features/new-feature'


export default function MyFirstRedux() {
  const data = store.getState()
  const rData: any = useSelector((state) => state)
  const dispatch = useDispatch()
  console.log('store data rData', rData)
  const handleClick = () => {
    store.dispatch(demoApiCall())
  };
  const handleClickToAdd = () => {
    dispatch(addvaluenew({name: 2} as any))
    // console.log('store data', data)
  }

  const newHandleClick = () => {
    dispatch(newOneSlice({name: 'Button clicked'} as any))
    console.log('update data', rData)
  }
  return (
    <>
    <div>
    {/* {data.second.map((elem: any) => {
      <ul>
        <li>{elem.id}</li>
        <li>{elem.value}</li>
      </ul>
    })} */}
    </div>
      <div>MyFirstRedux</div>
      <div>{ rData?.newRed?.displayName.map((i: any, iN: number) => ( <li key={iN}>{i}</li>))}</div>
      <button onClick={handleClick}>Click</button>
      <button onClick={handleClickToAdd}>Click to Add</button>
      <button onClick={newHandleClick}>New Button</button>
    </>
  );
}

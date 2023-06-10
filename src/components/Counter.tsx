import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount, reset } from "../features/counter/counterSlice";
import type { AppDispatch, RootState } from "../app/store";
import { useState } from "react";


function Counter() {
    const count = useSelector((state: RootState) => state.counter.count)
    const dispatch = useDispatch<AppDispatch>()

    const [amount, setAmount] = useState<number>(0)

    const resetAll = () =>{
      setAmount(0)
      dispatch(reset())
    }
    return (
      <>
        <section>
            <p>{count}</p>
            <div>
                <button onClick={() => dispatch(increment())}>+</button>
                <button onClick={() => dispatch(decrement())}>-</button>
            </div>
                <input type="number" value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                />
                <button onClick={() => dispatch(incrementByAmount(amount))}>Increment</button>

                <button onClick={resetAll}>Reset</button>
        </section>
      </>
    );
  }
  
  export default Counter;
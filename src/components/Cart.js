import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asusDecrement, asusIncrement } from "../redux/counterAsus/actions";
import { canonDecrement, canonIncrement } from "../redux/counterCanon/actions";
import { dellDecrement, dellIncrement } from "../redux/counterDell/actions";

const Cart = () => {
  const [price, setPrice] = useState("");
  const [quantity, setQuantiy] = useState("");

  // const count = useSelector((state) => state.counter.value);
  const countAsus = useSelector((state) => state.counterAsus.quantity);
  const countCanon = useSelector((state) => state.counterCanon.quantity);
  const countDell = useSelector((state) => state.counterDell.quantity);

  const priceAsus = useSelector((state) => state.counterAsus.price);
  const priceCanon = useSelector((state) => state.counterCanon.price);
  const priceDell = useSelector((state) => state.counterDell.price);

  const dispatch = useDispatch();

  const asusIncrementHandler = () => {
    dispatch(asusIncrement(35500));
  };
  const asusDecrementHandler = () => {
    dispatch(asusDecrement(35500));
  };

  const canonIncrementHandler = () => {
    dispatch(canonIncrement(36500));
  };
  const canonDecrementHandler = () => {
    dispatch(canonDecrement(36500));
  };

  const dellIncrementHandler = () => {
    dispatch(dellIncrement(9300));
  };
  const dellDecrementHandler = () => {
    dispatch(dellDecrement(9300));
  };

  useEffect(() => {
    const totalQuantity = countAsus + countCanon + countDell;
    const totalPrice = priceAsus + priceCanon + priceDell;
    setQuantiy(totalQuantity);
    setPrice(totalPrice);
  }, [priceAsus, priceCanon, priceDell]);

  // console.log(priceAsus, priceCanon, priceDell);
  // console.log(price);

  return (
    <div>
      <div className="bg-gray-50 h-full md:h-screen">
        <div className="grid place-items-center">
          <h1 className="text-gray-900 font-bold text-3xl p-10 underline decoration-purple-500 decoration-4 underline-offset-8 mb-4">
            Shopping Cart
          </h1>
        </div>
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-8 xxl:col-span-8">
            <div className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
              <div className="flex justify-between px-4 items-center">
                <div className="text-lg font-semibold">
                  <p>Asus Vivobook X515MA (20)</p>
                  <p className="text-gray-400 text-base">Tk 35,500</p>
                </div>
                <div className="text-lg font-semibold">
                  <button
                    onClick={asusIncrementHandler}
                    className="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-2 rounded-full inline-flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
              <div className="flex justify-between px-4 items-center">
                <div className="text-lg font-semibold">
                  <p>Dell E1916HV 18.5 Inch (35)</p>
                  <p className="text-gray-400 text-base">Tk 9,300</p>
                </div>
                <div className="text-lg font-semibold">
                  <button
                    onClick={dellIncrementHandler}
                    className="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-2 rounded-full inline-flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
              <div className="flex justify-between px-4 items-center">
                <div className="text-lg font-semibold">
                  <p>Canon Eos 4000D 18MP (72)</p>
                  <p className="text-gray-400 text-base">Tk 36,500</p>
                </div>
                <div className="text-lg font-semibold">
                  <button
                    onClick={canonIncrementHandler}
                    className="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-2 rounded-full inline-flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-4 xxl:col-span-4">
            <div className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
              <div className="flex justify-between border-b-2 mb-2">
                <div className="text-lg py-2">
                  <p>Asus Vivobook X515MA</p>
                </div>
                <div className="text-lg py-2">
                  <div className="flex flex-row space-x-2 w-full items-center rounded-lg">
                    <button
                      onClick={asusDecrementHandler}
                      className="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 12H6" />
                      </svg>
                    </button>
                    <p>{countAsus}</p>
                    <button
                      onClick={asusIncrementHandler}
                      className="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex justify-between border-b-2 mb-2">
                <div className="text-lg py-2">
                  <p>Dell E1916HV 18.5 Inch</p>
                </div>
                <div className="text-lg py-2">
                  <div className="flex flex-row space-x-2 w-full items-center rounded-lg">
                    <button
                      onClick={dellDecrementHandler}
                      className="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 12H6" />
                      </svg>
                    </button>
                    <p>{countDell}</p>
                    <button
                      onClick={dellIncrementHandler}
                      className="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex justify-between border-b-2 mb-2">
                <div className="text-lg py-2">
                  <p>Canon Eos 4000D 18MP</p>
                </div>
                <div className="text-lg py-2">
                  <div className="flex flex-row space-x-2 w-full items-center rounded-lg">
                    <button
                      onClick={canonDecrementHandler}
                      className="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 12H6" />
                      </svg>
                    </button>
                    <p>{countCanon}</p>
                    <button
                      onClick={canonIncrementHandler}
                      className="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex justify-center items-center text-center">
                <div className="text-xl font-semibold">
                  <p>Total Item</p>
                  <p className="text-5xl">{quantity}</p>
                </div>
              </div>
            </div>
            <div className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
              <div className="flex justify-center items-center text-center">
                <div className="text-xl font-semibold">
                  <p>Total Price</p>
                  <p className="text-5xl">{price}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

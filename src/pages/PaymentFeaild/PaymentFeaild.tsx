import { Link } from "react-router-dom";
import SuccessImage from "../../../public/success.jpeg";

const PaymentFeaild = () => {
  return (
    <>
      <div className="w-full px-4 lg:px-20 flex items-center justify-center py-20">
        <div
          // ref={divRef}
          className="w-[45%] shadow-md shadow-green-800 bg-white py-5 px-10"
        >
          <div className="w-full flex items-center justify-center">
            <img
              src={SuccessImage}
              className="w-[120px] h-[110px]"
              alt="success-payment"
            />
          </div>

          <div className="pt-10 pb-3 space-y-2">
            <div>
              <h1 className="text-[25px] text-center font-medium text-primary">
                Payment Successful
              </h1>
            </div>
            <div className="pt-10 pb-3 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-16 text-gray-500">Payment type</span>
                <span className="text-16 text-gray-600">
                  {/* {data?.payment_type} */}
                  dld
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-16 text-gray-500">Bank</span>
                <span className="text-16 text-gray-600">Bank Name</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-16 text-gray-500">Mobile</span>
                <span className="text-16 text-gray-600">
                  {/* {data?.user?.phone} */}
                  01700000000
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-16 text-gray-500">Email</span>
                <span className="text-16 text-gray-600">
                  {/* {data?.user?.email} */}
                  email@gmail.com
                </span>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between py-3">
                <span className="text-15 text-gray-800 font-medium">
                  Amount Price
                </span>
                <span className="text-16 text-gray-800">
                  {/* {data?.amount} */}
                  770
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-16 text-gray-500">Transaction Id</span>
                <span className="text-16 text-gray-600">
                  {/* {data?.transaction_id} */}
                  1234
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-8 py-6">
            <Link
              to="/"
              className="w-full bg-primary text-white py-2 rounded-md mt-3 text-center"
            >
              Continue Shopping
            </Link>

            {/* <button
              onClick={handleDownloadPDF}
              className="w-full bg-primary text-white py-2 rounded-md mt-3"
            >
              Print Receipt
            </button> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentFeaild;

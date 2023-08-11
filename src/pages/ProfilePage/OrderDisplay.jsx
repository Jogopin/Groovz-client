import dayjs from "dayjs"
import { useState } from "react"
import ButtonIcon from "../../components/ButtonIcon"
import { orderDetailsIcon, upIcon } from "../../assets/icons"

export default function OrderDisplay({order}){
    const [isShowingMore, setIsShowingMore] =useState(false)
    const handleClickMore = ()=>{
      setIsShowingMore(true)
    }
    const handleClickLess = ()=>{
      setIsShowingMore(false)
    }
    return<>
       <section
            key={order._id}
            className="mx-auto mb-4 rounded-lg bg-white p-6 text-zinc-800 shadow-md w-screen sm:w-full"
          >
            {/* Order Overview */}
            <section className="flex justify-between w-full">
              <div className=" flex flex-col gap-8 text-left">
                <h2 className="font-medium">
                  {dayjs(order.createdAt).format("DD/MM/YY")}
                </h2>
                <span className="italic opacity-70 break-words w-32 md:w-full">#{order._id}</span>
              </div>
              <div className="flex flex-col gap-8 text-center">
                <h3 className="w-32 font-medium">
                  Status: <span className="text-right">{order.status}</span>
                </h3>
                <span className="italic opacity-70 ">
                  Products ordered:{" "}
                  {order.products.reduce((acc, curr) => acc + curr.quantity, 0)}
                </span>
              </div>
              <div className=" flex flex-col gap-8 text-right">
                <h2 className="self-end font-semibold">
                  Total Price: {order.total}€
                </h2>
                <div className="self-center">
                  {!isShowingMore && <ButtonIcon iconImage={orderDetailsIcon} handleClick={handleClickMore} alt={"show-more"}/>}
                </div>
              </div>
            </section>
            {/* List Of Products */}
            {isShowingMore && 
              <section className="mt-4 rounded-md border-2 p-4 mx-auto overflow-auto max-w-full sm:max-w-none">
              <table className="w-full">
                <thead>
                  <tr className="">
                    <th></th>
                    <th className="font-medium">Product</th>
                    <th className="font-medium">Unit Price</th>
                    <th className="font-medium">Qty</th>
                    <th className="font-medium">Amount</th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  {order.products.map((item) => (
                    <tr key={item._id}>
                      <td>
                        <img
                          src={item.product.images[0]}
                          alt={item.reference}
                          className="w-10"
                        />
                      </td>
  
                      <td>
                        <span className="truncate ">{item.product.name}</span>
                      </td>
                      <td>
                        <h2>€{item.priceAtPurchase.toFixed(2)}</h2>
                      </td>
                      <td>
                        <h2>{item.quantity}</h2>
                      </td>
                      <td className="py-4 text-center">
                        €{(item.priceAtPurchase * item.quantity).toFixed(2)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="mt-10 text-sm font-medium">
                Shipping address:{" "}
                <span className="font-normal italic opacity-70">{`${order.address}`}</span>{" "}
              </p>
              <div className="text-right">
                <ButtonIcon iconImage={upIcon} handleClick={handleClickLess}/>
              </div>
            </section>
            }
           
          </section>
    </>
  }
import React from "react";
import { format } from "date-fns";
import CurrencyFormat from 'react-currency-format';

export default function RentedItem(props) {
  const {...item}=props;

  const timeFormatDisplay = (t) => {
    return format(t, "hh:mm a - MMM dd, yyyy");
  }
  return (
    <div className=" column is-half">
      <div className="box">
        <div className="container mb-3">
          <div className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                <img src={item.image} alt={item.title} />
              </figure>
            </div>
            <div className="media-content">
              <div className="container">
                <b style={{ textTransform: "capitalize" }}>{item.title}</b>
                <p className="small">{item.description}</p>
              </div>
              <p className='mt-3'><strong>----Receipt----</strong></p>
              <div className="is-clearfix">
                <div className='container is-pulled-left'>
                  <p>
                    Item was rented
                    <br></br>
                    <strong>FROM&ensp;</strong> {timeFormatDisplay(item.startTime)}<br></br>
                    <strong>TO&ensp;&ensp;&ensp;&ensp;</strong> {timeFormatDisplay(item.endTime)}
                    {/* <p>{item.endEarly ? (<p>End renting early</p>):("")}</p> */}
                  </p>
                </div>
                <div className="container is-pulled-right">
                  <strong>Payment</strong>
                  <br></br>
                  <CurrencyFormat
                    // renderTex={(value) => ({value})}
                    decimalScale={2}
                    value={item.total}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"CAD $"}
                  />
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
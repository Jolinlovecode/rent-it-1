import { React } from "react";
import { useStateValue } from "../providers/StateProvider";
import OnRentingItem from "./OnRentingItem";

/**
 * Act as a cart that keeping item data until item is expired
 */

export default function OnRenting() {
  const [{ rentingBasket }, dispatch] = useStateValue();
  console.log("renting basket from OnRenting.js: ", rentingBasket);

  // console.log(typeof (rentingBasket[0].cost))

  const formatItemsCounter = (items) => {
    if (items === 0) return "";
    else if (items === 1) return "1 item";
    else return `${items} items`;
  };

  // render the onrenting items in rentingBasket to OnRentingItem component
  const currentlyRentingItems = rentingBasket.map((item) => (
    <OnRentingItem key={item.id} {...item} />
  ));

  // const expiryTime =

  // setTimeout(async () => {
  //   let data = new FormData();
  // data.append("token", DESTROY_TOKEN);
  // data.append("ref", "terraform-v1");
  // data.append("variables[LAST_PIPELINE_ID]", pipelineId);
  // config = {
  //         method: "POST",
  //         url: "http://localhost:3000/rented",
  //         data: data,
  //         headers: {
  //             ...data.getHeaders(),
  //         },
  //     };

  //     await axios(config).then(
  //         () => {
  //             console.log("Resources destroyed.");
  //         },
  //         (error) => {
  //             console.log(`error : ${error}`);
  //         }
  //     );
  // }, expiryTime);

  return (
    <div className="section">
      <div className="container">
        <div className="title is-4">Currently Renting</div>
        <p className="subtitle is-6">
          {formatItemsCounter(rentingBasket.length)}
        </p>
        <div className="column columns is-multiline">
          {currentlyRentingItems.length ? (
            currentlyRentingItems
          ) : (
            <div className="column">
              <span className="title has-text-grey-light">No items found!</span>
            </div>
          )}
        </div>
      </div>
      {/* <div>getTotalRenting: {getTotalRenting(rentingBasket)} - </div> */}
    </div>
  );
}

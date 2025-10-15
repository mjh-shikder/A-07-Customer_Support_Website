import { Suspense, useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Container from "./components/Container";
import StatusBox from "./components/StatusBox";
import Cards from "./components/Cards";
import { toast, ToastContainer } from "react-toastify";

const fetchCard = async () => {
  const result = await fetch("/Card.json");
  return result.json();
};
// remember: ei mal ta function App() er moddhe dile every click e reload ney.
const fetchPromise = fetchCard();
function App() {


  // clicked to add in progress
  const [clicked, setClicked] = useState([]);

  const handleClick = (caRd) => {
   // console.log("button clicked", caRd);
    const newClicked = [...clicked, caRd];
    //console.log(newClicked.length);
    setClicked(newClicked);
    toast.success("In Progress!");
  };
  // /////

  // clicked card and add to Task status
  const [clickedCard, setClickedCard] = useState([]);

  const handleClickedCard = (card) => {
    const newClickedCard = [...clickedCard, card];
    setClickedCard(newClickedCard);
   // console.log("handle clicked card clicked", clicked);
  };

  // Complete button function
  const [clickComplete, setClickComplete] = useState([])

  const handlClickComplete = (card) => {
    //console.log(clickComplete);
    const newClickComplete = [...clickComplete, card]
    setClickComplete(newClickComplete)

    toast.success("Complete")
    
  }

  // ref from module 40: 40-7
  const removeCard = (c) => {
   // console.log(c);
    const filterData = clickedCard.filter(crd => crd.id !== c.id)
    console.log(filterData);
    setClickedCard(filterData)
        
    
  }

  return (
    <>
      <Navbar></Navbar>

      <StatusBox clicked={clicked} clickComplete={clickComplete} ></StatusBox>

      <Suspense
        fallback={
          <span className="loading loading-spinner loading-xl  "></span>
        }
      >
        <Cards
          removeCard={removeCard}
          handlClickComplete={handlClickComplete}
          handleClickedCard={handleClickedCard}
          handleClick={handleClick}
          clickedCard={clickedCard}
          clicked={clicked}
          fetchPromise={fetchPromise}
        ></Cards>
      </Suspense>

      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;

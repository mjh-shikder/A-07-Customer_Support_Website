import React, { use, useState } from 'react';
import Container from './Container';
import SingleCard from './SingleCard';
import Task from './Task';

const Cards = ({ fetchPromise, handleClick, clicked,  handleClickedCard, clickedCard, handlClickComplete, removeCard}) => {
    
    const cardData = use(fetchPromise)
   
   
   




    return (
        <div>
            <Container>
                <div className='mb-12 flex flex-col md:flex-row justify-between gap-5'>
                    
                    <div className=' md:w-3/4 md:mb-0 mb-10'>
                        <h1 className='title mb-4'>Customer Tickets</h1>
                            
                        <div className='grid md:grid-cols-2 gap-5 '>
                        {
                          cardData.map(card => <SingleCard handleClick={handleClick} handleClickedCard={ handleClickedCard}  key={card.id} card={card}></SingleCard>)      
                        }
                        
                        </div>
                    </div>

                    
                    <div className='  md:w-1/4 '>
                        {/* <div className='mb-10'>
                            <h1 className='title mb-3'>Task Status</h1>
                            <div>
                            <p className='text '>Select a ticket to add to Task Status</p>
                            </div>
                            <div className='bg-white p-4'>
                                <h2 className='font-semibold mb-3 text-lg text-gray-800'>{}</h2>
                                <button className='btn bg-green-600 border-0 w-full '>Complete</button>
                            </div>
                            
                        </div> */}
                        <Task clicked={clicked} clickedCard={clickedCard.map(card=>card)} handlClickComplete={handlClickComplete} removeCard={removeCard}></Task>
                        

                        <div>
                            <h1 className='title mb-3'>Resolved Task</h1>
                            <p className='text '>No resolved tasks yet.</p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Cards;
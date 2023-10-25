import { useEffect, useState , useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Tooltip from '@mui/material/Tooltip';
import CartContext from '../contexts/cartContext';

const Stepper = ({ stepHandler }) => {
    const { cartData } = useContext(CartContext)
    const steps = ['shopping cart' , 'review the order' , 'login' , 'payment'];
    const [currentStep , setCurrentStep] = useState(1);
    const [isCompleted , setIsCompleted] = useState(false);

    const Navigate = useNavigate();

    useEffect(() => {
        if(currentStep === 3){
            Navigate('/login' , {replace : true})
        }
        stepHandler(currentStep)
    
    },[currentStep])


    useEffect( () => {
        if(cartData.length === 0){
            setCurrentStep(1)
        }
    
    },[cartData])

    const increaseStepHandler = () => {
        currentStep === steps.length ? setIsCompleted(true) : setCurrentStep(prevStep => prevStep + 1);
    }

    const decreaseStepHandler = () => {
        currentStep === 1 ? setCurrentStep(1) : setCurrentStep(prevStep => prevStep - 1)
        setIsCompleted(false)
    }

    return (
        <>
            <div className = 'flex flex-wrap justify-center items-center select-none relative w-fit mx-auto'>
                {
                    steps.map( (step , index) => 
                        <div key = {index} className = {`step-item flex flex-wrap justify-center items-center relative p-2 mx-1 ${(index + 1 === currentStep) && 'active'} ${(index + 1 < currentStep || isCompleted) && 'complete'} `}>
                            <p className = 'step w-10 h-10 z-30 flex flex-wrap justify-center items-center bg-neutral-500 text-white rounded-full'>{(index + 1 < currentStep || isCompleted) ? <i className = 'bx bx-check text-lg'></i> : index + 1}</p>
                            <p className = 'step-title w-full text-center'>{step}</p>
                        </div>
                    )
                }

                {
                    cartData.length !== 0 &&
                    <Tooltip title = 'next step' placement = 'right' arrow classes = {{color : 'red'}}>
                        <button onClick = {increaseStepHandler} className = 'disabled:cursor-not-allowed disabled:text-neutral-500 p-2 text-black outline-none select-none rounded-lg absolute -right-10 bottom-5'>{currentStep === 4 ? 'finish' : <i className = 'bx bx-right-arrow-alt text-3xl'></i>}</button>
                    </Tooltip>
                }

                {
                    currentStep !== 1 &&
                    <Tooltip title = 'previous step' placement = 'left' arrow>
                        <button onClick = {decreaseStepHandler} className = 'p-2 text-black outline-none rounded-lg absolute -left-10 bottom-5'><i className = 'bx bx-left-arrow-alt text-3xl'></i></button>
                    </Tooltip>
                }
            </div>


        </>
    );
};

export default Stepper;
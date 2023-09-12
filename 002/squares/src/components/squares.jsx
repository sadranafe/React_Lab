import Square from './square';

const Squares = () => {
    return (
        <>
            <div className = 'flex flex-wrap justify-center items-center w-full'>
                <div className = 'w-9/12 flex flex-wrap justify-center items-center'>
                    <Square index = {1}/>
                    <Square index = {2}/>
                    <Square index = {3}/>
                    <Square index = {4}/>
                    <Square index = {5}/>
                    <Square index = {6}/>
                    <Square index = {7}/>
                    <Square index = {8}/>
                    <Square index = {9}/>
                    <Square index = {10}/>
                    <Square index = {11}/>
                    <Square index = {12}/>
                    <Square index = {13}/>
                    <Square index = {14}/>
                    <Square index = {15}/>
                    <Square index = {16}/>
                </div>
            </div>
        </>
    );
};

export default Squares;

const AboutUs = () => {
    return (
        <>
            <div className = "bg-neutral-50 h-[72vh] flex flex-wrap justify-center items-center">
                <div className = "pr-5">
                    <img src = "./about-us_vector_rbg.png" alt = "mohammad sadra nafe" width = {400}/>
                </div>

                <div className = "flex flex-wrap justify-center items-center w-4/12">
                    <div className = "w-full py-2 mb-3">
                        <h1 className = "text-4xl">Lorem ipsum dolor sit</h1>
                    </div>

                    <div className = "text-justify">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo impedit ducimus deserunt quae ex vitae perspiciatis atque earum aliquid numquam nobis et, veniam asperiores cumque fuga ab sapiente beatae dolores maiores. Ipsum expedita culpa tenetur repellat itaque eaque iusto molestiae facere reprehenderit asperiores aliquid fugiat vero id voluptatem, rerum ipsam?</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutUs;
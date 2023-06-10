import React from 'react';
import SectionTitle from '../../Shared/SectionTitle';

const Faq = () => {
    return (
        <div>
            <SectionTitle title={'FAQ Section'}></SectionTitle>
            <div className='mb-20'>
                <div className='flex lg:flex-row flex-col-reverse gap-10 w-11/12 lg:w-3/4 mx-auto'>
                    <div data-aos="fade-right" className='w-11/12 lg:w-3/4 mx-auto flex flex-col gap-5 mt-7'>
                        <div className='w-full mx-auto border-2 border-slate-200'>
                            <div className="collapse">
                                <input type="checkbox" />
                                <div className="collapse-title text-xl font-medium flex justify-between">
                                    <div>
                                    Is prior experience required to join your photography school?
                                    </div>
                                    <button>+</button>
                                </div>
                                <div className="collapse-content">
                                    <p>No, our photography school welcomes students of all experience levels, from beginners to advanced photographers. Our courses are designed to accommodate different skill levels and provide a comprehensive learning experience.</p>
                                </div>
                            </div>
                        </div>
                        <div className='w-full mx-auto border-2 border-slate-200'>
                            <div className="collapse">
                                <input type="checkbox" />
                                <div className="collapse-title text-xl font-medium flex justify-between">
                                    <div>
                                    What type of photography courses do you offer?
                                    </div>
                                    <button>+</button>
                                </div>
                                <div className="collapse-content">
                                    <p>We offer a wide range of photography courses covering various genres such as portrait, landscape, wildlife, studio, and more. Our curriculum is designed to provide a well-rounded education in photography, allowing students to explore different areas of interest.</p>
                                </div>
                            </div>
                        </div>
                        <div className='w-full mx-auto border-2 border-slate-200'>
                            <div className="collapse">
                                <input type="checkbox" />
                                <div className="collapse-title text-xl font-medium flex justify-between">
                                    <div>
                                    What equipment do I need for the photography courses?
                                    </div>
                                    <button>+</button>
                                </div>
                                <div className="collapse-content">
                                    <p>While having a DSLR or mirrorless camera is recommended, it is not mandatory to join our photography courses. We believe that the art of photography is not solely dependent on the equipment. Our courses focus on developing fundamental skills and understanding the creative aspects of photography.</p>
                                </div>
                            </div>
                        </div>
                        <div className='w-full mx-auto border-2 border-slate-200'>
                            <div className="collapse">
                                <input type="checkbox" />
                                <div className="collapse-title text-xl font-medium flex justify-between">
                                    <div>
                                    How are the classes structured?
                                    </div>
                                    <button>+</button>
                                </div>
                                <div className="collapse-content">
                                    <p>Our classes are typically conducted in small groups to ensure personalized attention and interaction. The curriculum includes a mix of theoretical lessons, practical exercises, hands-on shooting sessions, and critique sessions to help students apply their learning and receive valuable feedback from instructors.</p>
                                </div>
                            </div>
                        </div>
                        <div className='w-full mx-auto border-2 border-slate-200'>
                            <div className="collapse">
                                <input type="checkbox" />
                                <div className="collapse-title text-xl font-medium flex justify-between">
                                    <div>
                                    What are the career prospects after completing the photography courses?
                                    </div>
                                    <button>+</button>
                                </div>
                                <div className="collapse-content">
                                    <p>Our photography courses are designed to equip students with the necessary skills and knowledge to pursue various career paths in photography. Graduates from our school have gone on to work as professional photographers, photojournalists, wedding photographers, commercial photographers, and have even started their own photography businesses.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-left" className=''>
                        <img src="/faq.svg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;
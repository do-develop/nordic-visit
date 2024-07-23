import React, { } from 'react';


const ContactUs: React.FC = () => {

    const handleSubmit = (e: React.FormEvent) => {

    };

    return (
        <>
        <div className='contactus justify-center w-3/5 mx-auto'>
            <h1 className='text-2xl font-extrabold gradient-color'>GET IN TOUCH WITH ONE OF OUR LOCAL TRAVEL EXPERTS</h1>        
            
            <form onSubmit={handleSubmit}>
            <p className=' w-4/5'>Whatever your needs, we are here to help. If you have any questions about our packages or services, or want to customise a tour, please do not hesitate to contact us.</p>
            <fieldset className='flex flex-col w-4/5 border-2 border-color-grey p-3'>
                <legend className='text-lg font-bold text-color-indigo'>Contact detail</legend>
                <table>
                    <tr >
                        <td colSpan={2}>
                            <input type="text" placeholder="Name" required={true}/> <span className="asterisk"> </span>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <input type="text" placeholder="Phone number" />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <input type="email" placeholder="Email address" required={true} /> <span className="asterisk"> </span>
                        </td>
                    </tr>

                    <tr>
                        <td  className='w-3/5'>
                            <label>How do you prefer to be contacted?</label>
                        </td>
                        <td>
                            <input type="radio" name="contact" />Phone call<br/>
                            <input type="radio" name="contact" />Email<br/>
                            <input type="radio" name="contact" />SMS<br/>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <label>Prefered contact date and time:</label>
                        </td>
                        <td>
                            <input type="datetime-local" />
                        </td>
                    </tr>

                </table>
                
            </fieldset>

            <fieldset className='inline-block w-4/5 border-2 border-color-grey p-3'>
                <legend className='text-lg font-bold text-color-indigo'>Query</legend>

                <table>
                    <tr>
                        <td className='w-3/5'>
                            <label>What would you like to ask?</label>
                        </td>
                        <td>
                            <select>
                                <optgroup label="Existing booking">
                                    <option>Itinerary change</option>
                                    <option>Transportation reservation</option>
                                    <option>Accomodation reservation</option>
                                </optgroup>
                                <optgroup label="New holiday request">
                                    <option>Building a custom itinerary</option>
                                    <option>Guided tour itinerary</option>
                                </optgroup>
                                <optgroup label="Other">
                                    <option>Other</option>
                                </optgroup>
                            </select>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <label>Was this website informative?<br/> (0 = Not helpful; 10 = Very informative)</label>
                        </td>
                        <td>
                            0<input name="service" type="range" value="5" min="0" max="10" step="1"/>10
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <label>We appreciate your feedback:</label>
                        </td>
                        <td>
                            <textarea placeholder="Additional query or feedback" rows={3} className='border-2 border-color-grey'></textarea>
                        </td>
                    </tr>
                </table>
            </fieldset>
            <br/>
            <input className="form-btn" type="submit" value="Send my query"></input>
            <input className="form-btn" type="reset" value="Clear form"></input>
            </form>  
        </div>
        </>
    );

};

export default ContactUs;
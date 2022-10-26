import React from 'react';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import './getInTouchForm.scss';

const GetInTouchForm = () => {
  const { slug } = useParams();
  const [defaultServices, setDefaultService] = React.useState();

  const [feedbackFrom, setFeedbackForm] = React.useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    type_of_service: defaultServices || '',
    message: '',
  });

  React.useEffect(() => {
    switch (slug) {
      case 'refrigerator-repair':
        setDefaultService('Refrigerator Repair');
        break;
      case 'freezer-repair':
        setDefaultService('Freezer Repair');
        break;
      case 'washer-repair':
        setDefaultService('Washer Repair');
        break;
      case 'dryer-repair':
        setDefaultService('Dryer Repair');
        break;
      case 'dishwasher-repair':
        setDefaultService('Dishwasher Repair');
        break;
      case 'range-repair':
        setDefaultService('Range Repair');
        break;
      case 'oven-repair':
        setDefaultService('Oven Repair');
        break;
      case 'microwave-repair':
        setDefaultService('Microwave Repair');
        break;
      default:
        setDefaultService('');
        break;
    }
  }, [slug]);

  const handleChange = (e) => {
    const key = e.target.name;
    const val = e.target.value;

    setFeedbackForm((prevState) => ({
      ...prevState,
      [key]: val,
    }));
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    Object.entries(feedbackFrom).map((el) => formData.append(el[0], el[1]));

    try {
      const response = await axios.post(
        'https://control.a-techrepair.com/wp-json/contact-form-7/v1/contact-forms/140/feedback',
        formData,
      );

      if (response.status === 200) {
        toast.success(response.data.message);
        e.target.reset();
      }
    } catch (error) {
      toast.error('Ooops! Something went wrong! Please, try again!');
      console.log(error);
    }
  };

  return (
    <div className="get-in-touch-form-wrapper">
      <form onSubmit={sendEmail}>
        <div>
          <input name="first_name" required type="text" placeholder="First Name *" onChange={handleChange} />
          <input name="last_name" required type="text" placeholder="Last Name *" onChange={handleChange} />
          <input name="email" required type="email" placeholder="Email *" onChange={handleChange} />
          <input name="phone" required type="phone" placeholder="Phone *" onChange={handleChange} />
        </div>

        <div>
          <select name="type_of_service" required defaultValue={defaultServices} onChange={handleChange}>
            <option hidden>Type of service *</option>
            <option value="Refrigerator Repair">Refrigerator Repair Diagnosis</option>
            <option value="Freezer Repair">Freezer Repair Diagnosis</option>
            <option value="Washer Repair">Washer Repair Diagnosis</option>
            <option value="Dryer Repair">Dryer Repair Diagnosis</option>
            <option value="Dishwasher Repair">Dishwasher Repair Diagnosis</option>
            <option value="Range Repair">Range Repair Diagnosis</option>
            <option value="Oven Repair">Oven Repair Diagnosis</option>
            <option value="Microwave Repair">Microwave Repair Diagnosis</option>
          </select>
          <textarea name="message" required placeholder="Message *" onChange={handleChange} />
        </div>

        <input type="submit" value="Submit" className="red-button" />
      </form>
    </div>
  );
};

export default GetInTouchForm;

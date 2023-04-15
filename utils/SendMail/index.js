import emailjs from 'emailjs-com';

export const sendEmail = async (from_email, from_name, message) => {
    const templateParams = {
      from_email,
      from_name,
      message
    };
  
    try {
      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID
      );
        // return response 
        return response;
    } catch (error) {
    //   console.error(error);
        return error;
    }
  };
  
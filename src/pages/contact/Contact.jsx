import React, { useState } from 'react';
import Shell from '../shared/shell';
import Top from '../home/top/Top';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <section className='grid bg-[#46458E] bg-opacity-20 min-h-screen w-full'>

      <Top className="mt-0" />
      <div className="min-h-screen text-white p-4 pt-0 flex flex-col items-center">
        <h2 className="text-[60px] font-bold mb-2">Contact us</h2>
        <form onSubmit={handleSubmit} className="w-full max-w-lg px-6">
          <div className="mb-4">
            <label htmlFor="subject" className="block text-sm font-semibold mr-2 mb-1 flex items-center">
              <Shell whiteOutline />
              氏名：
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-5 border border-gray-100 rounded focus:outline-none focus:border-[#D13200] bg-white rounded-full"
              placeholder="初路 都理"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="subject" className="block text-sm font-semibold mr-2 mb-1 flex items-center">
              <Shell whiteOutline />
              メールアドレス：
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-5 border border-gray-100 rounded focus:outline-none focus:border-[#D13200] bg-white rounded-full"
              placeholder="sorotori@gamil.com"
            />
          </div>

          <div className="mb-4">
            <div className="flex items-center">
              <label htmlFor="subject" className="block text-sm font-semibold mb-1 mr-2 flex items-center">
                <Shell whiteOutline />
                件名：
              </label>
            </div>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-5 border border-gray-100 rounded focus:outline-none focus:border-[#D13200] bg-white rounded-full"
              placeholder="〇〇について"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="subject" className="block text-sm font-semibold mr-2 mb-1 flex items-center">
              <Shell whiteOutline />
              内容：
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-5 border border-gray-100 rounded focus:outline-none focus:border-[#D13200] bg-white rounded-[20px] min-h-[200px]"
              placeholder="こちらにお問い合わせ内容を入力してください"
              rows="4"
            />
          </div>

          <div className="mt-8 text-center">
            <button
              type="submit"
              className="bg-[#D13200] text-lg text-white font-medium py-4 px-32 rounded-full border-2 border-gray-100 hover:bg-gray-500 mx-auto"
            >
              送信
            </button>
          </div>

        </form >
      </div >
    </section >
  );
};

export default ContactForm;
'use client'
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Page = () => {
  const [emails, setEmails] = useState([]);

  const fetchEmails = async () => {
    try {
      const response = await axios.get('/api/email');
      setEmails(response.data.emails);
    } catch (error) {
      console.error('Failed to fetch emails', error);
    }
  };

  useEffect(() => {
    fetchEmails();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Email List</h2>
      <div className="space-y-2">
        {
          emails.map((item, index) => (
            <p key={index} className="text-gray-800">
              {item.email}
            </p>
          ))
        }
      </div>
    </div>
  );
};

export default Page;

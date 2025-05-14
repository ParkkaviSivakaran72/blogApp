'use client'
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const Page = () => {
  const [emails, setEmails] = useState([]);

  const fetchEmails = async () => {
    try {
      const response = await axios.get('/api/email');
      setEmails(response.data.emails);
    } catch (error) {
      toast.error('Failed to fetch emails');
      console.error(error);
    }
  };

  const handleRemove = async (id) => {
    try {
      const response = await axios.delete('/api/email', {
        params: { 
          id:id
        },
      });
      toast.success(response.data.message || 'Email removed');
      fetchEmails(); // Refresh list after delete
    } catch (error) {
      toast.error('Failed to delete email');
      console.error(error);
    }
  };

  useEffect(() => {
    fetchEmails();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Subscription Emails</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border">No.</th>
              <th className="px-4 py-2 border">Email</th>
              <th className="px-4 py-2 border">Date</th>
              <th className="px-4 py-2 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {emails.map((item, index) => (
              <tr key={item._id} className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-2 border">{index + 1}</td>
                <td className="px-4 py-2 border">{item.email}</td>
                <td className="px-4 py-2 border">{new Date(item.date).toDateString()}</td>
                <td className="px-4 py-2 border">
                  <button
                    className="text-red-600 hover:text-red-800 font-semibold"
                    onClick={() => handleRemove(item._id)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
            {emails.length === 0 && (
              <tr>
                <td colSpan={3} className="text-center px-4 py-4 text-gray-500">
                  No subscription emails found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Page;

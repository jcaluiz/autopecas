'use client';
import React, { useState, ChangeEvent } from 'react';

export default function RegistrationByExcel() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    setSelectedFile(file || null);
  };

  const handleSubmit = async () => {
    if (selectedFile) {
      const formData = new FormData();
      let token: { token: string } = { token: '' };
        if (typeof localStorage !== 'undefined') {
            token = JSON.parse(localStorage.getItem('message') || '');
        }
      formData.append('file', selectedFile);
      formData.append('token', token.token)

      try {
        const response = await fetch('http://127.0.0.1:5000/api/upload-excel', {
          method: 'POST',
          body: formData,
        });
        return response;
        // Trate a resposta como necessário
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div>
      <h1>Upload de Arquivo Excel</h1>
      <input type="file" accept=".xlsx, .xls" onChange={handleFileChange} />
      <button onClick={handleSubmit}>Enviar</button>
    </div>
  );
};

import React, { Fragment, useState } from 'react';

export default function AppForm() {
  const [form, setForm] = useState({ name: '', email: '' });
  const [content, setContent] = useState([]);
  const [execute, setExecute] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setContent((prev) => [...prev, form]);
    setExecute(true);
  };
  const handleChange = (e) => {
    const { name, value, id } = e.target;
    setForm({ ...form, [name]: value, id });
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">이름:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
        <label htmlFor="email">이메일:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
        <button>submit</button>
        {execute &&
          content.map((info) => (
            <div style={{ margin: '3rem' }}>
              <li>{`이름 : ${info.name}`}</li>
              <li>{`주소 : ${info.email}`}</li>
            </div>
          ))}
      </form>
    </Fragment>
  );
}

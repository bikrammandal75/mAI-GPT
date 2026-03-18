import { useState } from "react";

const HelpSupport = () => {
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your submission logic here (e.g., API call)
    alert("Message sent!");
    setForm({ name: "", email: "", message: "" });
    setShowForm(false);
  };

  return (
    <div className="p-6 mt-8">
      <h3 className="text-xl font-semibold mb-2">Help & Support</h3>
      <p className="text-gray-500">
        Send your query to{" "}
        <a
          href="mailto:support@genreact.com"
          className="text-blue-500 underline"
        >
          support@genreact.com
        </a>
      </p>

      <button
        onClick={() => setShowForm(!showForm)}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 w-32"
      >
        Contact Us
      </button>

      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="mt-6 grid md:grid-cols-1 gap-6 bg-white p-6 rounded shadow"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              name="message"
              rows="4"
              value={form.message}
              onChange={handleChange}
              required
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>

          <div className="flex gap-4">
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500 w-24"
            >
              Send
            </button>
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="border border-blue-500 text-blue-500 px-4 py-2 rounded-md hover:bg-blue-50 w-24"
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default HelpSupport;

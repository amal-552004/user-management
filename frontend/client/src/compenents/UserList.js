import React, { useState, useEffect } from "react";
import axios from "axios";

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const res = await axios.get("http://localhost:5000/users");
    setUsers(res.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingUser) {
      await axios.put(`http://localhost:5000/users/${editingUser.id}`, {
        name,
        email,
      });
      setEditingUser(null);
    } else {
      await axios.post("http://localhost:5000/users", { name, email });
    }
    setName("");
    setEmail("");
    fetchUsers();
  };

  const handleEdit = (user) => {
    setEditingUser(user);
    setName(user.name);
    setEmail(user.email);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/users/${id}`);
    fetchUsers();
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>User Management</h1>

      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          style={styles.input}
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          style={styles.input}
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button style={styles.button} type="submit">
          {editingUser ? "Update User" : "Add User"}
        </button>
      </form>

      <ul style={styles.list}>
        {users.map((user) => (
          <li key={user.id} style={styles.listItem}>
            {user.name} - {user.email}
            <div>
              <button style={styles.editButton} onClick={() => handleEdit(user)}>
                Edit
              </button>
              <button style={styles.deleteButton} onClick={() => handleDelete(user.id)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "600px",
    margin: "50px auto",
    padding: "30px",
    backgroundColor: "#f9f9f9",
    borderRadius: "15px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#333",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    marginBottom: "20px",
  },
  input: {
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "16px",
  },
  button: {
    padding: "10px",
    borderRadius: "8px",
    background: "linear-gradient(45deg, #ff9a9e, #fad0c4)",
    border: "none",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  listItem: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px",
    borderBottom: "1px solid #ddd",
  },
  editButton: {
    padding: "5px 10px",
    marginRight: "5px",
    borderRadius: "5px",
    background: "linear-gradient(45deg, #f6d365, #fda085)",
    border: "none",
    color: "white",
    cursor: "pointer",
  },
  deleteButton: {
    padding: "5px 10px",
    borderRadius: "5px",
    background: "linear-gradient(45deg, #f5576c, #f093fb)",
    border: "none",
    color: "white",
    cursor: "pointer",
  },
};

export default UserManagement;

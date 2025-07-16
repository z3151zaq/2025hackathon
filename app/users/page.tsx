"use client";

import React, { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
  email: string;
}

const UsersList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [form, setForm] = useState<{ id?: number; name: string; email: string }>({ name: "", email: "" });
  const [editingId, setEditingId] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // 获取用户列表
  const fetchUsers = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/user");
      const data = await res.json();
      setUsers(data);
    } catch (err) {
      setError("获取用户失败");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // 新增或更新用户
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const method = editingId ? "PUT" : "POST";
      const res = await fetch("/api/user", {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editingId ? { ...form, id: editingId } : form),
      });
      const data = await res.json();
      if (res.ok) {
        setForm({ name: "", email: "" });
        setEditingId(null);
        fetchUsers();
      } else {
        setError(data.error || "操作失败");
      }
    } catch (err) {
      setError("操作失败");
    } finally {
      setLoading(false);
    }
  };

  // 删除用户
  const handleDelete = async (id: number) => {
    if (!window.confirm("确定要删除该学生吗？")) return;
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/user", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      const data = await res.json();
      if (res.ok) {
        fetchUsers();
      } else {
        setError(data.error || "删除失败");
      }
    } catch (err) {
      setError("删除失败");
    } finally {
      setLoading(false);
    }
  };

  // 编辑用户
  const handleEdit = (user: User) => {
    setForm({ name: user.name, email: user.email });
    setEditingId(user.id);
  };

  // 取消编辑
  const handleCancelEdit = () => {
    setForm({ name: "", email: "" });
    setEditingId(null);
  };

  return (
    <div style={{ maxWidth: 600, margin: "40px auto", padding: 24, background: "#fff", borderRadius: 8, boxShadow: "0 2px 8px #eee" }}>
      <h2 style={{ textAlign: "center" }}>学生管理</h2>
      <form onSubmit={handleSubmit} style={{ marginBottom: 24 }}>
        <div style={{ display: "flex", gap: 12, marginBottom: 8 }}>
          <input
            type="text"
            placeholder="姓名"
            value={form.name}
            onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
            required
            style={{ flex: 1, padding: 8 }}
          />
          <input
            type="email"
            placeholder="邮箱"
            value={form.email}
            onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
            required
            style={{ flex: 1, padding: 8 }}
          />
        </div>
        <div style={{ display: "flex", gap: 12 }}>
          <button type="submit" disabled={loading} style={{ padding: "8px 16px" }}>
            {editingId ? "更新学生" : "新增学生"}
          </button>
          {editingId && (
            <button type="button" onClick={handleCancelEdit} style={{ padding: "8px 16px" }}>
              取消编辑
            </button>
          )}
        </div>
      </form>
      {error && <div style={{ color: "red", marginBottom: 12 }}>{error}</div>}
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ background: "#f5f5f5" }}>
            <th style={{ padding: 8, border: "1px solid #eee" }}>ID</th>
            <th style={{ padding: 8, border: "1px solid #eee" }}>姓名</th>
            <th style={{ padding: 8, border: "1px solid #eee" }}>邮箱</th>
            <th style={{ padding: 8, border: "1px solid #eee" }}>操作</th>
          </tr>
        </thead>
        <tbody>
          {users.length === 0 ? (
            <tr>
              <td colSpan={4} style={{ textAlign: "center", padding: 16 }}>
                暂无学生
              </td>
            </tr>
          ) : (
            users.map(user => (
              <tr key={user.id}>
                <td style={{ padding: 8, border: "1px solid #eee" }}>{user.id}</td>
                <td style={{ padding: 8, border: "1px solid #eee" }}>{user.name}</td>
                <td style={{ padding: 8, border: "1px solid #eee" }}>{user.email}</td>
                <td style={{ padding: 8, border: "1px solid #eee" }}>
                  <button onClick={() => handleEdit(user)} style={{ marginRight: 8 }}>编辑</button>
                  <button onClick={() => handleDelete(user.id)} style={{ color: "red" }}>删除</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UsersList;
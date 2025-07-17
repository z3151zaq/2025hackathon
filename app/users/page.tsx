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
    <div className="container mx-auto max-w-4xl p-6">
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-2xl justify-center mb-6">学生管理</h2>
          
          <form onSubmit={handleSubmit} className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">姓名</span>
                </label>
                <input
                  type="text"
                  placeholder="请输入姓名"
                  value={form.name}
                  onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  required
                  className="input input-bordered w-full"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">邮箱</span>
                </label>
                <input
                  type="email"
                  placeholder="请输入邮箱"
                  value={form.email}
                  onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                  required
                  className="input input-bordered w-full"
                />
              </div>
            </div>
            
            <div className="flex gap-3">
              <button 
                type="submit" 
                disabled={loading} 
                className={`btn text-white bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 border-0 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 ${loading ? 'loading' : ''}`}
              >
                {editingId ? "更新学生" : "新增学生"}
              </button>
              {editingId && (
                <button 
                  type="button" 
                  onClick={handleCancelEdit} 
                  className="btn btn-ghost rounded-xl hover:bg-gray-100 transition-all duration-200"
                >
                  取消编辑
                </button>
              )}
            </div>
          </form>
          
          {error && (
            <div className="alert alert-error mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{error}</span>
            </div>
          )}
          
          <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>姓名</th>
                  <th>邮箱</th>
                  <th>操作</th>
                </tr>
              </thead>
              <tbody>
                {users.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="text-center py-8">
                      <div className="flex flex-col items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-base-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                        </svg>
                        <span className="text-base-content/60">暂无学生</span>
                      </div>
                    </td>
                  </tr>
                ) : (
                  users.map(user => (
                    <tr key={user.id}>
                      <td>{user.id}</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>
                        <div className="flex gap-2">
                          <button 
                            onClick={() => handleEdit(user)} 
                            className="btn btn-sm text-blue-700 bg-gradient-to-r from-blue-200/70 to-blue-300/70 border-blue-300 hover:from-blue-300/80 hover:to-blue-400/80 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                          >
                            编辑
                          </button>
                          <button 
                            onClick={() => handleDelete(user.id)} 
                            className="btn btn-sm text-red-700 bg-gradient-to-r from-red-200/70 to-red-300/70 border-red-300 hover:from-red-300/80 hover:to-red-400/80 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                          >
                            删除
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersList;
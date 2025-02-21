import React, { useState, useEffect } from 'react';
import { User, Lock, MessageSquare } from 'lucide-react';

interface LoginResponse {
  token: string | null;
  name: string;
  firstName: string | null;
  lastName: string | null;
  surname: string | null;
  validTo: string | null;
  valid: boolean;
  groups: string[];
}

function Login({ onLogin }: { onLogin: (isValid: boolean, userData?: LoginResponse) => void }) {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const apiUrl = import.meta.env.VITE_LOGIN_API_URL;

  useEffect(() => {
    setName('');
    setPassword('');
    setError('');
    console.log('Environment Variables:', import.meta.env); // Debugging line
    console.log('Environment Variables:', apiUrl); // Debugging line
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch(`${apiUrl}/auth`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, password }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data: LoginResponse = await response.json();

      if (data.valid) {
        // Save session data
        localStorage.setItem('userSession', JSON.stringify(data));
        const authHeader = response.headers.get('Authorization');
        if (authHeader) {
          sessionStorage.setItem('authToken', authHeader);
        }
        onLogin(true, data);
      } else {
        setError(data.name || 'Invalid credentials');
        onLogin(false);
      }
    } catch (error: any) {
      setError(error.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#1f1f1f] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <div className="w-full h-20 flex items-center justify-center mx-auto mb-4">
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 100L150 150L100 200L50 150Z" stroke="#000" strokeWidth="2" fill="none"/>
              <path d="M100 100L150 50L200 100L150 150Z" stroke="#000" strokeWidth="2" fill="none"/>
              <path d="M100 100L50 50L100 0L50 150Z" stroke="#000" strokeWidth="2" fill="none"/>
              <path d="M100 100L150 150L200 100L150 50Z" stroke="#000" strokeWidth="2" fill="none"/>
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">Welcome back</h1>
          <p className="text-gray-400">Sign in to continue to Chat</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-[#2f2f2f] rounded-lg p-6 space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">
              Name
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 bg-[#1f1f1f] border border-[#444] rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-[#444791] focus:ring-1 focus:ring-[#444791]"
                placeholder="Enter your name"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-400 mb-1">
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 bg-[#1f1f1f] border border-[#444] rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-[#444791] focus:ring-1 focus:ring-[#444791]"
                placeholder="Enter your password"
                required
              />
            </div>
          </div>

          <div className="flex items-center justify-end">
            <div className="text-sm">
              <a href="#" className="text-[#444791] hover:text-[#5557a5]">
                Forgot password?
              </a>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#444791] text-white py-2 px-4 rounded-md hover:bg-[#5557a5] focus:outline-none focus:ring-2 focus:ring-[#444791] focus:ring-offset-2 focus:ring-offset-[#2f2f2f] transition-colors"
            disabled={loading}
          >
            {loading ? 'Signing in...' : 'Sign in'}
          </button>

          {error && <div className="text-red-500 text-sm">{error}</div>}

          <div className="text-center mt-4 text-sm text-gray-400">
            Don't have an account?{' '}
            <a href="#" className="text-[#444791] hover:text-[#5557a5]">
              Sign up
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;

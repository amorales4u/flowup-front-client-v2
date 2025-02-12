import React, { useState } from 'react';
import { Mail, Lock, MessageSquare } from 'lucide-react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="min-h-screen bg-[#1f1f1f] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <div className="w-12 h-12 bg-[#444791] rounded-md flex items-center justify-center mx-auto mb-4">
            <MessageSquare className="text-white" size={24} />
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">Welcome back</h1>
          <p className="text-gray-400">Sign in to continue to Chat</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-[#2f2f2f] rounded-lg p-6 space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
              Email Address
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 bg-[#1f1f1f] border border-[#444] rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-[#444791] focus:ring-1 focus:ring-[#444791]"
                placeholder="Enter your email"
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

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                type="checkbox"
                className="h-4 w-4 bg-[#1f1f1f] border-[#444] rounded text-[#444791] focus:ring-[#444791] focus:ring-offset-0"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-400">
                Remember me
              </label>
            </div>
            <div className="text-sm">
              <a href="#" className="text-[#444791] hover:text-[#5557a5]">
                Forgot password?
              </a>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#444791] text-white py-2 px-4 rounded-md hover:bg-[#5557a5] focus:outline-none focus:ring-2 focus:ring-[#444791] focus:ring-offset-2 focus:ring-offset-[#2f2f2f] transition-colors"
          >
            Sign in
          </button>

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

import React, { useState } from 'react'
import { useContext } from 'react';
import { AppContext } from '../Context/AppContext.jsx';
function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const [error, setError] = useState('');

    const { validateLogin } = useContext(AppContext);
    
     const handleSubmit = (e) =>{
         e.preventDefault();
         const success = validateLogin(username, password);
         if (!success) {
             setError("Invalid username or password");
         } else {
             setError('');
         }


    
     };

        return (
            <main className="flex items-center justify-center w-full px-4 mt-30">
                <form onSubmit={handleSubmit} className="flex w-full flex-col max-w-96">

                    <a href="https://prebuiltui.com" className="mb-8" title="Go to PrebuiltUI">
                        <svg className="size-10" width="30" height="33" viewBox="0 0 30 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="m8 4.55 6.75 3.884 6.75-3.885M8 27.83v-7.755L1.25 16.19m27 0-6.75 3.885v7.754M1.655 8.658l13.095 7.546 13.095-7.546M14.75 31.25V16.189m13.5 5.976V10.212a2.98 2.98 0 0 0-1.5-2.585L16.25 1.65a3.01 3.01 0 0 0-3 0L2.75 7.627a3 3 0 0 0-1.5 2.585v11.953a2.98 2.98 0 0 0 1.5 2.585l10.5 5.977a3.01 3.01 0 0 0 3 0l10.5-5.977a3 3 0 0 0 1.5-2.585"
                                stroke="#1d293d" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>

                    <h2 className="text-4xl font-medium text-gray-900">Sign in</h2>

                    <p className="mt-4 text-base text-gray-500/90">
                        Please enter username and password to access.
                    </p>
                    {error && <p className="mt-2 text-sm text-red-600">{error}</p>}

                    <div className="mt-10">
                        <label className="font-medium">username</label>
                        <input
                            placeholder="Please enter your username"
                            className="mt-2 rounded-md ring ring-gray-200 focus:ring-2 focus:ring-indigo-600 outline-none px-3 py-3 w-full"
                            required
                            type="text"
                            name="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>

                    <div className="mt-6">
                        <label className="font-medium">Password</label>
                        <input
                            placeholder="Please enter your password"
                            className="mt-2 rounded-md ring ring-gray-200 focus:ring-2 focus:ring-indigo-600 outline-none px-3 py-3 w-full"
                            required
                            type="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <button
                        type="submit"
                        className="mt-8 py-3 w-full cursor-pointer rounded-md bg-indigo-600 text-white transition hover:bg-indigo-700"
                    >
                        Login
                    </button>

                </form>
            </main>
        );
    };



export default Login
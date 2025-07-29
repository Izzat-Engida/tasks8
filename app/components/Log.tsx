'use client';

import { signOut } from 'next-auth/react';
import { useState } from 'react';
export default function LogoutButton() {
  return (
    <div>
 <button
      onClick={() => signOut({ callbackUrl: '/' })}
      className="text-white bg-red-600 px-4 py-2 rounded"
    >
      Logout
    </button>
    </div>
   
  );
}

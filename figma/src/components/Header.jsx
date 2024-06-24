import React from 'react';

function Header() {
  return (
    <header className="relative w-full h-[440px] bg-cover bg-center" style={{ 
      backgroundImage: 'url("https://images.unsplash.com/photo-1717379026834-d36e707f4d24?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")'
    }}>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col">
        <h1 className="text-white text-4xl font-bold mt-[300px] ml-[200px]">Computer Engineering</h1>
        <p className="text-white text-lg ml-[200px]">142,765 Computer Engineers follow this</p>
      </div>
    </header>
  );
}

export default Header;

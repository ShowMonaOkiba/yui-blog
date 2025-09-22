// Fix: Add JSX namespace declaration to allow using the deprecated <marquee> element for its retro aesthetic.
// This resolves the TypeScript error for an unrecognized HTML element.
declare namespace JSX {
  interface IntrinsicElements {
    marquee: React.DetailedHTMLProps<React.HTMLAttributes<HTMLMarqueeElement>, HTMLMarqueeElement>;
  }
}

import React, { useState, useEffect } from 'react';
import { profileData, blogData, galleryData } from './data/content';
import { ProfileData, BlogPost, GalleryImage, View } from './types';
import NavButton from './components/NavButton';

// Base64 encoded SVG for a seamless retro tile background pattern
const bgPattern = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCI+PHJlY3Qgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBmaWxsPSIjZTVmNWZmIi8+PHJlY3QgeD0iNSIgeT0iNSIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU5LDAuMikiIHN0cm9rZT0icmdiYSgxODAsMjIwLDI1NSwwLjQpIiBzdHJva2Utd2lkdGg9IjEiLz48L3N2Zz4=';

// --- Content View Components (defined outside App to prevent re-creation on re-renders) ---

const ProfileView: React.FC<{ data: ProfileData }> = ({ data }) => (
  <div className="bg-white/70 backdrop-blur-sm p-6 rounded-lg border-2 border-white/50 shadow-lg flex flex-col sm:flex-row items-center gap-6">
    <img src={data.avatar} alt="Yui.exe's avatar" className="w-32 h-32 rounded-full border-4 border-purple-300 shadow-md" />
    <div className="text-center sm:text-left">
      <h2 className="text-2xl font-bold text-purple-700 mb-2">{data.name}</h2>
      {data.introduction.map((p, i) => (
        <p key={i} className="text-gray-800 mb-1">{p}</p>
      ))}
    </div>
  </div>
);

const GalleryView: React.FC<{ images: GalleryImage[] }> = ({ images }) => (
  <div className="bg-white/70 backdrop-blur-sm p-6 rounded-lg border-2 border-white/50 shadow-lg">
    <h2 className="text-2xl font-bold text-center text-purple-700 mb-4 border-b-2 border-purple-200 pb-2">Gallery</h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {images.map((img) => (
        <div key={img.id} className="text-center p-2 bg-purple-50 rounded border border-purple-200 shadow-sm">
          <img src={img.src} alt={img.title} className="w-full h-auto border-2 border-purple-300 mb-2" />
          <h3 className="font-bold text-sm text-purple-800">{img.title}</h3>
          <p className="text-xs text-gray-600">{img.description}</p>
        </div>
      ))}
    </div>
  </div>
);

const BlogView: React.FC<{ posts: BlogPost[] }> = ({ posts }) => (
  <div className="bg-white/70 backdrop-blur-sm p-6 rounded-lg border-2 border-white/50 shadow-lg space-y-6">
    <h2 className="text-2xl font-bold text-center text-purple-700 mb-4 border-b-2 border-purple-200 pb-2">Blog Diary</h2>
    {posts.map((post) => (
      <div key={post.id} className="bg-white/80 p-4 rounded-md border border-purple-200">
        <h3 className="text-xl font-bold text-purple-800">{post.title}</h3>
        <p className="text-sm text-gray-500 mb-3">{post.date}</p>
        <div className="space-y-3 text-gray-800">
          {post.body.map((item, index) => {
            if (item.type === 'text') {
              return <p key={index}>{item.content}</p>;
            }
            if (item.type === 'image') {
              return <img key={index} src={item.content} alt={item.alt || 'Blog image'} className="mx-auto rounded-md border-2 border-purple-200" />;
            }
            return null;
          })}
        </div>
      </div>
    ))}
  </div>
);

// --- Main App Component ---

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<View>('profile');
  const [visitorCount, setVisitorCount] = useState<number>(0);

  useEffect(() => {
    // Fake visitor counter for that retro feel
    setVisitorCount(328 + Math.floor(Math.random() * 100));
  }, []);

  const renderContent = () => {
    switch (activeView) {
      case 'profile':
        return <ProfileView data={profileData} />;
      case 'gallery':
        return <GalleryView images={galleryData} />;
      case 'blog':
        return <BlogView posts={blogData} />;
      default:
        return <ProfileView data={profileData} />;
    }
  };
  
  // Envelope SVG Icon
  const MailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 20 20" fill="currentColor">
      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
    </svg>
  );

  return (
    <div 
      className="min-h-screen w-full text-gray-800 p-4" 
      style={{ 
        backgroundImage: `url('${bgPattern}')`,
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="max-w-4xl mx-auto space-y-4">
        {/* Header */}
        <header className="text-center py-2 bg-blue-100/80 border-4 border-red-500">
          <h1 className="text-4xl font-bold text-blue-700" style={{ textShadow: '2px 2px #fff' }}>
            ようこそ Yui.exe の秘密基地へ
          </h1>
        </header>

        {/* Marquee and Visitor Counter */}
        <div className="bg-white/50 p-2 rounded-md text-center text-sm text-red-600 font-semibold">
           <marquee behavior="scroll" direction="left">ゆっくりしていってね！...キリ番GET者はBBSへGO!...相互リンク募集中です...</marquee>
          <p>あなたは <span className="text-lg text-red-700">{visitorCount}</span> 番目のお客様です！</p>
        </div>

        {/* Navigation */}
        <nav className="text-center p-4 space-x-2 sm:space-x-4">
          <span className="text-lg font-bold text-blue-800 mr-2">メニュー:</span>
          <NavButton label="プロフィール" color="blue" onClick={() => setActiveView('profile')} isActive={activeView === 'profile'} />
          <NavButton label="ギャラリー" color="purple" onClick={() => setActiveView('gallery')} isActive={activeView === 'gallery'} />
          <NavButton label="日記" color="green" onClick={() => setActiveView('blog')} isActive={activeView === 'blog'} />
        </nav>

        {/* Main Content */}
        <main>
          {renderContent()}
        </main>
        
        {/* Retro Decorative Elements */}
        <div className="flex flex-col items-center space-y-4 text-center mt-6">
            <div className="flex items-center gap-4">
                <img src="https://assets.website-files.com/6182c3c54853036248507a3c/6182c3c54853036494507a72_honda-fit-car-png-25.png" alt="Yellow Car" className="w-32 h-auto" />
                <p className="font-semibold text-blue-800">愛車はホンダFitです</p>
            </div>
            <p className="font-bold text-blue-600 text-lg">
                <span className="text-yellow-500">★</span>★相互リンク募集中です！<span className="text-yellow-500">★</span>★
                <span className="text-red-600 ml-4">※無断リンクは禁止です！！</span>
            </p>

            <div className="flex items-end gap-6 pt-4">
                <div className="relative w-40 h-40">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-300 to-blue-300 rounded-full transform -rotate-45"></div>
                  <img src="https://i.pinimg.com/originals/59/54/b4/5954b408c66525b491040a6318357833.jpg" alt="A cute cat" className="w-full h-full object-cover rounded-full border-4 border-white shadow-xl relative"/>
                </div>
                <div className="p-2 bg-gradient-to-br from-orange-300 to-yellow-300 rounded-lg border-2 border-orange-500/80 border-t-white/50 border-l-white/50 shadow-md hover:opacity-80 transition-opacity cursor-pointer">
                  <MailIcon />
                </div>
            </div>
        </div>

        {/* Footer */}
        <footer className="text-center mt-6 p-2 text-sm text-blue-800 font-semibold">
          <p>1クリックで救える命があります。みなさんクリックをお願いします！</p>
          <p className="mt-2 text-xs">&copy; 2004 Yui.exe All Rights Reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;

import React from 'react'
import './index.css'

function App() {
  return (
    <div className="glass-card">
      <header>
        <h1 className="gradient-text">김도현</h1>
        <p className="subtitle">Frontend Developer <span className="badge">멋쟁이사자처럼 14기</span></p>
      </header>
      
      <main className="profile-info">
        <div className="info-item">
          <span className="label">Age</span>
          <span className="value">24 Years</span>
        </div>
        
        <div className="info-item">
          <span className="label">Focus</span>
          <span className="value">Compact & Modern UI/UX</span>
        </div>
        
        <div className="info-item">
          <span className="label">Tech Stack</span>
          <div className="value">
            <span className="skill-tag">React</span>
            <span className="skill-tag">JavaScript</span>
            <span className="skill-tag">CSS</span>
          </div>
        </div>

        <div className="info-item" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '0.5rem' }}>
          <span className="label">Introduction</span>
          <span className="value" style={{ fontSize: '0.95rem', lineHeight: '1.6', fontWeight: '400', color: 'var(--text-secondary)' }}>
            안녕하세요! 멋쟁이사자처럼 14기에서 활동 중인 프론트엔드 개발자 김도현입니다. 
            React를 기반으로 직관적이고 깔끔한 사용자 경험을 설계하는 것에 관심이 많습니다.
          </span>
        </div>
      </main>

      <footer className="footer">
        © 2026 Kim Do-hyun. Built with React & Vite.
      </footer>
    </div>
  )
}

export default App

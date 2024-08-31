import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          あべあやねのポートフォリオ<br />
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <h1>Introduction</h1>
      <div>
        はじめまして　あべあやねと申します。<br />
        現在慶應義塾大学に在学しながらポーランドでダブルディグリーを目指している修士1年生です。<br/>
        <br />
        こちらのポートフォリオサイトには自身の経歴やスキルをまとめていますので、<br />
        ぜひご覧になって興味を持っていただけると幸いです。
        <br />
      </div>
      <h2>Profile</h2>
      <div>
        名前：あべあやね<br />
        出身：広島（都内在住）<br />
        学歴：慶應義塾大学理工学部機械工学科/Warsaw University of Technorogy<br />
        GitHub:<a href=
      </div>
    </div>
  );
}

export default App;

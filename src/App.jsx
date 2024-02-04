
import { useEffect, useMemo, useState } from "react";
import "./app.css"; // Import the CSS file
import Timer from "./components/Timer";


import Trivia from "./components/Trivia";
function App() {
  const[questionNumber,setQuestionNumber]=useState(1);
  const [stop, setStop] = useState(false);
 const [earned, setEarned] = useState("$ 0");

  const data = [
    {
      id: 1,
      question: "kya sab log chcahte hai ki shubham ki gaand marne se land or kala hjayega?",
      answers: [
        {
          text: "kyun nhi !! par mera to pehle se hi kaala hai",
          correct: true,
        },
        {
          text: "mere naam chutttu hai mere pass to chut hai",
          correct: true,
        },
        {
          text: "nilandiskc se pass disck hoti hai knd nhi smjhe to mai bhar hu ",
          correct: true,
        },
        {
          text: "chal na lode",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "chuuuttttuu kitna  bada  randi or banakaloda hai  ?",
      answers: [
        {
          text: "macchar ki lulli hai chuutu",
          correct: true,
        },
        {
          text: "suar ki jhaat hai chuuutu",
          correct: false,
        },
        {
          text: "kution me kutiya hai chuuuuututututututu ",
          correct: false,
        },
        {
          text: "chhhhhhuuuuuuu sabko gand dene vala randi hai ",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "nilandisck ki gand ke uper shi jawab dijiiye?",
      answers: [
        {
          text: "uski gaand ka moment of inertia usse hi poochna na maderchod nilandisk",
          correct: false,
        },
        {
          text: "uski gand me disck bachpan me daali gyi thi ya clg m aane ke baad",
          correct: false,
        },
        {
          text: "dusck ka size kitna hai approx",
          correct: false,
        },
        {
          text: "niladnidisk aaj Mr arun ko gand dega",
          correct: true,
        },
      ],
    },
    {
      id: 6,
      question: "anubhav hamara neta hai sabko gand deta hai iss me sab kon hai ?",
      answers: [
        {
          text: "praksh randi ki jhaat ",
          correct: false,
        },
        {
          text: "randi khane pe jaake gand deta hai ",
          correct: true,
        },
        {
          text: "ya ghar bhulake sabko gand deta hai",
          correct: false,
        },
        {
          text: "iss ke alawa mai kuch soch nhi para mc ",
          correct: false,
        },
      ],
    },
    {
    id: 7,
    question: "kya vipul clg ki zindagi khtm hote hote apni bangalan ko propose karpayenge ?",
    answers: [
      {
        text: "iss randi ke bass ki bbaat nhi hai ",
        correct: false,
      },
      {
        text: "londa heera hai khtaa kheera hai iss option ka question se lene dena nhi hai to gandu or option padna behenkelode ",
        correct: true,
      },
      {
        text: "vipul se pehle koi or lejayega usse",
        correct: false,
      },
      {
        text: "☝🏻 middle finger milii nhi to ye vali daaldi chal gand mara ab ",
        correct: false,
      },
    ],
  },
  ];
  const moneyPyramid= useMemo(()=>
    [ 
      {id:1,amount:"$ 100"},
      {id:2,amount:"$ 200"},
      {id:3,amount:"$ 300"},
      {id:4,amount:"$ 500"},
      {id:5,amount:"$ 1000"},
      {id:6,amount:"$ 2000"},
      {id:7,amount:"$ 4000"},
      {id:8,amount:"$ 8000"},
      {id:9,amount:"$ 16000"},
      {id:10,amount:"$ 32000"},
      {id:11,amount:"$ 64000"},
      {id:12,amount:"$ 125000"},
      {id:13,amount:"$ 250000"},
      {id:14,amount:"$ 500000"},
      {id:15,amount:"$ 1000000"},
      
    ].reverse(),
  []) ;
  useEffect(()=>{
questionNumber > 1 && setEarned(moneyPyramid.find(m=>m.id===questionNumber-1).amount);
  },[moneyPyramid,questionNumber])
  return (
    <div className="app">
      <div className="main">
{stop? ( 
<h1 className="endText">You earned: {earned}</h1>
 ): (
 
  <>
        <div className="top">
          <div className="timer">
            <Timer setStop={setStop} questionNumber={questionNumber}/>
          </div>
        </div>
        <div className="bottom">
          <Trivia
          data={data}
          setStop={setStop}
          questionNumber={questionNumber}
          setQuestionNumber={setQuestionNumber}
          
          
          
          
          />
        
        
        </div></>
)}
      </div>
      <div className="pyramid">
      <ul className="moneyList">
        {moneyPyramid.map((m)=>(
        <li className={questionNumber===m.id ? "moneyListItem active" : "moneyListItem"}>
          <span className="moneyListItemNumber">{m.id}</span>
          <span className="moneyListItemAmount">{m.amount}</span>
          </li>
))}
      </ul>
      </div>
    </div> 
  );
}

export default App;

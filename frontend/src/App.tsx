import React from "react";
import { useEffect, useCallback, useState } from "react";
import logo from "./logo.svg";
import { useWebSocket } from "react-use-websocket/dist/lib/use-websocket";
import { ReadyState } from "react-use-websocket";
import "./App.css";
import MediaRecording from "./components/MediaRecording";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function App() {
  // const [socketUrl, setSocketUrl] = useState<string>(
  //   "ws://localhost:8000/translate/google"
  // );
  // const [messageHistory, setMessageHistory] = useState<any[]>([]);

  // const [message, setSendMessage] = useState<string>("start_feed");
  // const { sendMessage, lastMessage, readyState } = useWebSocket<any | null>(
  //   socketUrl
  // );

  // const API_URL: any = "ws://localhost:8000/translate/google";

  // websock.onopen = (_: any) => {
  //   setClientMessage(new Date().toString());
  //   websock.send("LOL!");
  // };

  // websock.onmessage = (event: any) => {
  //   setValue(event.data);
  // };

  // useEffect(() => {
  //   if (lastMessage !== null) {
  //     setMessageHistory((prev: any) => {
  //       prev = prev.concat(lastMessage);
  //       if (prev.length > 10) {
  //         prev = prev.slice(prev.length - 10, prev.length);
  //       }
  //       return prev;
  //     });
  //   }
  // }, [lastMessage, setMessageHistory]);

  // const handleClickChangeSocketUrl = useCallback(
  //   () => setSocketUrl("wss://demos.kaazing.com/echo"),
  //   []
  // );

  // const handleStart = useCallback(() => setSendMessage("start_feed"), []);
  // const handleStop = useCallback(() => setSendMessage("stop_feed"), []);

  // const connectionStatus = {
  //   [ReadyState.CONNECTING]: "Connecting",
  //   [ReadyState.OPEN]: "Open",
  //   [ReadyState.CLOSING]: "Closing",
  //   [ReadyState.CLOSED]: "Closed",
  //   [ReadyState.UNINSTANTIATED]: "Uninstantiated",
  // }[readyState];

  // useEffect(() => {
  //   sendMessage(message);
  // }, [message]);
  // // useEffect(() => {setInterval(() => {sendMessage(message)}, 100)}, [message === "start_feed"]);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     sendMessage("message");
  //   }, 100);
  //   return () => clearInterval(interval);
  // }, [message === "start_feed"]);
  // return (
  //   <>
  //     {/* <div>{value}</div>
  //     <div>{clientMessage}</div> */}
  //   </>
  // );

  return (
    <div>
      {/* <button onClick={handleClickChangeSocketUrl}>
        Click Me to change Socket Url
      </button>
      <button onClick={handleStart} disabled={readyState !== ReadyState.OPEN}>
        Click Me to Start the feed.
      </button>
      <button onClick={handleStop} disabled={readyState === ReadyState.CLOSED}>
        Click Me to Stop the feed.
      </button>
      <span>The WebSocket is currently {connectionStatus}</span>
      {lastMessage ? (
        <span>
          Last message: {lastMessage.data}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </span>
      ) : null}
      <ul>
        {messageHistory.map((message, idx) => (
          <span key={idx} className="px-3 py-2 shadow-lg m-2">
            {message ? message.data : null}
          </span>
        ))}
      </ul> */}
      <MediaRecording></MediaRecording>
    </div>
  );
}

export default App;

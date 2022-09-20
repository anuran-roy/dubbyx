import React, { useState, useEffect, useCallback } from "react";
import { useReactMediaRecorder } from "react-media-recorder";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MediaRecording() {
  const { status, startRecording, stopRecording, mediaBlobUrl } =
    useReactMediaRecorder({ audio: true });

  const [loopPlay, setLoopPlay] = useState<boolean>(false);
  const [autoPlay, setAutoPlay] = useState<boolean>(false);

  const changeLoopStatus = async (e: React.MouseEvent) => {
    setLoopPlay(!loopPlay);
  };

  const changeAutoplayStatus = async (e: React.MouseEvent) => {
    setAutoPlay(!autoPlay);
  };

  const downloadFileFromUrl = async (blobUrl: string | undefined) => {
    let audioBlob: Blob;
    if (blobUrl === undefined) {
      audioBlob = new Blob();
    } else {
      audioBlob = await fetch(blobUrl).then((r) => r.blob());
    }

    let fileName: string | undefined = blobUrl?.substring(
      blobUrl.lastIndexOf("/") + 1,
      blobUrl.length
    );
    const audioFile = new File([audioBlob], `${fileName}.wav`, {
      type: audioBlob.type,
    });

    return audioFile;
  };

  const submitForTranslation = async (e: React.MouseEvent) => {
      console.log(mediaBlobUrl);
      console.log("Sending axios request...");
      const headers = {
        "Access-Control-Allow-Origin": "http://localhost:3000",
      };

      let fileUpload = await downloadFileFromUrl(mediaBlobUrl);
      console.table(fileUpload);

      let formData = new FormData();

      formData.append("fileUpload", fileUpload);

      await fetch("http://localhost:8000/translate/indicnlp", {
        method: "POST",
        body: formData
      })
        .then((response) => {
          console.log(response.json());
          toast.success("Successfull uploaded audio!");
        })
        .catch(err => {
            toast.error("An exception occured.");
            console.error(err);
        });
      console.log("Axios request sent!");
  };

  return (
    <div className="rounded-full w-50 text-center flex flex-col objects-center content-center items-center">
      <ToastContainer />
      <form
        action=""
        onSubmit={(e: React.FormEvent) => {
          e.preventDefault();
        }}
        className="rounded-full w-50 border-2 p-5 my-5 mx-3 text-center flex flex-col objects-center content-center items-center"
      >
        <p className="font-bold">Recorder Status: {status}</p>
        <div id="buttons" className="px-5 py-3 my-5 mx-3">
          <button
            className="px-5 py-3 m-3 rounded-md font-bold bg-teal-500 text-white hover:text-teal-700 hover:bg-white shadow-lg"
            onClick={startRecording}
          >
            Start Recording
          </button>
          <button
            className="px-5 py-3 m-3 rounded-md font-bold bg-red-500 text-white hover:text-red-700 hover:bg-white shadow-lg"
            onClick={stopRecording}
          >
            Stop Recording
          </button>
        </div>
        <div id="extraControls gap-2">
          <div id="loopControl">
            <label htmlFor="loopControlButton">Loop?</label>
            <input
              type="checkbox"
              id="loopControlButton"
              className="px-5 py-3 m-3 rounded-md font-bold bg-red-500 text-white hover:text-red-700 hover:bg-white shadow-lg"
              defaultChecked={loopPlay}
              onClick={changeLoopStatus}
            ></input>
          </div>
          <div id="autoplayControls">
            <label htmlFor="autoplayControlButton">Autoplay?</label>
            <input
              type="checkbox"
              id="autoplayControlButton"
              className="px-5 py-3 m-3 rounded-md font-bold bg-red-500 text-white hover:text-red-700 hover:bg-white shadow-lg"
              defaultChecked={autoPlay}
              onClick={changeAutoplayStatus}
            ></input>
          </div>
        </div>
        <audio
          src={mediaBlobUrl}
          controls
          autoPlay
          loop={loopPlay}
          className="px-5 py-3"
        />
        <button
          type="submit"
          onClick={submitForTranslation}
          className="bg-sky-500 text-white hover:bg-sky-700 font-bold px-5 py-3 my-5 mx-3 rounded-md shadow-lg"
        >
          Translate!
        </button>
      </form>
    </div>
  );
}

export default MediaRecording;

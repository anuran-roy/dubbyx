from fastapi import FastAPI, WebSocket, File, UploadFile, Form
from fastapi.middleware.cors import CORSMiddleware
from scripts.google_api import request_google_translate
from scripts.indic_nlp import request_indicnlp_translate
import time
import asyncio
import random
from typing import Any
from pydantic import BaseModel
from io import BytesIO
from pydub import AudioSegment
from pydub.playback import play
from playsound import playsound

app = FastAPI()

origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost:3000",
    "http://localhost:8080",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class FileUpload(BaseModel):
    fileUpload: str


# class DummyGenerator:
#     def __iter__(self):
#         return self
#     def __next__(self):
#         return random.randint(0,10000)


def dummyNumber():
    return random.randint(0, 10000)


@app.websocket("/translate/google")
async def google_transcribe(ws: WebSocket):
    # obj = DummyGenerator()
    await ws.accept()

    while (await ws.receive())["text"] == "start_feed":
        print("WebSocket data received")
        printable = dummyNumber()
        print(printable)
        await ws.send_text(f"{printable}")
    print("WebSocket CLOSING")
    await ws.close()


@app.post("/translate/indicnlp")
async def indicnlp_translate(fileUpload: UploadFile):
    print("Data received!")
    print(fileUpload.__dict__)

    in_memory_file = BytesIO(fileUpload.file.read())
    
    with open("hello.wav", "wb") as out_file:
        out_file.write(in_memory_file.read())    
    # song = AudioSegment.from_file("hello.wav", format="wav")
    # play(song)
    playsound("./hello.wav")
    return {"message": "File received!"}


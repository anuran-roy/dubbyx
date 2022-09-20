---
title: 'DubbyX Abstract Template'
disqus: hackmd
---

DubbyX
===

## Table of Contents

[TOC]

## Abstract

\
![DubbyX logo](https://see.fontimg.com/api/renderfont4/Zxzz/eyJyIjoiZnMiLCJoIjo2OSwidyI6MTAwMCwiZnMiOjY5LCJmZ2MiOiIjQTYyMTIxIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/RHViYnlY/auto-swag-regular.png) 
\
\
DubbyX is a highly easy-to-use, wearable device that simplifies communication between people of different languages in near real-time, thus overcoming cultural barriers that might hinder exchange of information and hinder interaction.

DubbyX tries to mimic natural human interaction as much as possible, even in scenarios when the language used by the people in the conversation might be variable, changing constantly (say a meeting with people speaking different dialects.)

DubbyX uses the State-of-the-Art Google Cloud Speech Detection and Synthesis APIs on the fly for translating between languages. We will soon try to add IndicBERT and IndicNLP for directly translating interoperability among Indian Languages, so that we can reduce our dependence on English as a common medium.

## Requirements

- A stable internet connection
- Clear voice input

## Planned Development Requirements

- Raspberry Pi running CentOS with Python installed
- SIM Card and/or Wifi slots
- FastAPI based web-app for translation through websocket input using IndicNLP and/or Google Cloud APIs.
- Perceptive touch sensors to activate the translator.

User flows (UX)
---

### Type 1 (Languages are set by default):

```sequence
Alice->Bob: Languages set - (English, Tamil)
Note left of Alice:
Bob -> Alice: Languages set - (Tamil, English)
Note right of Bob:
Alice->Bob: Hello Bob, how are you?
Note right of Bob: Bob hears "வணக்கம் பாப், எப்படி இருக்கிறீர்கள்"
Bob->Alice: நான் நலமாய் இருக்கிறேன், நன்றி!
Note left of Alice: Alice hears "I am good thanks!"
```

### Type 2 (Languages may change):

```sequence
Note left of Alice: Languages - Variable, Variable
Alice->Bob: হ্যালো বব, কেমন আছেন? (Bengali for "Hello Bob, how are you?")
Note right of Bob: Detected: Alice - Bengali
Bob->Alice: நீங்கள் என்ன சொல்கிறீர்கள்? (Tamil for "What do you mean?")
Note left of Alice: Detected: Bob - Tamil
Alice-->Bob: Set languages as (Bengali, Tamil)
Note right of Bob:
Bob-->Alice: Set languages as (Tamil, Bengali)
Note left of Alice:
Alice->Bob: "வணக்கம் பாப், எப்படி இருக்கிறீர்கள்?" (Translated to Tamil for "Hello Bob, how are you?")
Note right of Bob: Bob says "நான் நலமாய் இருக்கிறேன், நன்றி!"
Bob->Alice: আমি ভাল আছি ধন্যবাদ! (Translated into Bengali for "I am good thanks!")
```



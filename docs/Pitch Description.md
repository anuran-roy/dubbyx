*<mark>Name of Project</mark>:* DubbyX
*<mark>Team Members</mark>*: Anuran Roy (20BCT0343), Aditya Singh Rawat (20BCT0349), Aayush Goswami (20BCT0341), Vedant Singh (20BCT0206)

----

## Title of project

DubbyX - The smart translator watch we all need.

## Objectives

Bridge the gap between different language-speaking communities (especially in India) by providing an automated, smooth user experience having accurate translation of speech, using State-Of-The-Art models - both offline and online.

## Summary of the project

1. ### Background of work
   
   - In a diverse country like India, there is a plethora of languages, as well as communities speaking them.
   
   - As a result, often communication between people might get hampered, especially in offline areas where internet connectivity is not stable enough to use online translation tools.

2. ### Research questions
   
   - Cost of the hardware and software requirements, including, but not limited to:
     
     - Embedded platform (Arduino, BeagleBoard or Raspberry Pi)
     
     - Disk size of offline translator models
     
     - Speaker, microphone and battery charges
     
     - Usage cost of third-party services (if any)
   
   - Cost of miniaturizing and accesorizing the instrument, including but not limited to:
     
     - Protective container to put the device into
     
     - Strap for wearing it on hand
     
     - Touch-sensitive display for user interaction
     
     - Buttons for custom user interaction
   
   - Accuracy of translation models - the accuracy of each language model varies from language to language.

3. ### Methodology
   
   - We devised a generic workflow that can detect languages on the fly, thus facilitating seamless conversations.
   
   - The details can be summarized from the flow sequence diagram below:

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

Additionally, in case two people speak in a fixed set of languages throughout the conversation, the latency for translation can be decreased by adopting the following (faster but less flexible) workflow:

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

## Proposed Outcome

A seamless means of smooth communication between people speaking different languages without the need for translator (or even in many cases, the Internet.)

## Reason for concluding the proposed outcome

## Proposed project

1. ### Novelty of proposed project
   
   - The pre-existing products in the market mostly need to get a predefined source and target language set.
   
   - In real world scenario, people may often switch between a set of 2-3 languages in the middle of the conversation,
     depending on their vocabulary and the relevant word that strikes their mind first.
   
   - DubbyX can detect these languages on the fly, and switch translation accordingly.

2. ### Relevance of proposed project to public
   
   - In a diverse country like India, there is a plethora of languages spoken by a diverse range of communities.
   
   - Often, the language barrier proves to be obstructive, especially in the area of [**communication-critical domains like healthcare**](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7201401/).
   
   - **DubbyX** can bridge the aforementioned communication gap by providing near real-time translation capabilities with near State-of-the-Art accuracy.

3. ### Relative importance of proposed project.

4. ### Applicability of the project
   
   - In diverse communities/regions, there are different dialects coexisting together.
   
   - Bridging the language barrier will allow for more interaction between different communities, which will lead to increased information exchange.

5. ### Gap identified
   
   Linguistic differences between different communities that hinders communication, which might cause delay in critical scenarios that require sensitive and timely actions.

## Detailed project plan

We initially make a conceptual design of the prsmall chip-sized speakeroduct, as a wrist band that can understand gestures and motions through a touch-sensitive screen. **Aditya** will create the 3D Model of the model that will present a 360$\degree$ view of the accessory.

The translator will contain a portable micro computer in it (Raspberry Pi/BeagleBoard running Ubuntu OS) that will have the server running inside of it. The server to be built by **Anuran** will be on top of Python, containing services that will access State-of-the-art AI-based translation models that will provide near real-time, accurate translations for input audio.

The band will consist of a **small chip-sized microphone** attached near the side facing the chest of the speaker to reduce noise in the incoming audio, due to proximity to the mouth (the most common audio source.) There will also be a **small chip-sized speaker** attached to the other side, for increased proximity to the ear of the listener.

Other secondary features may include audio jack, or other form of connectivity that can streamline input further.

The band will consist of a small touch-sensitive display that will receive gestures and touch from the user as a form of input. On a specific gesture (say a double tap with both fingers), the translator server is activated and starts listening. With every pause, the output is played through the speaker in the translated language.

The cost documentation will be prepared by **Aayush** containing the prices of the hardware, as well as the cost in assembling a prototype, including and excluding overhead expenses.

## Future Enhancements

- App Integration with other IoT and digital devices

- Improving the translation accuracy for the different AI models

- Lowering the output latency by optimizing resources further

import { Button, Typography } from "@mui/material";
import React, { useState, useRef, useEffect } from "react";

const AudioRecorder = () => {
  const [recording, setRecording] = useState(false);
  const [audioBlob, setAudioBlob] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [transcript, setTranscript] = useState(null);
  const [transcriptAll, setTranscriptAll] = useState(null);
  const [speaker1, setSpeaker1] = useState();
  const [speaker2, setSpeaker2] = useState();
  const mediaRecorderRef = useRef(null);
  const audioRef = useRef(null);

  const startRecording = () => {
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        const mediaRecorder = new MediaRecorder(stream);
        mediaRecorderRef.current = mediaRecorder;

        const chunks = [];
        mediaRecorder.ondataavailable = (e) => chunks.push(e.data);
        mediaRecorder.onstop = () => {
          const blob = new Blob(chunks, { type: "audio/wav" });
          setAudioBlob(blob);
          chunks.length = 0;
        };

        mediaRecorder.start();
        setRecording(true);
      })
      .catch((error) => {
        console.error("Error accessing microphone:", error);
      });
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && recording) {
      mediaRecorderRef.current.stop();
      setRecording(false);
    }
  };

  const handleUpload = () => {
    if (audioBlob) {
      const formData = new FormData();
      formData.append("file", audioBlob);

      const xhr = new XMLHttpRequest();
      xhr.open("POST", "https://testrepo.nextsolutions.in/STTupload");

      xhr.upload.addEventListener("progress", (event) => {
        const progress = Math.round((event.loaded / event.total) * 100);
        setUploadProgress(progress);
      });

      xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            if (data.transcript) {
              console.log("Transcript:", data);
              setTranscriptAll(data);
              setTranscript(data.transcript);
            }
          } else {
            console.error("Upload failed:", xhr.status);
          }
          setUploadProgress(0);
        }
      };

      xhr.send(formData);
    }
  };

  useEffect(() => {
    console.log(transcriptAll, "here it is");
    if (transcriptAll && transcriptAll.full_transcript) {
      setSpeaker1(transcriptAll.full_transcript.utterances[0]);
      setSpeaker2(transcriptAll.full_transcript.utterances[1]);
    }
  }, [transcriptAll]);

  return (
    <div style={{ padding: "10px" }}>
      <Button
        variant="contained"
        color="primary"
        onClick={startRecording}
        disabled={recording}
      >
        Start Recording
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={stopRecording}
        disabled={!recording}
      >
        Stop Recording
      </Button>

      <Button
        variant="contained"
        color="primary"
        onClick={handleUpload}
        disabled={!audioBlob || uploadProgress > 0}
      >
        Upload Audio
      </Button>
      {uploadProgress > 0 && <div>Upload Progress: {uploadProgress}%</div>}
      {transcript && <Typography variant="h3"> {transcript} </Typography>}
      {speaker1 && (
        <Typography variant="h4">
          {" "}
          Speaker 1: {speaker1.speaker} said: {speaker1.text}{" "}
        </Typography>
      )}
      {speaker2 && (
        <Typography variant="h4">
          {" "}
          Speaker 2: {speaker2.speaker} said: {speaker2.text}{" "}
        </Typography>
      )}
    </div>
  );
};

export default AudioRecorder;

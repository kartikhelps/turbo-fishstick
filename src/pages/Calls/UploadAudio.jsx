import { Button, Typography } from "@mui/material";
import React, { useState } from "react";

const UploadAudio = () => {
  const [file, setFile] = useState(null);
  const [transcript, setTranscript] = useState("");
  const [uploadProgress, setUploadProgress] = useState(0);

  const onFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const onFileUpload = () => {
    if (!file) {
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

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
            setTranscript(data.transcript);
          }
        } else {
          console.error("Upload failed:", xhr.status);
        }
        setUploadProgress(0);
      }
    };

    xhr.send(formData);
  };

  const getTranscript = async () => {
    const response = await fetch(
      "https://testrepo.nextsolutions.in/STTuploadget"
    );
    const data = await response.json();

    if (data.transcript) {
      setTranscript(data.transcript);
    }
  };

  return (
    <div>
      <h1>Transcription Service</h1>
      <input type="file" onChange={onFileChange} />
      <Button variant="contained" color="primary" onClick={onFileUpload}>
        Upload!
      </Button>
      {uploadProgress > 0 && <progress value={uploadProgress} max="100" />}
      <Button variant="contained" color="primary" onClick={getTranscript}>
        Get Transcript!
      </Button>
      {transcript && (
        <div>
          <h2>Transcript</h2>
          <Typography variant="h3">{transcript}</Typography>
        </div>
      )}
    </div>
  );
};

export default UploadAudio;

import React, { useState } from "react";

export default function UploadVideo() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState("");

  const handleFileChange = (e) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;

    if (!selectedFile.type.startsWith("video/")) {
      alert("Please upload a valid video file.");
      return;
    }

    setFile(selectedFile);
    setPreview(URL.createObjectURL(selectedFile));
  };

  const handleUpload = (e) => {
    e.preventDefault();
    if (!file) {
      alert("Please select a video first!");
      return;
    }

    alert(`File "${file.name}" is ready to upload!`);
    // TODO: connect to backend upload API later
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-xl w-full">
      <h1 className="text-2xl font-semibold mb-4 text-gray-800">Upload Video</h1>

      <form onSubmit={handleUpload} className="space-y-4">
        {/* File Input */}
        <input
          type="file"
          accept="video/*"
          onChange={handleFileChange}
          className="block w-full border p-2 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
        />

        {/* File Details */}
        {file && (
          <div className="text-sm text-gray-700">
            <p>
              <strong>File:</strong> {file.name}
            </p>
            <p>
              <strong>Size:</strong>{" "}
              {(file.size / 1024 / 1024).toFixed(2)} MB
            </p>
          </div>
        )}

        {/* Video Preview */}
        {preview && (
          <video
            src={preview}
            controls
            className="mt-4 rounded-lg w-full border"
          />
        )}

        {/* Upload Button */}
        <button
          type="submit"
          className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition"
        >
          Upload
        </button>
      </form>
    </div>
  );
}

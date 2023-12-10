// Banner.js
import React from 'react';
import YouTube from 'react-youtube';
import './banner.css';

const Banner = () => {
  const videoId = 'dg58bgNU-1Y';

  // Styling for the content on top of the video
  const contentStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    color: 'white',
    zIndex: 1,
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
  };

  // Styling for the overlay div
  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0)', // Adjust the alpha (last value) to control transparency
    zIndex: 2,
  };

  return (
    <div style={{ position: 'relative', overflow: 'hidden', height: '400px' }}>
      {/* Embed YouTube video */}
      <YouTube
        videoId={videoId}
        opts={{
          playerVars: {
            autoplay: 1,
            mute: 1,
            loop: 1,
            playlist: videoId,
            controls: 0, // Hide video controls
            modestbranding: 1, // Hide YouTube logo
            enablejsapi: 0, // Disable JavaScript API to prevent user interaction
            disablekb: 1, // Disable keyboard controls
            playsinline: 1, // Play video inline (iOS)
            showinfo: 0, // Hide video title
          },
        }}
        containerClassName="youtube-container" // Add a class for styling purposes
        onContextMenu={(e) => e.preventDefault()} // Disable right-click menu
        onMouseDown={(e) => e.preventDefault()} // Disable mouse down events
        onTouchStart={(e) => e.preventDefault()} // Disable touch events
      />

      {/* Overlay div to cover YouTube logo, title, and controls */}
      <div style={overlayStyle}></div>

      {/* Content on top of the video */}
      <div style={contentStyle}>
        <div id="banners">
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>CI6103</div>
          <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>Curriculum and Instruction Design for Diversity</div>
          <div style={{ fontSize: '1.5rem' }}>Sharing Action Research Using Technology</div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

import React, { useState } from 'react';
import Modal from 'react-modal';
import ReactPlayer from 'react-player';

Modal.setAppElement('#root'); // set the app root element for accessibility

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
   
    border: 'none',
    borderRadius: '8px',
    padding: '8px',
    width: '800px',
    height: '400px',
   backgroundColor:"#a1c4fd",
   margin:"3px"
  },
};

const VideoModal = ({ onClose, videoData }) => {
  const [currentModal, setCurrentModal] = useState('videoList');
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
    setCurrentModal('videoPlayer');
  };

  const handleCloseModal = () => {
    setSelectedVideo(null);
    setCurrentModal('videoList');
  };

  return (
    <>
      <Modal
        isOpen={currentModal === 'videoPlayer'}
        onRequestClose={handleCloseModal}
        style={customStyles}
        shouldCloseOnOverlayClick={true}
      >
        <div className="video-player">
          {selectedVideo && (
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${selectedVideo.videoUrl}`}
              controls
              playing
              width="100%"
              height="100%"
            />
          )}
          <button onClick={handleCloseModal}  className="button">Close</button>
        </div>
      </Modal>

      <Modal
      
        isOpen={currentModal === 'videoList'}
        onRequestClose={() => onClose()}
        style={customStyles}
        shouldCloseOnOverlayClick={false}
      >
      <button onClick={onClose} className="button" >Close</button>
        <div className="video-list">
          <h2>Select a video to play</h2>
          <div className="video-thumbnail">
          <div className="scrollable-videos">
  {videoData.map((video) => (
    <div key={video.id} className="video-thumbnail"> 
      <img
        src='https://png.pngtree.com/png-clipart/20221018/ourmid/pngtree-youtube-social-media-3d-stereo-png-image_6308427.png'
        alt={video.name}
        onClick={() => handleVideoClick(video)}
      />
      <p>{video.name}</p>
    </div>
  ))}
</div>
          </div>
        </div>
        
      </Modal>

      
    </>
  );
};

export default VideoModal;

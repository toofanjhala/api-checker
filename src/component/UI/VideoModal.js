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
    backgroundColor: "#a1c4fd",
    margin: "3px"
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
              height="300px"
            />
          )}
          <button onClick={handleCloseModal} className="button"  style={{marginTop:"20px"}}>Close</button>
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
            <div className="scrollable-videos" style={{display:"flex", flexWrap: "nowrap",
  overflowX: "auto",
  margin: "2px"}}>
              {videoData.map((video) => (
                <div key={video.id} className="video-thumbnail">
                  <img
                    src='https://png.pngtree.com/png-clipart/20221018/ourmid/pngtree-youtube-social-media-3d-stereo-png-image_6308427.png'
                    alt={video.name}
                    onClick={() => handleVideoClick(video)}
                    style={{
                      width: "7rem",
                      height: "5rem",
                      paddingRight:"40px"
                    }}
                  />
                  <p style={{
                    marginTop: "5px",
  fontSize: "15px",
  fontWeight: "bold", margin: "3px",justifyContent:"spaceAround" ,paddingRight:"40px", paddingBottom:"8rem"}}>{video.name}</p>
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

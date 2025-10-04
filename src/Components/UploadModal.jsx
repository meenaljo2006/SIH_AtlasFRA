// UploadModal.js

import React, { useState, useEffect, useRef } from 'react'; // ⭐ useRef imported
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload} from '@fortawesome/free-solid-svg-icons';
import MapModal from './MapModal'; 
import './UploadModal.css';

const UploadModal = ({ isOpen, onClose }) => {
    // Stage: 'initial', 'uploading', 'processing', 'complete'
    const [stage, setStage] = useState('initial'); 
    const [progress, setProgress] = useState(0);
    const [isMapModalOpen, setIsMapModalOpen] = useState(false); 
    
    // ⭐ NEW STATE: To store the selected file info (name, size, type)
    const [selectedFile, setSelectedFile] = useState(null); 
    
    // ⭐ NEW REF: To access the hidden file input element
    const fileInputRef = useRef(null);

    // --- Data to display in the final stage (Simulated AI Result) ---
    const extractedData = {
        claimant: "Munna Gond",
        village: "Nellore (Adilabad District)",
        area: "12.15 Hectares",
        claimType: "Community Forest Resource",
        confidence: "98%"
    };
    // ------------------------------------------------------------------

    // Reset state when the modal is opened
    useEffect(() => {
        if (isOpen) {
            setStage('initial');
            setProgress(0);
            setSelectedFile(null); // ⭐ Reset file selection
        }
    }, [isOpen]);

    // 1. EFFECT: Simulate progress and transition to 'processing'
    useEffect(() => {
        let timer;
        if (stage === 'uploading' && progress < 100) {
            timer = setInterval(() => {
                setProgress(prevProgress => {
                    const newProgress = prevProgress + 10;
                    if (newProgress >= 100) {
                        clearInterval(timer);
                        setStage('processing');
                        return 100;
                    }
                    return newProgress;
                });
            }, 300);
        }
        return () => clearInterval(timer);
    }, [stage, progress]);

    // 2. EFFECT: Transition from 'processing' to 'complete'
    useEffect(() => {
        let timer;
        if (stage === 'processing') {
            timer = setTimeout(() => {
                setStage('complete');
            }, 2000); 
        }
        return () => clearTimeout(timer);
    }, [stage]);

    // ⭐ NEW HANDLER: Triggers the hidden file input click
    const handleChooseFilesClick = () => {
        fileInputRef.current.click();
    };

    // ⭐ NEW HANDLER: Reads the selected file and sets state
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            // Store basic file details
            setSelectedFile({
                name: file.name,
                size: (file.size / (1024 * 1024)).toFixed(2), // Size in MB
                type: file.type || 'application/octet-stream' // Basic MIME type
            });
            // Immediately start the upload stage
            setStage('uploading');
        }
    };

    const handleCancel = () => {
        setStage('initial');
        setProgress(0);
        setSelectedFile(null);
        onClose();
    };

    const uploadAnother = () =>{
        setStage('initial');
        setProgress(0);
        setSelectedFile(null);
    };

    const openMapModal = () => {
        setIsMapModalOpen(true);
    };

    const handleSave = () => {
        alert("Data Saved Successfully!");
        handleCancel(); 
    };

    if (!isOpen) {
        return null;
    }

    // --- Utility: Format file type display ---
    const getFileTypeDisplay = (mimeType) => {
        if (mimeType.includes('pdf')) return 'PDF Document';
        if (mimeType.includes('image')) return 'Image File';
        if (mimeType.includes('word')) return 'Word Document';
        return 'Document';
    };


    // --- Conditional Content Rendering ---
    
    const renderFileSection = () => {
        // Use selectedFile data, fallback to placeholder data if necessary for initial render
        const fileName = selectedFile ? selectedFile.name : "FRA_Application_Form.pdf";
        const fileSize = selectedFile ? `${selectedFile.size} MB` : "2.4 MB";
        const fileTypeDisplay = selectedFile ? getFileTypeDisplay(selectedFile.type) : "PDF Document";


        if (stage === 'initial') {
            return (
                <div className="drop-area">
                    {/* ⭐ HIDDEN FILE INPUT */}
                    <input 
                        type="file" 
                        ref={fileInputRef} 
                        onChange={handleFileChange} 
                        style={{ display: 'none' }}
                        accept=".pdf,.jpg,.png,.tiff,.doc,.docx" // Restrict files
                    />
                    
                    <div className="upload-icon-box"><span className="upload-icon"><FontAwesomeIcon icon={faUpload} /></span></div>
                    <h3>Drag and Drop Files Here</h3>
                    <p>Or click to browse and select files from your computer</p>
                    <div className="upload-actions">
                        {/* ⭐ MODIFIED: Button clicks the hidden input */}
                        <button className="btn btn-primary" onClick={handleChooseFilesClick}>
                            <span className="icon">📄</span> Choose Files
                        </button>
                        <button className="btn btn-secondary"><span className="icon">📸</span> Take Photo</button>
                    </div>
                </div>
            );
        }

        // States: uploading, processing, or complete
        return (
            <div className="file-status-area">
                <div className="file-info">
                    <span className="file-icon">📄</span>
                    <div className="file-details">
                        {/* ⭐ DYNAMIC FILE INFO */}
                        <p className="file-name">{fileName}</p>
                        <p className="file-size">{fileSize} · {fileTypeDisplay}</p>
                    </div>
                </div>
                
                {/* --- UPLOADING STATE --- */}
                {/* ... (Rest of the rendering logic remains the same, using progress state) ... */}

                {stage === 'uploading' && (
                    <div className="progress-container uploading">
                        <p className="upload-status">Uploading...</p>
                        <span className="progress-percent">{progress}%</span>
                        <div className="progress-bar-bg">
                            <div className="progress-bar-fill" style={{ width: `${progress}%` }}></div>
                        </div>
                    </div>
                )}
                
                {stage === 'processing' && (
                    <div className="progress-container processing">
                        <div className="ai-status-bar">
                            <span className="ai-tag">AI Processing</span>
                            <span className="progress-percent">100%</span>
                        </div>
                        <div className="progress-bar-bg">
                            <div className="progress-bar-fill" style={{ width: '100%', backgroundColor: '#4caf50' }}></div>
                        </div>
                        <div className="ai-instruction-box">
                            Ai is extracting text, identifying claim details, and validating document structure...
                        </div>
                    </div>
                )}

                {stage === 'complete' && (
                    <div className="complete-results">
                        <div className="success-message">
                            <span className="success-icon">✓</span>
                            <div className="msg">
                                <p>Document processed successfully!</p>
                                <p className="confidence">All extracted 15 data fields with {extractedData.confidence} confidence</p>
                            </div>
                        </div>
                            
                        <h4 className="extracted-heading">Extracted Information</h4>
                        <div className="extracted-fields-grid">
                            <div className="field-item"><span className="field-label">Claimant Name:</span><span className="field-value">{extractedData.claimant}</span></div>
                            <div className="field-item"><span className="field-label">Village:</span><span className="field-value">{extractedData.village}</span></div>
                            <div className="field-item"><span className="field-label">Area:</span><span className="field-value">{extractedData.area}</span></div>
                            <div className="field-item"><span className="field-label">Claim Type:</span><span className="field-value">{extractedData.claimType}</span></div>
                        </div>
                    </div>
                )}
            </div>
        );
    };


    return (
        <div className="modal-overlay" onClick={handleCancel}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                
                <div className="modal-header">
                    <h2>Upload Document for Processing</h2>
                    <button className="close-button" onClick={handleCancel}>&times;</button>
                </div>
                
                <p className="modal-subheader">AI-powered digitization and data extraction</p>

                {renderFileSection()}

                {/* Supported Formats (Always visible) */}
                <div className="supported-formats">
                    <h4>Supported Formats:</h4>
                    <div className="format">
                        <div>PDF</div>
                        <div>JPG</div>
                        <div>PNG</div>
                        <div>TIF</div>
                        <div>DOC</div>
                        <div>DOCX</div>
                    </div>
                    <p className="file-size-limit">Maximum file size: 10MB per document</p>
                </div>

                {/* Footer Actions (Conditional Buttons) */}
                <div className="modal-footer">
                    {stage !== 'complete' && (
                         <button className="btn btn-cancel" onClick={handleCancel}>Cancel</button>
                    )}
                    
                    {stage === 'complete' && (
                        <>
                            <button className="btn btn-cancel" onClick={uploadAnother}>Upload Another</button>
                            <button className='btn btn-cancel' onClick={openMapModal}>Draw Boundaries</button>
                            <button className="btn btn-save" onClick={handleSave}>
                                Save to Records
                            </button>
                        </>
                    )}
                </div>
            </div>

            <MapModal 
                isOpen={isMapModalOpen} 
                onClose={() => setIsMapModalOpen(false)} 
            />
        </div>
    );
};

export default UploadModal;
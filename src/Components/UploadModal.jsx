import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload} from '@fortawesome/free-solid-svg-icons';
import './UploadModal.css';

const UploadModal = ({ isOpen, onClose }) => {
    // Stage: 'initial', 'uploading', 'processing', 'complete'
    const [stage, setStage] = useState('initial'); 
    const [progress, setProgress] = useState(0);

    // --- Data to display in the final stage (Simulated AI Result) ---
    const extractedData = {
        claimant: "Ramesh Kumar Singh",
        village: "Samnapur",
        area: "2.5 Acres",
        claimType: "Individual Forest Rights",
        confidence: "98%"
    };
    // ------------------------------------------------------------------

    // Reset state when the modal is opened
    useEffect(() => {
        if (isOpen) {
            setStage('initial');
            setProgress(0);
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
                        setStage('processing'); // Transition to processing
                        return 100;
                    }
                    return newProgress;
                });
            }, 300);
        }
        return () => clearInterval(timer);
    }, [stage, progress]);

    // ⭐ 2. NEW EFFECT: Transition from 'processing' to 'complete'
    useEffect(() => {
        let timer;
        if (stage === 'processing') {
            // Simulate AI processing time (e.g., 2 seconds)
            timer = setTimeout(() => {
                setStage('complete'); // Transition to final stage
            }, 2000); 
        }
        return () => clearTimeout(timer); // Cleanup timer
    }, [stage]);


    const handleChooseFiles = () => {
        setStage('uploading');
    };

    const handleCancel = () => {
        setStage('initial');
        setProgress(0);
        onClose();
    };

    const uploadAnother = () =>{
        setStage('initial');
        setProgress(0);
    };

    const handleSave = () => {
        alert("Data Saved Successfully!");
        handleCancel(); 
    };

    if (!isOpen) {
        return null;
    }

    // --- Conditional Content Rendering ---
    
    const renderFileSection = () => {
        const fileName = "FRA_Application_Form.pdf";
        const fileSize = "2.4 MB · PDF Document";

        if (stage === 'initial') {
            // State: Initial drag and drop view
            return (
                <div className="drop-area">
                    {/* ... (Existing drag and drop content) ... */}
                    <div className="upload-icon-box"><span className="upload-icon"><FontAwesomeIcon icon={faUpload} /></span></div>
                    <h3>Drag and Drop Files Here</h3>
                    <p>Or click to browse and select files from your computer</p>
                    <div className="upload-actions">
                        <button className="btn btn-primary" onClick={handleChooseFiles}>
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
                        <p className="file-name">{fileName}</p>
                        <p className="file-size">{fileSize}</p>
                    </div>
                </div>
                
                {/* --- UPLOADING STATE --- */}
                {stage === 'uploading' && (
                    <div className="progress-container uploading">
                        <p className="upload-status">Uploading...</p>
                        <span className="progress-percent">{progress}%</span>
                        <div className="progress-bar-bg">
                            <div className="progress-bar-fill" style={{ width: `${progress}%` }}></div>
                        </div>
                    </div>
                )}
                
                {/* --- AI PROCESSING STATE --- */}
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

                {/* --- ⭐ FINAL COMPLETE STATE --- */}
                {stage === 'complete' && (
                    <div className="complete-results">
                        {/* Success Message */}
                        <div className="success-message">
                            <span className="success-icon">✓</span>
                            <div className="msg">
                                <p>Document processed successfully!</p>
                                <p className="confidence">All extracted 15 data fields with {extractedData.confidence} confidence</p>
                            </div>
                        </div>
                            

                        {/* Extracted Data Fields */}
                        <h4 className="extracted-heading">Extracted Information</h4>
                        <div className="extracted-fields-grid">
                            <div className="field-item">
                                <span className="field-label">Claimant Name:</span>
                                <span className="field-value">{extractedData.claimant}</span>
                            </div>
                            <div className="field-item">
                                <span className="field-label">Village:</span>
                                <span className="field-value">{extractedData.village}</span>
                            </div>
                            <div className="field-item">
                                <span className="field-label">Area:</span>
                                <span className="field-value">{extractedData.area}</span>
                            </div>
                            <div className="field-item">
                                <span className="field-label">Claim Type:</span>
                                <span className="field-value">{extractedData.claimType}</span>
                            </div>
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
                            <button className='btn btn-cancel'>Draw Boundaries</button>
                            <button className="btn btn-save" onClick={handleSave}>
                                Save to Records
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default UploadModal;
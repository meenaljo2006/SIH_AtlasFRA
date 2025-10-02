import React from "react";
import "./Roadmap.css"; // keep your CSS separate
import {
  FaLock,
  FaUpload,
  FaSearch,
  FaChartLine,
  FaCheckCircle,
} from "react-icons/fa";

const Roadmap = () => {
  const events = [
    { id: 1, title: "Secure Access", icon: <FaLock />,position:"left", desc: "The journey begins when an authorized operator logs into the secure portal to access the system." },
    { id: 2, title: "Upload Docs", icon: <FaUpload />, position:"right", desc: "The operator uploads a scanned FRA claim document, such as a PDF or an image file, to initiate the digitization process." },
    { id: 3, title: "Review", icon: <FaSearch />, position:"left", "desc": "Our AI engine analyzes the document, automatically extracting and structuring key information like names, locations, and claim details." },
    { id: 4, title: "Insights", icon: <FaChartLine />,position:"right",  desc: "A human operator verifies the extracted data for accuracy and uses an interactive map to draw the precise geographic boundary of the claim." },
    { id: 5, title: "Success", icon: <FaCheckCircle />,position:"left",  desc: "The final, verified record is saved and becomes instantly available on the Atlas View. Here, operators can visualize, search by name or district, filter by claim status, and interact with the complete, live dataset of all digitized claims." },
  ];

  return (
    <div className="timeline">
      {events.map((event, index) => (
        <div
          key={index}
          className={`container ${event.position}-container`}
          style={{ animationDelay: `${index * 0.5}s` }}
        >
          <i>{event.icon}</i>
          <div className="text-Box">
            <h2>{event.title}</h2>
            <small dangerouslySetInnerHTML={{ __html: event.desc }} />
            <span
              className={
                event.position === "left"
                  ? "left-container-arrow"
                  : "right-container-arrow"
              }
            ></span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Roadmap;

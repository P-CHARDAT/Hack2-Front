import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import axios from "axios";
import "./Project.css";
import camera from "../../images/camera.png";
import selectphoto from "../../images/selectpicture.png";
import Header from "../Header/Header";
import Tilt from "react-parallax-tilt";
import Group_53 from "../../images/Group_53.svg";

export default function ParamsProfil() {
  const [fileSelected, setFileSelected] = useState(null);
  const [file, setFile] = useState(null);
  const [description, setDescription] = useState(null);
  const [link, setLink] = useState(null);

  const allRef = useRef(null);
  const imgRefContainer = useRef(null);
  const imgRef = useRef(null);
  const labelImgRef = useRef(null);
  const input1Ref = useRef(null);
  const input2Ref = useRef(null);
  const btnRef = useRef(null);
  const traitRef = useRef(null);
  const containerValidationRef = useRef(null);

  useEffect(() => {
    const TimelineProject = gsap.timeline();

    TimelineProject.from(allRef.current, {
      y: -50,
      duration: 0.5,
      delay: 1,
      opacity: 0,
      ease: "power2.out",
    })
      .from(imgRefContainer.current, {
        y: -50,
        duration: 0.3,
        opacity: 0,
        ease: "power2.out",
      })
      .from(imgRef.current, {
        y: -50,
        duration: 0.3,
        opacity: 0,
        ease: "power2.out",
      })
      .from(labelImgRef.current, {
        y: -50,
        duration: 0.3,
        opacity: 0,
        ease: "power2.out",
      })
      .from(traitRef.current, {
        y: -50,
        duration: 0.3,
        opacity: 0,
        ease: "power2.out",
      })
      .from(containerValidationRef.current, {
        y: -50,
        duration: 0.3,
        opacity: 0,
        ease: "power2.out",
      })

      .from(input1Ref.current, {
        y: -50,
        duration: 0.3,
        opacity: 0,
        ease: "power2.out",
      })
      .from(input2Ref.current, {
        y: -50,
        duration: 0.3,
        opacity: 0,
        ease: "power2.out",
      })
      .from(btnRef.current, {
        y: -50,
        duration: 0.3,
        opacity: 0,
        ease: "power2.out",
      });
  }, []);

  const onChangeFile = (event) => {
    const { type } = event.target.files[0];
    if (type !== "image/png" || type !== "image/jpeg") {
      console.log(event.target.files[0]);
      setFileSelected(event.target.files[0]);
    } else {
      alert("Veuillez selectionner un format d'image valide");
    }
  };
  const submitFiles = (e) => {
    e.preventDefault();
    if (fileSelected) {
      const data = new FormData();
      data.append("file", fileSelected);
      data.append(
        "configuration",
        JSON.stringify({
          description,
          url_link: link,
          creator_id: 1,
          category_id: 1,
        })
      );
      console.log(data);
      axios({
        method: "POST",
        url: "http://localhost:8000/api/project",
        data,
      })
        .then((data) => data.data)
        .then((data) => {
          console.log(data);
          setFile({
            filename: `http://localhost:8000/asset_link/` + data.asset_link,
          });
          setDescription("");
          setLink("");
        })
        .catch((err) => {
          alert("Lien creation fail");
        });
    }
  };
  return (
    <div className="couleur-fond">
      <div
        className="background-project"
        style={{
          backgroundImage: `url(${Group_53})`,
          backgroundSize: "cover",
        }}
        ref={allRef}
      >
        <Header />
        <div className="container__paramsprofil">
          <input
            type="file"
            accept="image/*"
            id="multer"
            onChange={onChangeFile}
          />

          <div className="container__imgprofil" ref={imgRefContainer}>
            {!file && (
              <Tilt>
                <img
                  src={selectphoto}
                  alt="test"
                  id="img__multer"
                  ref={imgRef}
                />
              </Tilt>
            )}
            {file && (
              <img
                src={`http://localhost:8000/asset_link/${file.filename}`}
                alt="test"
                id="img__multer"
                ref={imgRef}
              />
            )}
            <label htmlFor="multer">
              <img
                src={camera}
                alt="selection_image"
                id="imgPhoto"
                ref={labelImgRef}
              />
            </label>
          </div>

          <div id="trait" ref={traitRef}></div>
          <div className="container__validation" ref={containerValidationRef}>
            <input
              type="text"
              className="input_projet1"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe your project..."
              ref={input1Ref}
            />
            <input
              type="text"
              className="input_projet2"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              placeholder="link of your project..."
              ref={input2Ref}
            />

            <button
              id="upload__img"
              type="submit"
              onClick={submitFiles}
              ref={btnRef}
            >
              Save Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

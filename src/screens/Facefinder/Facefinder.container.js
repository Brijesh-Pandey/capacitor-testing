/**
Author - Brijesh Pandey
Git - https://bitbucket.org/__brijesh/
**/

import React, {
  useEffect,
  useState
} from "react";

import FaceIndicator from "./FaceIndicator";
import pico from "./Pico";

import ReactPico from "./NewReactPico";

const FacefinderContainer = () => {
  // const [picoUnpackedData, setPicoUnpackedData] = useState({});
  const [face, setFace] = useState();

  // useEffect(() => {
  //   getFaceFinder();
  // }, [])

  // useEffect(() => {
  //   console.log(picoUnpackedData, "from face finder");
  // }, [picoUnpackedData])

  // const getFaceFinder = () => {
  //   const cascadeUrl = "https://raw.githubusercontent.com/nenadmarkus/pico/c2e81f9d23cc11d1a612fd21e4f9de0921a5d0d9/rnt/cascades/facefinder";
  //   fetch(cascadeUrl).then((response) => {
  //     response.arrayBuffer().then((buffer) => {
  //       const bytes = new Int8Array(buffer);
  //       setPicoUnpackedData(pico.unpack_cascade(bytes));
  //     })
  //   })
  // }

  return (
    <>
      <ReactPico onFaceFound={(face) => {setFace(face)}} />
      {face && <FaceIndicator x={face.totalX} y={face.totalY} />}
    </>
  )
}

export default FacefinderContainer;

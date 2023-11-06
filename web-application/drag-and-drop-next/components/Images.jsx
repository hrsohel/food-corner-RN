"use client";
import React from "react";
import { images } from "@/data";
import Image from "next/image";

const Images = () => {
  const [imageData, setImageData] = React.useState(images);
  const [count, setCount] = React.useState(0);
  const dragItem = React.useRef();
  const dragItemOver = React.useRef();
  //   this handler function will trigger when you end the drag event
  const handler = () => {
    const _imageData = [...imageData];
    const dragedItem = _imageData.splice(dragItem.current, 1)[0];
    _imageData.splice(dragItemOver.current, 0, dragedItem);
    dragItem.current = null;
    dragItemOver.current = null;
    setImageData(_imageData);
  };
  // in data.js file I conbined every data into 3 properties. you can check data.js file
  // this function will update the checked property of image data from false to true
  // or vice versa
  // if checked property of an image data is true, image will be selected
  const myFunc = (index, item) => {
    const _imageData = [...imageData];
    _imageData[index] = { ...item, checked: !item.checked };
    if (_imageData[index].checked) setCount((prev) => prev + 1);
    else setCount((prev) => prev - 1);
    setImageData(_imageData);
  };
  //   this function will elete selected files
  const deleteFiles = () => {
    let _imageData = [...imageData];
    _imageData = _imageData.filter((item) => !item.checked);
    setImageData(_imageData);
    setCount(0);
    console.log(imageData);
  };
  return (
    <>
      {/* start of the div where number of selected files and delete files button shows */}
      {/* you will see this div at the top */}
      <div className="px-4 sm:px-12 py-4 flex items-center justify-between">
        {count ? (
          <>
            <div className="flex items-center justify-center gap-2 text-lg sm:text-xl font-semibold">
              <input type="checkbox" checked={true} className="w-5 h-5" />
              <p>{count} files selected</p>
            </div>
            <button
              onClick={deleteFiles}
              className="text-lg sm:text-xl cursor-pointer text-red-500"
            >
              Delete files
            </button>
          </>
        ) : (
          <>
            <div className="py-4"></div>
          </>
        )}
      </div>
      {/* end of the div where number of files selected and delete files button shows */}
      {/* start of the div where images are shown */}
      <div className="md:w-[90%] mx-auto flex items-center justify-center flex-wrap gap-4 p-4 rounded-md ">
        {imageData.map((item, index) => (
          <>
            <div
              className={`w-[5rem] relative sm:w-[10rem] image-div h-[5rem] sm:h-[10rem] rounded-md border-2`}
              key={item.id}
              draggable
              onDragStart={() => (dragItem.current = index)}
              onDragEnter={() => (dragItemOver.current = index)}
              onDragEnd={handler}
            >
              <Image
                src={`/images/${item.image}`}
                className="w-full h-full object-contain"
                width="1000"
                height="1000"
                alt="images"
              />
              {/* overlay div. it is shown when hover this image */}
              <div
                className={`${
                  item.checked ? "bg-slate-300 opacity-70" : ""
                }  absolute image-overlay left-0 top-0 hover:opacity-60 hover:bg-slate-500 w-full h-full`}
              ></div>
              {/* this is a checkbox. it is shown when hover the image */}
              <input
                type="checkbox"
                name=""
                className={`bg-white selected-icon ${
                  item.checked ? "z-10" : "-z-10"
                } absolute left-2 top-2 w-4 h-4`}
                onClick={() => myFunc(index, item)}
              />
            </div>
          </>
        ))}
        <div className="w-[5rem] cursor-pointer text-center flex items-center justify-center bg-slate-100 sm:w-[10rem] h-[5rem] sm:h-[10rem] rounded-md border-2">
          Add image
        </div>
      </div>
      {/* end of the div where images are shown */}
    </>
  );
};

export default Images;

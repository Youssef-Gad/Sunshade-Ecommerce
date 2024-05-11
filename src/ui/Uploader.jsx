import React from "react";
import { uploadProducts } from "../services/apiProducts";

function Uploader() {
  return (
    <button
      className="border bg-gray-500 text-white p-2 rounded-md"
      onClick={async () => await uploadProducts()}
    >
      Upload data
    </button>
  );
}

export default Uploader;

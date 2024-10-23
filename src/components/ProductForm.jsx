import { useState } from "react";

function ProductForm() {
  let [namePro, setnamePro] = useState("");
  let [imagePro, setimagePro] = useState("");
  let [pricePro, setPricePro] = useState("");
  let [desPro, setDesPro] = useState("");
  console.log(namePro);
  console.log(imagePro);
  console.log(pricePro);
  console.log(desPro);
  const handleProduct = (e) => {
    event.preventDefault();

    window.alert(
      JSON.stringify({
        name: namePro,
        price: imagePro,
        image: pricePro,
        description: desPro,
      })
    );
  };

  return (
    <form className="post-form" onSubmit={handleProduct}>
      <h1>Create Product Form</h1>
      <div className="input-container">
        <label>
          Name
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter name here"
            onChange={(e) => {
              setnamePro(e.target.value);
            }}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Image Url
          <input
            id="image"
            name="image"
            type="text"
            placeholder="Enter image url here"
            onChange={(e) => {
              setimagePro(e.target.value);
            }}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Price
          <input
            id="price"
            name="price"
            type="number"
            placeholder="Enter price here"
            onChange={(e) => {
              setPricePro(e.target.value);
            }}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Description
          <textarea
            id="description"
            name="description"
            type="text"
            placeholder="Enter description here"
            onChange={(e) => {
              setDesPro(e.target.value);
            }}
            rows={4}
            cols={30}
          />
        </label>
      </div>
      <div className="form-actions">
        <button type="submit">Create</button>
      </div>
    </form>
  );
}

// function ProductForm() {
//   let [product, setProduct] = useState({
//     name: "",
//     img: "",
//     price: "",
//     description: "",
//   });

//   const handleProduct = (e) => {
//     console.log(JSON.stringify(product));
//     window.alert(JSON.stringify(product));
//   };

//   return (
//     <form className="post-form" onSubmit={handleProduct}>
//       <h1>Create Product Form</h1>
//       <div className="input-container">
//         <label>
//           Name
//           <input
//             id="name"
//             name="name"
//             type="text"
//             placeholder="Enter name here"
//             onChange={(e) => {
//               setProduct({ ...product, name: e.target.value });
//             }}
//           />
//         </label>
//       </div>
//       <div className="input-container">
//         <label>
//           Image Url
//           <input
//             id="image"
//             name="image"
//             type="text"
//             placeholder="Enter image url here"
//             onChange={(e) => {
//               setProduct({ ...product, img: e.target.value });
//             }}
//           />
//         </label>
//       </div>
//       <div className="input-container">
//         <label>
//           Price
//           <input
//             id="price"
//             name="price"
//             type="number"
//             placeholder="Enter price here"
//             onChange={(e) => {
//               setProduct({ ...product, price: e.target.value });
//             }}
//           />
//         </label>
//       </div>
//       <div className="input-container">
//         <label>
//           Description
//           <textarea
//             id="description"
//             name="description"
//             type="text"
//             placeholder="Enter description here"
//             onChange={(e) => {
//               setProduct({ ...product, description: e.target.value });
//             }}
//             rows={4}
//             cols={30}
//           />
//         </label>
//       </div>
//       <div className="form-actions">
//         <button type="submit">Create</button>
//       </div>
//     </form>
//   );
// }

export default ProductForm;

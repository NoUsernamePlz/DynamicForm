import React, { useState } from "react";
import ToggleButton from "./ToggleButton";

const Form = () => {
  const [formFields, setFormFields] = useState([
    { fieldName: "", fieldType: "string" },
  ]);

  const addField = (e) => {
    setFormFields([...formFields, { fieldName: "", fieldType: "string" }]);
    e.preventDefault();
  };

  const deleteField = (index) => {
    const newFormFields = [...formFields];
    newFormFields.splice(index, 1);
    setFormFields(newFormFields);
  };

  const handleFieldChange = (e, index) => {
    const { name, value } = e.target;
    const newFormFields = [...formFields];
    newFormFields[index][name] = value;
    setFormFields(newFormFields);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formFields);
  };

  return (
    <form onSubmit={handleSubmit}>
      {formFields.map((field, index) => (
        <div
          className="bg-violet-100 border-2 border-violet-200 p-2 ml-24 "
          key={index}
        >
          <div className="flex items-center bg-voilet-100 hover:bg-violet-300 rounded-lg px-3">
            <div className="mr-auto">
              <input
                className="bg-violet-200 hover:bg-white p-2 rounded-lg mr-5"
                type="text"
                placeholder="addField"
                name="fieldName"
                value={field.fieldName}
                onChange={(e) => handleFieldChange(e, index)}
              />
              <select
                className="bg-white  p-2 rounded-md "
                name="fieldType"
                value={field.fieldType}
                onChange={(e) => handleFieldChange(e, index)}
              >
                <option value="string">String</option>
                <option value="number">Number</option>
                <option value="boolean">Boolean</option>
                <option value="object">Object</option>
              </select>{" "}
            </div>
            Required
            <ToggleButton />
            <button
              className="bg-white hover:bg-violet-600 w-5 h-5 m-2 rounded-md flex justify-center items-center mx-6"
              onClick={addField}
            >
              +
            </button>
            <button
              className="bg-white w-5 h-5 m-2 rounded-md"
              onClick={deleteField}
            >
              <svg
                className="px-23"
                fill="#000000"
                height="20px"
                width="20px"
                version="1.1"
                id="Layer_1"
                viewBox="0 0 512 512"
              >
                <g>
                  <g>
                    <path
                      d="M60.236,210.824L90.354,512h331.294l30.118-301.176H60.236z M188.236,459.294H143.06V263.529h45.176V459.294z
			 M278.589,459.294h-45.177V263.529h45.177V459.294z M368.942,459.294h-45.176V263.529h45.176V459.294z"
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <path
                      d="M391.53,90.353h-52.706v-7.529C338.824,37.155,301.67,0,256.001,0s-82.824,37.155-82.824,82.824v7.529h-52.706
			c-44.767,0-81.908,32.565-89.08,75.294h449.218C473.438,122.918,436.297,90.353,391.53,90.353z M293.648,90.353h-75.294v-7.529
			c0-20.759,16.888-37.647,37.647-37.647s37.647,16.888,37.647,37.647V90.353z"
                    />
                  </g>
                </g>
              </svg>
            </button>
            <button
              className="bg-violet-600 hover:bg-white  text-white hover:text-black p-3 w-12 h-6 rounded-full ml-6 flex justify-center items-center"
              onClick={handleSubmit}
            >
              Save
            </button>
          </div>

          {field.fieldType === "object" && <Form />}
        </div>
      ))}
    </form>
  );
};

export default Form;

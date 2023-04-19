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
          className="bg-violet-100 border-2 border-violet-200 p-2 ml-4 md:ml-24 lg:ml-24 "
          key={index}
        >
          <div className="flex items-center bg-voilet-100 hover:bg-violet-300 rounded-lg px-3">
            <div className="mr-auto flex">
              <input
                className="bg-violet-200 hover:bg-white p-0 md:p-2 lg:p-2 rounded-lg mr-2 md:mr-5 lg:mr-5 w-12 md:w-32 lg:w-32 text-sm md:text-normal lg:text-normal"
                type="text"
                placeholder="addField"
                name="fieldName"
                value={field.fieldName}
                onChange={(e) => handleFieldChange(e, index)}
              />
              <select
                className="bg-white p-0 md:p-2 lg:p-2  rounded-md  w-12 md:w-32 lg:w-32 text-sm md:text-normal lg:text-normal"
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
            <ToggleButton />
            <button
              className="ml-2 md:ml-3 lg:ml-4 "
              onClick={addField}
            >
              <svg fill="#000000" width="15px" height="15px" viewBox="0 0 32 32" version="1.1">

             <path d="M0 26.016q0 2.496 1.76 4.224t4.256 1.76h20q2.464 0 4.224-1.76t1.76-4.224v-20q0-2.496-1.76-4.256t-4.224-1.76h-20q-2.496 0-4.256 1.76t-1.76 4.256v20zM4 26.016v-20q0-0.832 0.576-1.408t1.44-0.608h20q0.8 0 1.408 0.608t0.576 1.408v20q0 0.832-0.576 1.408t-1.408 0.576h-20q-0.832 0-1.44-0.576t-0.576-1.408zM8 16q0 0.832 0.576 1.44t1.44 0.576h4v4q0 0.832 0.576 1.408t1.408 0.576 1.408-0.576 0.608-1.408v-4h4q0.8 0 1.408-0.576t0.576-1.44-0.576-1.408-1.408-0.576h-4v-4q0-0.832-0.608-1.408t-1.408-0.608-1.408 0.608-0.576 1.408v4h-4q-0.832 0-1.44 0.576t-0.576 1.408z"></path>
             </svg> 

            </button>
            <button
              className=" mx-2 md:mx-4 lg:mx-6  "
              onClick={deleteField}
            >
              <svg
                
                fill="#000000"
                height="15px"
                width="15px"
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
           
              onClick={handleSubmit}
            >
              <svg fill="#000000" width="15px" height="15px" viewBox="0 0 32 32" version="1.1">
               <path d="M0 26.016v-20q0-2.496 1.76-4.256t4.256-1.76h20q2.464 0 4.224 1.76t1.76 4.256v20q0 2.496-1.76 4.224t-4.224 1.76h-20q-2.496 0-4.256-1.76t-1.76-4.224zM4 26.016q0 0.832 0.576 1.408t1.44 0.576h20q0.8 0 1.408-0.576t0.576-1.408v-20q0-0.832-0.576-1.408t-1.408-0.608h-20q-0.832 0-1.44 0.608t-0.576 1.408v20zM7.584 16q0-0.832 0.608-1.408t1.408-0.576 1.408 0.576l2.848 2.816 7.072-7.040q0.576-0.608 1.408-0.608t1.408 0.608 0.608 1.408-0.608 1.408l-8.48 8.48q-0.576 0.608-1.408 0.608t-1.408-0.608l-4.256-4.256q-0.608-0.576-0.608-1.408z"></path>
                </svg>
            </button>
          </div>

          {field.fieldType === "object" && <Form />}
        </div>
      ))}
    </form>
  );
};

export default Form;

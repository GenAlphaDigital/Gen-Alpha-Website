"use client";
import SmoothScrolling from "@/app/SmoothScrolling";
import React from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();

const services = [
  { value: "Content & Copywriting", label: "Content & Copywriting" },
  {
    value: "Graphic Design, Iconography & Illustrations",
    label: "Graphic Design, Iconography & Illustrations",
  },
  { value: "Video Editing & Animation", label: "Video Editing & Animation" },
  {
    value: "Film Production, AVs & Product Photography",
    label: "Film Production, AVs & Product Photography",
  },
  {
    value: "Brand Identity, Brand Guide & Brand Story",
    label: "Brand Identity, Brand Guide & Brand Story",
  },
  { value: "Custom Web Development", label: "Custom Web Development" },
  { value: "Web Personalization", label: "Web Personalization" },
  { value: "UI/UX Design", label: "UI/UX Design" },
  { value: "CRM & ERP Solutions", label: "CRM & ERP Solutions" },
  { value: "E-Commerce Solutions", label: "E-Commerce Solutions" },
  { value: "AR/VR", label: "AR/VR" },
  { value: "Media Buying", label: "Media Buying" },
  { value: "Media Planning", label: "Media Planning" },
  { value: "Performance Marketing", label: "Performance Marketing" },
  { value: "Affiliate Marketing", label: "Affiliate Marketing" },
  { value: "SEO", label: "SEO" },
  { value: "Social Media Marketing", label: "Social Media Marketing" },
];

export default function AnimatedMulti() {
  const customStyles = {
    menu: (provided) => ({
      ...provided,
      maxHeight: "100vh",
      overflowY: "scroll",
    }),
  };

  return (
    <SmoothScrolling>
      <Select
        className="w-[30%]"
        closeMenuOnSelect={false}
        components={animatedComponents}
        isMulti
        options={services}
        styles={customStyles}
        onChange={(e) => console.log(e)}
        menuPortalTarget={document.body}
      />
    </SmoothScrolling>
    // <div>
    //   <select name="services_list" id="services">
    //     <option value="" defaultChecked>
    //       Select Services
    //     </option>
    //     {services.map((service) => (
    //       <option key={service.value} value={service.value}>
    //         {service.label}
    //       </option>
    //     ))}
    //   </select>
    // </div>
  );
}

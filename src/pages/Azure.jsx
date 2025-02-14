import React from "react";
import Azure_Hero from "../container/Services/Cloud/AZURE/Azure_Hero";
import Azure_info from "../container/Services/Cloud/AZURE/Azure_info";
import Azure_feature from "../container/Services/Cloud/AZURE/Azure_feature";
import Azure_services from "../container/Services/Cloud/AZURE/Azure_services";
import Azure_Card from "../container/Services/Cloud/AZURE/Azure_Card";

function Azure() {
  return (
    <>
      <Azure_Hero />
      <Azure_info />
      <Azure_feature />
      <Azure_services />
      <Azure_Card />
    </>
  );
}

export default Azure;

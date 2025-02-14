import React from "react";
import Azure_intro from "../../../../assets/Azore_intro.png"
import Heading from "../../../../Layout/Heading";
import WrapperContainer from "../../../../Layout/WrapperContainer";
import Paragraph from "../../../../Layout/Paragraph";

function Azure_info() {
  return (
    <>
    <WrapperContainer>
      <div className="flex flex-col items-center justify-center text-center">
        <img src={Azure_intro} alt="AZURE MICROSOFT LOGO" className="w-40" />
        <Heading>
          <p className="text-[50px] font-bold">AZURE</p>
        </Heading>
      </div>
      
      <div>
      <Paragraph>
        <p className="text-center">Azure provides a comprehensive suite of cloud services that enable organizations to streamline operations, enhance scalability, and improve security while reducing infrastructure costs. By leveraging Azure, businesses can deploy applications globally, manage data efficiently, and integrate AI-driven solutions without the complexities of maintaining physical hardware. Its flexible cloud environment supports various workloads, from web applications and databases to advanced analytics and IoT solutions, making it an essential platform for modern digital transformation.</p>
        </Paragraph>
      </div>
</WrapperContainer>
    </>
  );
}

export default Azure_info;

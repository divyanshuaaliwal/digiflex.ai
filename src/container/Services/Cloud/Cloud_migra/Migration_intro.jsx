import Heading from "../../../../Layout/Heading";
import WrapperContainer  from "../../../../Layout/WrapperContainer";
import React from "react";
import Paragraph from '../../../../Layout/Paragraph'

function Migration_intro() {
  return (
  <>
  <WrapperContainer> 
    <div>
    <Heading>
        <h1>Legacy to Cloud Migration</h1>
        </Heading>
        <Paragraph>
        <p className="text-center">Legacy to Cloud Migration is the process of transferring applications, databases, and IT infrastructure from outdated, on-premise systems to modern cloud environments like AWS, Microsoft Azure, or Google Cloud. This transition allows organizations to improve scalability, cost efficiency, security, and disaster recovery while enabling greater flexibility and innovation. By moving to the cloud, businesses can scale resources up or down based on demand, optimize IT expenses with a pay-as-you-go pricing model, and leverage advanced security measures to protect their data. Additionally, cloud platforms offer reliable disaster recovery solutions, reducing downtime and ensuring business continuity. The migration process also accelerates digital transformation, allowing organizations to adopt modern technologies and enhance operational efficiency.</p>
        </Paragraph>
    </div>
    </WrapperContainer>
  </>
  )
}

export default Migration_intro;




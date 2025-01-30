import "./hexagon.css";

const steps = [
    { id: "01", title: "Threat Modelling" },
    { id: "02", title: "Gather Requirements" },
    { id: "03", title: "Penetration Testing" },
    { id: "04", title: "Code Review" },
    { id: "05", title: "Testing During Development" },
    { id: "06", title: "Security Audits" },
    { id: "07", title: "Incident Response Planning" },
    { id: "08", title: "Continual Monitoring" },
    { id: "09", title: "Data Encryption" },
    { id: "10", title: "Access Control" },
    { id: "11", title: "User Education" },
    { id: "12", title: "Backup and Recovery" },
];

const tools = [
    "AppScan", "Checkmarx", "HP WebInspect", "Acunetix", "ZAP", "BurpSuite", "Tenable Nessus", "Sonar", "Snyk"
];
export default function SecurityApproach() {
    return (
        <div className="w-11/12 mx-auto px-4 py-12 bg-white text-center">
            
            <h2 className="text-5xl font-semibold text-[#1A2E6F] mb-10">
                Our Approach To Ensure Complete Security
            </h2>
            
            <div className="flex flex-wrap max-w-5xl mx-auto gap-2 mt-10">
                {
                    steps.map((step, index) => (
                        <div key={step.id} className={`hexagon ${index % 2 === 0 ? "mt-20" : ""}`}>
                            <div className="hexagon-inner">
                                <span className="text-5xl font-semibold text-purple-900">{step.id}</span>
                                <h3 className="text-xl font-semibold">{step.title}</h3>
                                
                            </div>
                        </div>
                    ))
                }
            </div>
            
            <h3 className="text-3xl font-semibold text-[#1A2E6F] mt-10">Tools We Use</h3>
            <p className="text-gray-600 mb-4">We leverage the latest and best tools for web test automation.</p>
            <div className="flex flex-wrap justify-center gap-4">
                {
                    tools.map((tool) => (
                        <div key={tool} className="px-4 py-2 border rounded-lg shadow-sm text-purple-700 border-purple-500">
                            {tool}
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

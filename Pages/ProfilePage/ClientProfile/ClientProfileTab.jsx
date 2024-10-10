import React, { useState } from 'react';
import Tab from './TabComp';
import { FaUser, FaBriefcase, FaFolderOpen, FaLink, FaFileAlt } from 'react-icons/fa';
import ClientWorkExperience from './ClientWorkExperience';
import ClientContacts from './ClientContacts';
import ClientSocialLinks from './ClientSocialLinks';



const tabsData = [
  { label: 'About me', icon: FaUser, content: <div>About me content</div> },
  { label: 'Work experience', icon: FaBriefcase, content: <><ClientWorkExperience/></> },
  { label: 'Portfolio', icon: FaFolderOpen, content: <div>Portfolio content</div> },
  { label: 'Social links', icon: FaLink, content: <><ClientSocialLinks/></> },
  { label: 'CV and Contacts', icon: FaFileAlt, content: <><ClientContacts/></> },
];

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className='lg:flex block'>
      {/* tabsbutton */}
      <div className="flex  lg:block lg:space-y-3 lg:overflow-hidden overflow-x-auto mb-2 w-full lg:w-[30%]
       space-x-6 lg:space-x-0 whitespace-nowrap">
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            label={tab.label}
            Icon={tab.icon}
            isActive={index === activeTab}
            onClick={() => setActiveTab(index)}
          />
        ))}
      </div>
      <div className=" w-full">
        {tabs[activeTab].content}
      </div>
    </div>
  );
};

const ClientProfileTab = () => {
  return (
    <div className="w-full px-  ">
      <Tabs tabs={tabsData} />
    </div>
  );
};

export default ClientProfileTab;
import React from 'react';
import { DollarSign, FileText, Clipboard, Users, Link } from 'lucide-react';

const features = [
  {
    icon: <DollarSign className="text-purple-600 w-8 h-8" />,
    title: 'DONATION PAGES',
  },
  {
    icon: <FileText className="text-purple-600 w-8 h-8" />,
    title: 'CAMPAIGN PAGES',
  },
  {
    icon: <Clipboard className="text-purple-600 w-8 h-8" />,
    title: 'EMBEDDABLE FORMS',
  },
  {
    icon: <Users className="text-purple-600 w-8 h-8" />,
    title: 'DONOR MANAGEMENT',
  },
  {
    icon: <Link className="text-purple-600 w-8 h-8" />,
    title: 'INTEGRATIONS',
  },
];

const PageSection: React.FC = () => {
  return (
    <div className="flex flex-col items-center mt-24 mb-8 px-4 sm:px-8 lg:px-12">
      <h2 className="lg:text-4xl font-bold text-center mb-8 text-3xl">
        A refreshingly simple end-to-end fundraising solution built to help you raise more
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center w-40 md:w-48 lg:w-56">
            <div className="mb-2">{feature.icon}</div>
            <h3 className="text-lg font-medium text-text-color-third text-center">{feature.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PageSection;

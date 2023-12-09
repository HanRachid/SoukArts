import React, { ReactNode } from 'react';
import { XCircleIcon } from '@heroicons/react/24/outline';

interface AlertBoxProps {
  title: string;
  subtitle: string; 
}

const AlertBox: React.FC<AlertBoxProps> = ({ title, subtitle }) => {
  console.log('AlertBoxProps: ', title, subtitle);
  return (
    <div role="alert" className="rounded-xl border border-gray-100 bg-white p-4">
      <div className="flex items-start gap-4">
      

        <div className="flex-1">
          <strong className="block font-medium text-gray-900">{title}</strong>
          <p className="mt-1 text-sm text-gray-700">{subtitle}</p>
        </div>

        <button className="text-gray-500 transition hover:text-gray-600">
          <span className="sr-only">Dismiss popup</span>
          {/* Dismiss button icon */}
          <XCircleIcon className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default AlertBox;

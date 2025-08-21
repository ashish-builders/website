import { useMutation } from '@tanstack/react-query';

type SaveLeadFormData = {
  email: string;
  name: string;
  phone: string;
  propertyType: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_medium?: string;
  utm_source?: string;
  utm_term?: string;
  whenToBuy: string;
};

export default function useSaveLeadFormService() {
  return useMutation({
    mutationFn: async (data: SaveLeadFormData) => {
      const response = await fetch('/api/enquiries', {
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      });
      if (!response.ok) {
        throw new Error('Failed to save lead form');
      }
      return response.json();
    },
  });
}

'use client';

import { useForm, UseFormReturn } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import * as React from 'react';

export const PropertyType = {
  '2bhk-villa': { label: '2BHK Villa', value: '2bhk-villa' },
  '3bhk-duplex-villa': { label: '3BHK Duplex Villa', value: '3bhk-duplex-villa' },
  '3bhk-villa': { label: '3BHK Villa', value: '3bhk-villa' },
  '4bhk-duplex-villa': { label: '4BHK Duplex Villa', value: '4bhk-duplex-villa' },
};

export const WhenToBuy = {
  immediately: {
    label: 'Immediately',
    value: 'immediately',
  },
  'more-than-6-months': {
    label: 'More than 6 months',
    value: 'more-than-6-months',
  },
  'within-3-6-months': {
    label: 'Within 3-6 months',
    value: 'within-3-6-months',
  },
  'within-3-months': {
    label: 'Within 3 months',
    value: 'within-3-months',
  },
};

export const leadFormSchema = z.object({
  email: z.string().email('Enter a valid email address'),
  iAgree: z.boolean().refine((val) => !!val, { message: 'You must agree before submitting' }),
  name: z.string().min(2, 'Name is required'),
  phone: z
    .string()
    .min(10, 'Phone number is required')
    .regex(/^((\+91)?[6-9][0-9]{9})$/, 'Enter a valid Indian mobile number'),
  propertyType: z.string().min(1, 'Property type is required'),
  whenToBuy: z.string().min(1, 'When to buy is required'),
});

export type LeadFormValues = z.infer<typeof leadFormSchema>;

export function getLeadFormDefaultValues(): LeadFormValues {
  return {
    email: '',
    iAgree: false,
    name: '',
    phone: '',
    propertyType: '2bhk-villa',
    whenToBuy: 'immediately',
  };
}

export function useLeadForm(): UseFormReturn<LeadFormValues> {
  const defaultValues = React.useMemo(() => getLeadFormDefaultValues(), []);
  return useForm<LeadFormValues>({
    defaultValues,
    resolver: zodResolver(leadFormSchema),
  });
}

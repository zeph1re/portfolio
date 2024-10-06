'use client';

import { CustomButtonProps } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function CustomButton({ title, containerStyles, link }: CustomButtonProps) {
  return (
    <>
      <Link href={`${link}`} target="_blank" className={`custom-btn ${containerStyles}`}>
        <button disabled={false} type={'button'} className="flex flex-row">
          <span className="flex-1">{title}</span>
        </button>
      </Link>
    </>
  );
}

export default CustomButton;
